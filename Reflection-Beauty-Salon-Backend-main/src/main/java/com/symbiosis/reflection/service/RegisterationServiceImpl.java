package com.symbiosis.reflection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.symbiosis.reflection.exception.ResourceNotFoundException;
import com.symbiosis.reflection.model.Registeration;
import com.symbiosis.reflection.repository.RegisterationRepository;

@Service
public class RegisterationServiceImpl implements RegisterationService{

	@Autowired
	@Qualifier("regRepo")
	private RegisterationRepository regRepo;
	
	
	
	@Override
	public Registeration save(Registeration r) {
		// TODO Auto-generated method stub
		return regRepo.save(r);
	}

	@Override
	public List<Registeration> getAll() {
		// TODO Auto-generated method stub
		return regRepo.findAll();
	}

	@Override
	public Registeration search(int id) {
		Registeration r=regRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("resource not found with id "+id));
		return r;
	}

	@Override
	public void delete(int id) {
		Registeration r=regRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("resource not found with id "+id));
		regRepo.deleteById(id);
	}

	@Override
	public Registeration update(int id, Registeration r) {
		Registeration rold=regRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("resource not found with id "+id));
		rold.setAddress(r.getAddress());
		rold.setDateofbirth(r.getDateofbirth());
		rold.setEmail(r.getEmail());
		rold.setPhone(r.getPhone());
		rold.setPassword(r.getPassword());
		rold.setName(r.getName());
		return regRepo.save(r);
	}

	@Override
	public List<Registeration> login(String email, String password) {
		// TODO Auto-generated method stub
		return regRepo.findAllByEmailAndPassword(email, password);
	}

	@Override
	public long getCount() {
		// TODO Auto-generated method stub
		return regRepo.count();
	}

}
