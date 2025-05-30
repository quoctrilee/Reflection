package com.symbiosis.reflection.service;

import com.symbiosis.reflection.model.Admin;

public interface AdminService {
Admin save(Admin a);
Admin login(String em, String ps);
}
