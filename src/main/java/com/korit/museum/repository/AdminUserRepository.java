package com.korit.museum.repository;

import com.korit.museum.entity.AdminMst;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminUserRepository extends JpaRepository<AdminMst, Long> {
    Optional<AdminMst> findByAdminId(String adminId);
}
