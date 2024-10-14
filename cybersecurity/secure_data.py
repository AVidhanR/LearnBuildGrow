# pip install pycryptodome
import pycryptodome

def encrypt_data(data):
    # Set up encryption key
    key = pycryptodome.Random.get_random_bytes(32)

    # Encrypt data
    encrypted_data = pycryptodome.Cipher.AES.new(key, pycryptodome.Cipher.AES.MODE_EAX).encrypt(data.encode())

    return encrypted_data

def decrypt_data(encrypted_data):
    # Set up encryption key
    key = pycryptodome.Random.get_random_bytes(32)

    # Decrypt data
    decrypted_data = pycryptodome.Cipher.AES.new(key, pycryptodome.Cipher.AES.MODE_EAX).decrypt(encrypted_data)

    return decrypted_data.decode()

if __name__ == "__main__":
    data = "Hello, World!"
    encrypted_data = encrypt_data(data)
    print("Encrypted data:", encrypted_data)

    decrypted_data = decrypt_data(encrypted_data)
    print("Decrypted data:", decrypted_data)