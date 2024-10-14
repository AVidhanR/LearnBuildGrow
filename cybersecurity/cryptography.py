from cryptography.fernet import Fernet
import getpass
import os

def generate_key():
    """Generate a new Fernet key."""
    return Fernet.generate_key()

def save_key(key, filename):
    """Save the generated key to a file."""
    with open(filename, 'wb') as key_file:
        key_file.write(key)

def load_key(filename):
    """Load the key from a file."""
    with open(filename, 'rb') as key_file:
        return key_file.read()

def encrypt_file(key, filename):
    """Encrypt a file using the provided key."""
    fernet = Fernet(key)
    with open(filename, 'rb') as file:
        original = file.read()
    
    encrypted = fernet.encrypt(original)
    
    with open(filename + '.enc', 'wb') as encrypted_file:
        encrypted_file.write(encrypted)

def decrypt_file(key, filename):
    """Decrypt a file using the provided key."""
    fernet = Fernet(key)
    with open(filename, 'rb') as encrypted_file:
        encrypted = encrypted_file.read()
    
    decrypted = fernet.decrypt(encrypted)
    
    with open(filename[:-4], 'wb') as decrypted_file:  # Remove .enc extension
        decrypted_file.write(decrypted)

def authenticate_user():
    """Authenticate user by password."""
    correct_password = "securepassword"  # In practice, store this securely
    password = getpass.getpass("Enter your password: ")
    
    if password == correct_password:
        print("Authentication successful.")
        return True
    else:
        print("Authentication failed.")
        return False

def log_action(action):
    """Log user actions to a log file."""
    with open('action_log.txt', 'a') as log_file:
        log_file.write(action + '\n')

def main():
    if not authenticate_user():
        return
    
    action = input("Do you want to (E)ncrypt or (D)ecrypt a file? ").strip().lower()
    
    if action == 'e':
        key = generate_key()
        save_key(key, 'secret.key')
        
        filename = input("Enter the filename to encrypt: ")
        encrypt_file(key, filename)
        log_action(f"Encrypted {filename}")
        
        print(f"{filename} has been encrypted.")
        
    elif action == 'd':
        key = load_key('secret.key')
        
        filename = input("Enter the filename to decrypt (with .enc): ")
        decrypt_file(key, filename)
        log_action(f"Decrypted {filename}")
        
        print(f"{filename} has been decrypted.")
    else:
        print("Invalid choice. Exiting.")
        
if __name__ == "__main__":
    main()