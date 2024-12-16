<template>
    <button @click="connectWallet" class="btn-primary">
      {{ connected ? 'Wallet Connected' : 'Connect Wallet' }}
    </button>
  </template>
  
  <script setup>
  import Web3 from 'web3'
  import { ref } from 'vue'
  
  const connected = ref(false)
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        connected.value = true
      } catch (error) {
        console.error('Wallet connection failed', error)
      }
    } else {
      alert('Please install MetaMask!')
    }
  }
  </script>
  
  <style scoped>
  .btn-primary {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  }
  </style>
  