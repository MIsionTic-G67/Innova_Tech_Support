package com.innovatechsupport.registroproductos.controller;

import com.innovatechsupport.registroproductos.model.Cliente;
import java.util.Arrays;
import org.springframework.ui.Model;

/**
 *
 * @author Usuario
 */
public class Controller {
        public String inicio(Model model){
        var cliente1 = new Cliente("Maria");
        model.addAttribute("cliente1", cliente1);
        var cliente2 = new Cliente("Paula");
        model.addAttribute("cliente2", cliente2);
        var personas = Arrays.asList(cliente1, cliente2);
        model.addAttribute("personas", personas);
        return "index";
    }
}
