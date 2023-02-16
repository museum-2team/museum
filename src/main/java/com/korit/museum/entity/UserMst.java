package com.korit.museum.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserMst {

    private String userId;

    private String username;

    private String password;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}
