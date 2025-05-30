package com.symbiosis.reflection.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.symbiosis.reflection.model.BookAppointment;

@Repository
public interface BookAppointmentRepository extends JpaRepository<BookAppointment, Integer> {
    
}
