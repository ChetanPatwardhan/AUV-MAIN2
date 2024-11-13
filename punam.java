import java.io.*;
import java.net.*;

public class AUVClient {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("auv_ip_address", 12345); // Replace with actual AUV IP and port
            
            // Send data to AUV
            OutputStream output = socket.getOutputStream();
            PrintWriter writer = new PrintWriter(output, true);
            writer.println("waypoint_data");

            // Receive response from AUV
            InputStream input = socket.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(input));
            String response = reader.readLine();
            System.out.println("AUV response: " + response);

            // Close socket
            socket.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
