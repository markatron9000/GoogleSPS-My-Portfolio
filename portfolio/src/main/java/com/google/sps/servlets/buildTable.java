package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;


//import com.google.sps.data.Task;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.cloud.datastore.StructuredQuery.PropertyFilter;

/** Servlet responsible for listing tasks. */
@WebServlet("/buildtable")
public class buildTable extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();


    Query<Entity> query =  Query.newEntityQueryBuilder().setKind("Bask")
            .setOrderBy(OrderBy.desc("Timestamp For Music"))
            .build();
            //Query<Entity> query = new Query<Entity>("Music Selection");
    QueryResults<Entity> results = datastore.run(query);
    
    ArrayList<String> songs =  new ArrayList<String>();
    while (results.hasNext()) {
      Entity entity = results.next();
      String song = entity.getString("Music Selection");
        
      songs.add(song);
    }

    response.setContentType("application/json;");
    String toReturn = convertToJsonUsingGson(songs);
    response.getWriter().println(toReturn);
  }
  private String convertToJsonUsingGson(ArrayList<String> x) {
    Gson gson = new Gson();
    String newt = gson.toJson(x);
    return newt;
  }
}