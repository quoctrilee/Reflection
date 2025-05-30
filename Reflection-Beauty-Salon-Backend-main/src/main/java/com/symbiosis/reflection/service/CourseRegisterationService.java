package com.symbiosis.reflection.service;

import java.util.List;

import com.symbiosis.reflection.model.CourseRegisteration;

public interface CourseRegisterationService {
    CourseRegisteration saveRegisteration(CourseRegisteration registeration);
    List<CourseRegisteration> getAllRegisterations();
    CourseRegisteration getRegisterationById(int id);
    void deleteRegisteration(int id);
}
