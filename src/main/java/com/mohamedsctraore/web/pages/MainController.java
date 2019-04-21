package com.mohamedsctraore.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by mohamed on 4/21/19.
 */
@Controller
public class MainController {

    @GetMapping(value = {"/", "/login"})
    public String entry() {
        return "index";
    }
}
