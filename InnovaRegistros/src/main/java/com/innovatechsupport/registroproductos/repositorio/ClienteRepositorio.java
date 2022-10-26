package com.innovatechsupport.registroproductos.repositorio;

import com.innovatechsupport.registroproductos.model.Cliente;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
@RepositoryRestResource(path = "tareas", collectionResourceRel = "tareas")

public interface ClienteRepositorio extends JpaRepository<Cliente, Integer>{

    /**
     *
     * @param n
     * @return
     */
    List<Cliente> findByNombres(String n);
}
