package ru.sber.aas21.domain.model;

import lombok.*;
import org.hibernate.envers.Audited;
import org.hibernate.envers.NotAudited;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true, exclude = "relations")
@ToString(exclude = "relations")
@Audited
@Entity
@Table(name = "back_users")
public class UserEntity extends BaseEntity<Long> {

    @Column(unique = true, nullable = false)
    private String username;

    @Column
    private String nickname;

    @Column
    private String email;

    @Column
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(unique = true, nullable = false)
    private String phoneNumber;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String surname;

    @Column
    private String inn;

    @Column
    private String passportNumber;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column
    private LocalDate birthDay;

    @Column
    private String city;

    @Column(unique = true)
    private String sberId;

    @NotAudited
    @OneToMany(mappedBy = "owner")
    private Set<PushSubscriberEntity> tokens = new HashSet<>();
}
