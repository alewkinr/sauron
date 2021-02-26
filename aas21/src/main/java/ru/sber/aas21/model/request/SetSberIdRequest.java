package ru.sber.aas21.model.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SetSberIdRequest {
    private String username;
    private String sberId;
}
