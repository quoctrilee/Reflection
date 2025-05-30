package com.symbiosis.reflection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.symbiosis.reflection.exception.ResourceNotFoundException;
import com.symbiosis.reflection.model.Feedback;
import com.symbiosis.reflection.repository.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepo;

    @Override
    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }

    @Override
    public Feedback getFeedbackById(int id) {
        return feedbackRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Feedback not found with id " + id));
    }

    @Override
    public void deleteFeedback(int id) {
        feedbackRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Feedback not found with id " + id));
        feedbackRepo.deleteById(id);
    }

}
