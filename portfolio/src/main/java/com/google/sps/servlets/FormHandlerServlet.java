package com.google.sps.servlets;

import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {
static ArrayList<String> messages =  new ArrayList<String>();
  
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String textValue = request.getParameter("text-input");

    // Print the value so you can see it in the server logs.
    System.out.println("You submitted: " + textValue);

    response.sendRedirect("https://mmatis-sps-spring21.appspot.com/");
    // Write the value to the response so the user can see it.
    //response.getWriter().println(messages);
    messages.add(textValue);
    }

/*
    @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
     response.setContentType("text/html;charset=UTF-8");
     System.out.println("<html><body onload=\"alert('Hello World')\"></body></html>");
    }
*/
}