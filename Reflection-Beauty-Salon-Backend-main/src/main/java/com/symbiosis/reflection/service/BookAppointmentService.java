package com.symbiosis.reflection.service;

import java.util.List;

import com.symbiosis.reflection.model.BookAppointment;

public interface BookAppointmentService {
    BookAppointment saveAppointment(BookAppointment appointment);
    List<BookAppointment> getAllAppointments();
    BookAppointment getAppointmentById(int id);
    void deleteAppointment(int id);
	long getAppointmentCount();
   
}
