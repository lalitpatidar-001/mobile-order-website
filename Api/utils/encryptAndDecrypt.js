const crypto = require('crypto-js');

const encryptString = async (text) => {
    try {
        const hashText = await crypto.AES.encrypt(JSON.stringify(text), process.env.CRYPTO_KEY).toString();
        return hashText;
    } catch (error) {
        console.error('Error during encryption:', error.message);
        return res.status(500).json({msg:"something went wrong in encryption"})
    }
}

const decryptString = async (text) => {
    try {
        const bytes = await crypto.AES.decrypt(text, process.env.CRYPTO_KEY);        
        const decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
        return decryptedData;
    } catch (error) {
        console.error('Error during decryption or JSON parsing:', error.message);
        return res.status(500).json({msg:"something went wrong in decryption"})
    }
}

module.exports = {
    encryptString,
    decryptString
};
