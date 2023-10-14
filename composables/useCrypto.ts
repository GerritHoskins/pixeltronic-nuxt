import CryptoJS from 'crypto-js';

export const useCrypto = () => {
  const config = useRuntimeConfig();
  const secretKey = config.encryptionKey || '';
  function encrypt(data: unknown) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  }

  function decrypt(ciphertext: string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  return {
    encrypt,
    decrypt,
  };
};
