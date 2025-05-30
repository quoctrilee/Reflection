package com.symbiosis.reflection.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.symbiosis.reflection.model.UpdateService;

@Repository
public interface UpdateServiceRepository extends JpaRepository<UpdateService, Integer> {

    // Find all services by category
    List<UpdateService> findAllByCategory(String category);

    // Find service by name (ensures unique service names)
    UpdateService findByServiceName(String serviceName);
}
