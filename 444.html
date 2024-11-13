import serial
import tkinter as tk
from tkinter import messagebox

# Initialize Serial Connection
ser = serial.Serial('COM3', 9600, timeout=1)  # Replace 'COM3' with your port

# GUI Setup
root = tk.Tk()
root.title("AUV Fin Test")

# Callback Functions
def start_fin_test():
    ser.write(b'rotate\n')  # Send rotate command to Pico
    feedback_label.config(text="Fin Test started...")

def check_angle():
    if ser.in_waiting > 0:
        angle = ser.readline().decode('utf-8').strip()
        if angle.isdigit():
            angle_label.config(text=f"Angle: {angle}°")
    root.after(100, check_angle)  # Repeat every 100 ms

# Widgets
fin_test_button = tk.Button(root, text="Fin Test", command=start_fin_test)
angle_label = tk.Label(root, text="Angle: 0°")
feedback_label = tk.Label(root, text="")

# Layout
fin_test_button.pack(pady=10)
angle_label.pack(pady=5)
feedback_label.pack(pady=5)

# Start angle checking loop
check_angle()

# Run the GUI
root.mainloop()
