package ru.sber.aas21.configuration.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import ru.sber.aas21.domain.model.Gender;
import ru.sber.aas21.domain.model.Role;
import ru.sber.aas21.exception.CustomException;
import ru.sber.aas21.model.UserDto;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Collections;
import java.util.Date;
import java.util.Map;

@Component
public class JwtTokenProvider {

    /**
     * THIS IS NOT A SECURE PRACTICE! For simplicity, we are storing a static key here. Ideally, in a
     * microservices environment, this key would be kept on a config-server.
     */
    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey;

    @Value("${security.jwt.token.expire-length:3600000}")
    private long validityInMilliseconds = 3600000; // 1h

    @Value("${user.birthday.format}")
    private String birthdayFormat;

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(String username, UserDto user) {

        Claims claims = Jwts.claims().setSubject(username);
        claims.put("user", user);

        Date now = new Date();
        Date validity = new Date(now.getTime() + validityInMilliseconds);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public UsernamePasswordAuthenticationToken getAuthentication(String token) {
        UserDto user = getUser(token);
        return new UsernamePasswordAuthenticationToken(user, null,
                Collections.singleton(new SimpleGrantedAuthority("ROLE_" + user.getRole().name())));
    }

    public String getUsername(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    public UserDto getUser(String token) {
        @SuppressWarnings("unchecked")
        Map<String, String> user = (Map<String, String>) Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().get("user");
        return new UserDto(null, user.get("username"), user.get("nickname"), user.get("email"), Role.valueOf(user.get("role")),
                user.get("phoneNumber"), user.get("firstName"), user.get("lastName"), user.get("surname"), user.get("inn"),
                user.get("passportNumber"), Gender.valueOf(user.get("gender")), user.get("birthDay"));
    }

    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            throw new CustomException("Expired or invalid JWT token", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
