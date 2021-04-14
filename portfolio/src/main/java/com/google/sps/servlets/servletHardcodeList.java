package com.google.sps.servlets;

import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/quotesServlet")
public class servletHardcodeList extends HttpServlet {
  static ArrayList<String> quotes =  new ArrayList<String>();
  
  static{  //quotes.add("g");
  quotes.add("Thus it can be seen that mental health is based on a certain degree of tension, the tension between what one has already achieved and what one still ought to accomplish, or the gap between what one is and what one should become.... \nI consider it a dangerous misconception of mental hygiene to assume that what man needs in the first place is equilibrium or, as it is called in biology, \"homeostasis,\" i.e., a tensionless state. What man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal, a freely chosen task.");
  quotes.add("Victory belongs to the most persevering.");
  quotes.add("This world isn't easy -  \nIt's hard on your own -  \nWe're richer united,  \nand poorer alone.\nIt's fine to ignore it -  \nFor better or ill -  \nTo scorn it before it  \ncollapses your will.\nBut if you can *fight* it -  \nOr choose to be *strong* -   \nPerhaps you can right it, \nrepairing a wrong.\nIt's plainly apparent -  \nIt's simple to see -  \nTogether,  \nwe\'ll weather\nwhatever will be.");
  quotes.add("The Thunder God went for a ride\nUpon his favorite philly.\n\"I\'m Thor!\", he cried.\nThe horse replied,\"You forgot your thaddle, thilly!\"");
  quotes.add("How astounded a man must be, when he learns that he himself has been the one directing the narrative of his own story.");
  quotes.add("The past cannot be altered, but the future can be directed. ");
  quotes.add("Your mind is like this water, my friend: when it is agitated it is difficult to see, but if you allow it to calm down the answer will appear clear...");
  quotes.add("If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.\nBut, sad or merry, I must leave it now. Farewell");
  quotes.add("You may fool the whole world down the pathway of years \nAnd get pats on the back as you pass \nBut your final reward will be heartache and tears \nIf you’ve cheated the man in the glass.");
  quotes.add("Learning does not make one learned: there are those who have knowledge and those who have understanding. \nThe first requires memory and the second philosophy.");
  quotes.add("Frodo : I can\'t do this, Sam. \n\n Sam : I know. It\'s all wrong \nBy rights we shouldn\'t even be here.\nBut we are.\nIt\'s like in the great stories Mr. Frodo.\nThe ones that really mattered.\nFull of darkness and danger they were,\nand sometimes you didn\'t want to know the end.\nBecause how could the end be happy.\nHow could the world go back to the way it was when so much bad happened.\nBut in the end, it\'s only a passing thing, this shadow.\nEven darkness must pass.\nA new day will come.\nAnd when the sun shines it will shine out the clearer.\nThose were the stories that stayed with you.\nThat meant something.\nEven if you were too small to understand why.\nBut I think, Mr. Frodo, I do understand.\nI know now.\nFolk in those stories had lots of chances of turning back only they didn\'t.\nBecause they were holding on to something.\n\nFrodo : What are we holding on to, Sam?\n\nSam : That there\'s some good in this world, Mr. Frodo. And it\'s worth fighting for.");
  }
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");

    String toReturn = convertToJsonUsingGson(quotes);

    response.getWriter().println(toReturn);
  }



  private String convertToJsonUsingGson(ArrayList<String> x) {
    Gson gson = new Gson();
    String newt = gson.toJson(x);
    return newt;

  }
  
}
