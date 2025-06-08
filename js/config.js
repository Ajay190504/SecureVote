// Contract address configuration
const contractAddress = '0xAd44BF7d36AF4CbC65d04CEaf95F644703848Fc7';

// Network configurations
const networks = {
    ganache: {
        name: 'Ganache',
        rpcUrl: 'http://127.0.0.1:7545',
        chainId: '5777',
        currencySymbol: 'ETH',
        contractAddress: '0xAd44BF7d36AF4CbC65d04CEaf95F644703848Fc7'
    },
    5777: {
        name: 'Ganache',
        contractAddress: '0xAd44BF7d36AF4CbC65d04CEaf95F644703848Fc7'
    }
};

// Contract configuration
const config = {
    contractAddress: "0xAd44BF7d36AF4CbC65d04CEaf95F644703848Fc7",
    networks: networks
};

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const functions = firebase.functions();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.config = config;
}
