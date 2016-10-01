package logServer.testbed;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;
import java.util.logging.Logger;

/**
 * Test bed for LogServer this java file generates a single line for every 2sec
 * Created by phani on 25/9/16.
 */
public class RandomLineGen {

    private static Logger logger = Logger.getLogger(RandomLineGen.class.getName());
    public static final String filePath = "/home/random.logs";
    public static final String SPACE_STR = " ";

    static
    {
        File file = new File(filePath);
        File dir = file.getParentFile();
        if(!dir.exists())
        {
            dir.mkdirs();
        }
        try {
            if(!file.exists())
                file.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        if(file.exists())
        {
            try {
                PrintWriter writer = new PrintWriter(filePath);
                writer.close();
            }catch (Exception e)
            {

            }
        }
    }

    public static void main(String [] args) throws Exception
    {
        int lowerLimit = 'a';
        int upperLimit = 'z';
        Random random = new Random();
        FileWriter fileWriter = null;
        try {
            fileWriter = new FileWriter(filePath);
            StringBuilder stringBuilder = new StringBuilder();
            int counter = 0;
            while (counter < 20000) {
                for (int j = 0; j < 20; j++) {
                    for (int i = 0; i < 5; i++) {
                        int rand = random.nextInt((upperLimit - lowerLimit) + 1) + lowerLimit;
                        stringBuilder.append((char) rand);
                    }
                    stringBuilder.append(SPACE_STR);
                }
                stringBuilder.append("\n");
                fileWriter.write(stringBuilder.toString());
                logger.severe("Wrote line : " + stringBuilder.toString());
                stringBuilder = new StringBuilder();
                fileWriter.flush();
                Thread.sleep(2000);
                counter++;
            }
        }finally {
            if(fileWriter!=null)
            {
                fileWriter.close();
            }
        }


    }

}