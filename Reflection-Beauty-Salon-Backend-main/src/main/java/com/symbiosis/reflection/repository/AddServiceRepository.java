package com.symbiosis.reflection.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.symbiosis.reflection.model.AddService;

@Repository
public interface AddServiceRepository extends JpaRepository<AddService, Integer> {
    
}
