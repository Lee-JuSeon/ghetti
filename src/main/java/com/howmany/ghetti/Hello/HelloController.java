package com.howmany.ghetti.Hello;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HelloController {

    @RequestMapping("/")
    @ResponseBody
    public String hello() {
        return "Hello";
    }

}


//@Controller
//public class HomeController {
//
//    @GetMapping
//    public String index() {
//        return "index";
//    }
//}