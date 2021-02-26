package ru.sber.aas21.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sber.aas21.domain.model.UserEntity;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByUsername(String username);

    Boolean existsByUsername(String username);

    void deleteByUsername(String username);
}
