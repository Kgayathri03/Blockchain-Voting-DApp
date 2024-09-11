// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    mapping(address => bool) public voters;
    mapping(string => uint) public votesReceived;
    string[] public candidateList;

    constructor(string[] memory candidateNames) {
        candidateList = candidateNames;
    }

    function vote(string memory candidate) public {
        require(!voters[msg.sender], "You have already voted.");
        require(votesReceived[candidate] >= 0, "Invalid candidate.");
        voters[msg.sender] = true;
        votesReceived[candidate]++;
    }

    function getVotes(string memory candidate) public view returns (uint) {
        return votesReceived[candidate];
    }

    function getCandidates() public view returns (string[] memory) {
        return candidateList;
    }
}