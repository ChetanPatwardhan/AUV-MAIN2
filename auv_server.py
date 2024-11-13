import socket

# AUV TCP server setup
def start_auv_server():
    # Replace '0.0.0.0' with your AUV's IP address if needed
    server_ip = '0.0.0.0'
    server_port = 12345

    # Create a TCP socket
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((server_ip, server_port))
    server_socket.listen(1)
    print(f"Server is listening on {server_ip}:{server_port}")

    # Wait for client (PC) connection
    client_socket, client_address = server_socket.accept()
    print(f"Client connected from {client_address}")

    while True:
        # Receive data from the client
        data = client_socket.recv(1024).decode()
        if not data:
            break
        print(f"Received waypoint: {data}")

        # Send a response back to the client
        client_socket.send(f"Waypoint {data} received".encode())

    client_socket.close()
    server_socket.close()

if __name__ == "__main__":
    start_auv_server()
