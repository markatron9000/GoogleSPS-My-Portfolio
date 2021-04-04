package com.google.sps.servlets;

import com.google.cloud.datastore.*;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet responsible for listing tasks. */
@WebServlet("/buildtable")
public class buildtable extends HttpServlet {
    private String convertToJsonUsingGson(ArrayList<String> x) {
        Gson gson = new Gson();
        String newt = gson.toJson(x);
        return newt;
    }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    Query<Entity> query =  Query.newEntityQueryBuilder().setKind("Bask")
            .setOrderBy(OrderBy.desc("TimestampForMusic"))
            .build();
            //Query<Entity> query = new Query<Entity>("Music Selection");
    QueryResults<Entity> results = datastore.run(query);
    if (!results.hasNext()) {
        Gson cson = new Gson();
        response.getWriter().println(cson.toJson("bruh"));
    } 
    else{
        ArrayList<String> songs =  new ArrayList<>();
        while (results.hasNext()) {
            Entity entity = results.next();
            String song = entity.getString("MusicSelection");
                
            songs.add(song);
        }
        Gson bson = new Gson();
        response.setContentType("application/json;");
        //String toReturn = convertToJsonUsingGson(songs);
        response.getWriter().println(bson.toJson(songs));
    }
  }
  
}