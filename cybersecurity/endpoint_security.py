# pip install pyusb
import pyusb

def control_usb_devices():
    # Set up USB device control
    usb_devices = pyusb.core.find(find_all=True)

    # Iterate through USB devices
    for device in usb_devices:
        # Check if device is a USB storage device
        if device.bDeviceClass == 8:
            print("USB storage device detected!")

if __name__ == "__main__":
    control_usb_devices()

# check only after inserting the USB device