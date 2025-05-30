package com.symbiosis.reflection.service;

import java.util.List;
import com.symbiosis.reflection.model.UpdateService;

public interface UpdateServiceService {
    
    UpdateService saveService(UpdateService service);
    
    List<UpdateService> getAllServices();
    
    UpdateService getServiceById(int id);
    
    void deleteService(int id);
    
    UpdateService updateService(int id, UpdateService service);
    
    List<UpdateService> getServicesByCategory(String category);
    
    UpdateService getServiceByName(String serviceName);

	long getCount();
}
