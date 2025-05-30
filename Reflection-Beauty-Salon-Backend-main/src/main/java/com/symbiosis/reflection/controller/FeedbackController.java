package com.symbiosis.reflection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.symbiosis.reflection.model.Feedback;
import com.symbiosis.reflection.service.FeedbackService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // Get all feedback entries
    @GetMapping("/feedbacks")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedbacks();
    }

    // Get feedback by ID
    @GetMapping("/feedback/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable("id") int id) {
        Feedback feedback = feedbackService.getFeedbackById(id);
        return new ResponseEntity<>(feedback, HttpStatus.OK);
    }

    // Add new feedback
    @PostMapping("/feedback")
    public ResponseEntity<Feedback> submitFeedback(@RequestBody Feedback feedback) {
        Feedback savedFeedback = feedbackService.saveFeedback(feedback);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    // Delete feedback
    @DeleteMapping("/feedback/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable("id") int id) {
        feedbackService.deleteFeedback(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
