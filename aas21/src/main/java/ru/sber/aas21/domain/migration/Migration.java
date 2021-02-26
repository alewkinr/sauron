package ru.sber.aas21.domain.migration;

/**
 * Conventional naming by order
 */
public interface Migration {
    String getId();

    void migrate();
}
