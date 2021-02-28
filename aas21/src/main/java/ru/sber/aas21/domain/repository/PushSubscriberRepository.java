package ru.sber.aas21.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sber.aas21.domain.model.PushSubscriberEntity;

import java.util.Optional;

public interface PushSubscriberRepository extends JpaRepository<PushSubscriberEntity, Long> {

    Optional<PushSubscriberEntity> findByToken(String token);
}
