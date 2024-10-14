# pip install pyshark
import pyshark

def detect_threats():
    # Set up network interface
    interface = "Wi-Fi"

    # Start sniffing network traffic
    capture = pyshark.LiveCapture(interface=interface)

    # Analyze network traffic
    for packet in capture.sniff_continuously():
        # Check for malware
        if packet.haslayer(scapy.TCP) and packet.getlayer(scapy.TCP).flags == 0x12:
            print("Malware detected!")

if __name__ == "__main__":
    detect_threats()

# make sure to install wireshark 
# https://www.wireshark.org/download.html