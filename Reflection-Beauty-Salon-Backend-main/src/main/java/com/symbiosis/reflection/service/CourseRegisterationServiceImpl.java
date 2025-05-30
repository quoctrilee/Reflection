package com.symbiosis.reflection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.symbiosis.reflection.exception.ResourceNotFoundException;
import com.symbiosis.reflection.model.CourseRegisteration;
import com.symbiosis.reflection.repository.CourseRegisterationRepository;

@Service
public class CourseRegisterationServiceImpl implements CourseRegisterationService {

    @Autowired
    private CourseRegisterationRepository registerationRepo;

    @Override
    public CourseRegisteration saveRegisteration(CourseRegisteration registeration) {
        return registerationRepo.save(registeration);
    }

    @Override
    public List<CourseRegisteration> getAllRegisterations() {
        return registerationRepo.findAll();
    }

    @Override
    public CourseRegisteration getRegisterationById(int id) {
        return registerationRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Registeration not found with id " + id));
    }

    @Override
    public void deleteRegisteration(int id) {
        registerationRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Registeration not found with id " + id));
        registerationRepo.deleteById(id);
    }

}
