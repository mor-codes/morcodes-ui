export function truncateAddress(address: string): string {
    // Ensure the input is a valid address
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      return 'Invalid Address';
    }
  
    // Take the first 6 characters after '0x' and the last 6 characters
    return address.substring(0, 8) + '...' + address.substring(address.length - 6);
}