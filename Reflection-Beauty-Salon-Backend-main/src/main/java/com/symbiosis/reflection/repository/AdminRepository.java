package com.symbiosis.reflection.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.symbiosis.reflection.model.Admin;

@Repository
@Qualifier("admRepo")
public interface AdminRepository extends JpaRepository<Admin, Integer>{
Admin findByEmailAndPassword(String email, String passsword);
}
