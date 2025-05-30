package com.symbiosis.reflection.service;

import java.util.List;

import com.symbiosis.reflection.model.Registeration;

public interface RegisterationService {
Registeration save(Registeration r);
List<Registeration> getAll();
Registeration search(int id);
void delete(int id);
Registeration update(int id, Registeration r);
List<Registeration> login(String email, String password);
long getCount();
}
