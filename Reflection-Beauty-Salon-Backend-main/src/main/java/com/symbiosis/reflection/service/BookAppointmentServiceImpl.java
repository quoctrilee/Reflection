package com.symbiosis.reflection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.symbiosis.reflection.exception.ResourceNotFoundException;
import com.symbiosis.reflection.model.BookAppointment;
import com.symbiosis.reflection.repository.BookAppointmentRepository;

@Service
public class BookAppointmentServiceImpl implements BookAppointmentService {

    @Autowired
    private BookAppointmentRepository appointmentRepo;

    @Override
    public BookAppointment saveAppointment(BookAppointment appointment) {
        return appointmentRepo.save(appointment);
    }

    @Override
    public List<BookAppointment> getAllAppointments() {
        return appointmentRepo.findAll();
    }

    @Override
    public BookAppointment getAppointmentById(int id) {
        return appointmentRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment not found with id " + id));
    }

    @Override
    public void deleteAppointment(int id) {
        appointmentRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment not found with id " + id));
        appointmentRepo.deleteById(id);
    }

    @Override
    public long getAppointmentCount() {
        return appointmentRepo.count();
    }
    
}
