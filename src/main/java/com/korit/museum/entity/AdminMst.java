package com.korit.museum.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminMst {

    private Long id;
    private String adminId;

    private String password;

    private String  adminName;

    private String role;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}
