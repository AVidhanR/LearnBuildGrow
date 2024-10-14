# pip install scapy
import scapy.all as scapy
from scapy.all import sniff

def monitor_network():
    # Change it with your own network interface
    interface = "Wi-Fi"

    # Start sniffing network traffic
    sniff(iface=interface, prn=lambda x: x.show())

if __name__ == "__main__":
    monitor_network()
    # the output will be the network traffic - it will show the packets
    # never stops until you stop it manually with Ctrl+C

# install Ncap from here
# https://npcap.com/#download