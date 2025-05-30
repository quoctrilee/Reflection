package com.symbiosis.reflection.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.symbiosis.reflection.model.CourseRegisteration;

@Repository
public interface CourseRegisterationRepository extends JpaRepository<CourseRegisteration, Integer> {
    
}
