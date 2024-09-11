Project Description: Simple Blockchain Voting DApp
Overview
The Simple Blockchain Voting DApp is a decentralized application (DApp) built on the Ethereum blockchain. It allows users to cast votes for candidates and view the results. The project demonstrates the use of Solidity for smart contract development and basic web technologies for frontend interaction. This project is ideal for showcasing fundamental blockchain concepts and decentralized applications.

Features
Smart Contract: Manages voting for candidates, ensuring that each user can only vote once and tracks votes for each candidate.
Frontend Interface: Provides a simple web interface where users can vote for candidates and view the number of votes each candidate has received.
Components
Smart Contract:

Language: Solidity
Functionality:
Vote: Allows users to vote for a specified candidate.
Get Votes: Retrieves the number of votes a candidate has received.
Get Candidates: Lists all candidates available for voting.
Deployment: The smart contract is deployed to a local Ethereum network using Hardhat.
Frontend:

Technologies: HTML, JavaScript, Web3.js
Functionality:
Vote for Candidate: Users can enter a candidate's name and cast their vote.
View Votes: Users can enter a candidate's name to see the number of votes that candidate has received.
Technical Details
Smart Contract Code:

File: Voting.sol
Key Features:
Voting Mechanism: Ensures that users can only vote once.
Candidate Management: Initializes with a list of candidates and tracks votes.
Deployment Script:

File: deploy.js
Purpose: Deploys the smart contract to a local blockchain network and initializes it with a list of candidates.
Frontend Code:

Files: index.html and app.js
Functionality:
Interaction: Uses Web3.js to interact with the Ethereum blockchain and the deployed smart contract.
User Interface: Provides a simple interface for voting and viewing votes.
