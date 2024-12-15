// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract TradeRep {
    struct Attestation {
        address user;
        string dataHash; // Hash of the zkPass-provided attestation data
        uint256 timestamp;
    }

    mapping(address => Attestation[]) private attestations;

    event AttestationAdded(address indexed user, string dataHash, uint256 timestamp);

    // Add an attestation for the user
    function addAttestation(string memory dataHash) external {
        Attestation memory newAttestation = Attestation({
            user: msg.sender,
            dataHash: dataHash,
            timestamp: block.timestamp
        });
        attestations[msg.sender].push(newAttestation);

        emit AttestationAdded(msg.sender, dataHash, block.timestamp);
    }

    // Retrieve all attestations for a user
    function getUserAttestations(address user) external view returns (Attestation[] memory) {
        return attestations[user];
    }
}