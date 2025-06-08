
# Blockchain Voting System

A decentralized voting system built with Ethereum smart contracts and web3.js.

## Prerequisites

- Node.js and npm installed
- MetaMask browser extension
- Ganache running locally (or access to an Ethereum network)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start Ganache and ensure it's running on port 7545

3. Deploy the smart contract:
- Open `contracts/VotingSystem.sol` in Remix IDE
- Compile and deploy to Ganache
- Copy the deployed contract address

4. Set the contract address:
- Open your browser console
- Run: `localStorage.setItem('votingContractAddress', 'YOUR_CONTRACT_ADDRESS')`

5. Start the server:
```bash
npm start
```

6. Access the application:
- Open http://localhost:3000 in your browser
- Connect MetaMask to Ganache network (Network ID: 5777)

## Features

- Admin Dashboard:
  - Manage elections
  - Add/view candidates
  - Add/view voters
  - Monitor voting
  - Verify votes

- Voter Dashboard:
  - View active elections
  - Cast votes
  - View vote history
  - Verify vote status

## Security

- Only admin can create elections and add candidates
- Voters can only vote once per election
- Votes are recorded on the blockchain
- Vote verification through transaction hashes

## Troubleshooting

1. MetaMask Connection Issues:
   - Ensure Ganache is running
   - Check network ID matches (5777)
   - Verify account is unlocked

2. Contract Interaction Issues:
   - Verify contract address is correct
   - Check console for error messages
   - Ensure account has sufficient ETH

3. Voting Issues:
   - Verify voter is registered
   - Check if election is active
   - Ensure voter hasn't already voted

=======
# SecureVote
Its my mini project SecureVote - Blockchain Based Voting System
>>>>>>> 7c206f1e0bc2d4972c525013d28aa09f8978760a

# Output :

![Image](https://github.com/user-attachments/assets/43913179-3ce5-4573-b256-2b9c765ffa13)
![Image](https://github.com/user-attachments/assets/d43e185e-6c84-43c1-8fcf-6f9095374120)
![Image](https://github.com/user-attachments/assets/4b61b343-3668-4b33-927e-0c13fc9354ac)
![Image](https://github.com/user-attachments/assets/a27de14b-0f2b-48b9-966b-e15a42f304ba)
![Image](https://github.com/user-attachments/assets/b0da0a0b-2522-40c9-bc6f-ab7c2535efde)
![Image](https://github.com/user-attachments/assets/ff2addb2-b510-44f2-956e-737d415e70f4)
![Image](https://github.com/user-attachments/assets/c34ee89e-6eb9-44fc-b960-90d84ce39201)
![Image](https://github.com/user-attachments/assets/8679ff75-8f98-4da8-98b6-55a1b342de26)
![Image](https://github.com/user-attachments/assets/7fe884e2-9312-4e87-8f70-786c8ab573ec)
![Image](https://github.com/user-attachments/assets/4a7a3baa-58d9-4249-868b-2a57b6af7e15)
![Image](https://github.com/user-attachments/assets/e49e9ea6-a2da-4cdf-8822-e49bae96a7f3)
![Image](https://github.com/user-attachments/assets/b57bcadc-cc3d-440b-a029-3d76a31bfc05)
