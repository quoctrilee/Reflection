package com.symbiosis.reflection.service;

import java.util.List;
import com.symbiosis.reflection.model.Feedback;

public interface FeedbackService {
    Feedback saveFeedback(Feedback feedback);
    List<Feedback> getAllFeedbacks();
    Feedback getFeedbackById(int id);
    void deleteFeedback(int id);

}
