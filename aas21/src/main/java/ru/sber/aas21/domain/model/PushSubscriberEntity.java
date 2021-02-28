package ru.sber.aas21.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "push_subscribers")
public class PushSubscriberEntity extends BaseEntity<Long> {

    @ManyToOne
    @JoinColumn(name="owner_id", nullable=false)
    private UserEntity owner;

    @Column(unique = true)
    private String token;
}
