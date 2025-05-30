package com.symbiosis.reflection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.symbiosis.reflection.model.CourseRegisteration;
import com.symbiosis.reflection.service.CourseRegisterationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CourseRegisterationController {

    @Autowired
    CourseRegisterationService registerationService;

    @GetMapping("/registerations")
    public List<CourseRegisteration> getAllRegisterations() {
        return registerationService.getAllRegisterations();
    }

    @PostMapping("/registerations")
    public ResponseEntity<CourseRegisteration> registerCourse(@RequestBody CourseRegisteration registeration) {
        CourseRegisteration savedRegisteration = registerationService.saveRegisteration(registeration);
        return new ResponseEntity<>(savedRegisteration, HttpStatus.CREATED);
    }

    @GetMapping("/registerations/{id}")
    public ResponseEntity<CourseRegisteration> getRegisterationById(@PathVariable("id") int id) {
        CourseRegisteration registeration = registerationService.getRegisterationById(id);
        return new ResponseEntity<>(registeration, HttpStatus.OK);
    }

    @DeleteMapping("/registerations/{id}")
    public ResponseEntity<Void> deleteRegisteration(@PathVariable("id") int id) {
        registerationService.deleteRegisteration(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
