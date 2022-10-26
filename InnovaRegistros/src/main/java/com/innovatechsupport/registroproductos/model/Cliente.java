package com.innovatechsupport.registroproductos.model;

import com.sun.istack.NotNull;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data //GET AND SETTER
@NoArgsConstructor //CONSTRUCTOR DEFAULT
@RequiredArgsConstructor //CONTRUCTOR CON PARAMETROS
@Entity
public class Cliente implements Serializable {
    @Id
    private Integer id;
    @NotNull
    private String nombres;
    private String apellidos;
    private String email;
    private Integer telefono;
    private String direccion;
}
