package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;


import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.*; 
import java.time.format.DateTimeFormatter;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {
//static ArrayList<String> messages =  new ArrayList<String>();
  
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

    // Get the value entered in the form.
    String textValue = request.getParameter("text-input");

    // Print the value so you can see it in the server logs.
    System.out.println("they submitted: " + textValue);

    response.sendRedirect("https://mmatis-sps-spring21.appspot.com/");
    // Write the value to the response so the user can see it.
    //response.getWriter().println(messages);

    ZonedDateTime timeSubmittedWrong = ZonedDateTime.now();
    DateTimeFormatter toString = DateTimeFormatter.ofPattern("MM/dd/yyyy - HH:mm:ss z");
    String timeSubmitted = timeSubmittedWrong.format(toString);
    
    //long timeSubmitted = System.currentTimeMillis();
    
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Task");
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("User Input", textValue)
            .set("Timestamp", timeSubmitted)
            .build();
    datastore.put(taskEntity);
    //messages.add(textValue);
    }

/*
    @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
     response.setContentType("text/html;charset=UTF-8");
     System.out.println("<html><body onload=\"alert('Hello World')\"></body></html>");
    }
*/
}