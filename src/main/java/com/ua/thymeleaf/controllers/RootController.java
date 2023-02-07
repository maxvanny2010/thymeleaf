package com.ua.thymeleaf.controllers;

/**
 * RootController.
 *
 * @author legion
 * @version 5.0
 * @since 07/02/2023
 */

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.*;

@Controller
@RequestMapping("/")
public class RootController {
    @GetMapping
    public String index(Model model) {
        model.addAttribute("pageTitle", "Thymeleaf");
        model.addAttribute("scientists",
                List.of("Albert Einstein", "Niels Bohr", "James Clerk Maxwell"));
        return "index";
    }
}
