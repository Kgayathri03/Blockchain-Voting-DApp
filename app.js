const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address
const contractABI = [ /* ABI from Voting.json */ ];

window.onload = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
        alert('MetaMask is required!');
    }
};

async function vote() {
    const candidate = document.getElementById('candidate').value;
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    await contract.methods.vote(candidate).send({ from: accounts[0] });
    alert('Vote casted!');
}

async function getVotes() {
    const candidate = document.getElementById('getCandidate').value;
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const votes = await contract.methods.getVotes(candidate).call();
    document.getElementById('votes').innerText = Votes: ${votes};
}