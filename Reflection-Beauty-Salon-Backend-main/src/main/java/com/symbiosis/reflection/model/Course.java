package com.symbiosis.reflection.model;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class Course {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String coursename,duration,fees;

@ManyToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
@JoinTable(name="course_images",joinColumns= {
		@JoinColumn(name="course_id")
},
inverseJoinColumns= {
		@JoinColumn(name="image_id")
}
)
private Set<ImageModel> courseImages;



public Set<ImageModel> getCourseImages() {
	return courseImages;
}
public void setCourseImages(Set<ImageModel> courseImages) {
	this.courseImages = courseImages;
}
public Course() {
	super();
	// TODO Auto-generated constructor stub
}
public Course(String coursename, String duration, String fees) {
	super();
	this.coursename = coursename;
	this.duration = duration;
	this.fees = fees;
	
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getCoursename() {
	return coursename;
}
public void setCoursename(String coursename) {
	this.coursename = coursename;
}
public String getDuration() {
	return duration;
}
public void setDuration(String duration) {
	this.duration = duration;
}
public String getFees() {
	return fees;
}
public void setFees(String fees) {
	this.fees = fees;
}



}