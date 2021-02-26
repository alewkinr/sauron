package ru.sber.aas21.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sber.aas21.domain.model.MigrationEntity;

public interface MigrationRepository extends JpaRepository<MigrationEntity, Long> {

    boolean existsByClassName(String className);
}
