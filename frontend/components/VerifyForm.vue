<template>
    <form @submit.prevent="handleVerification" class="mt-4 space-y-4">
      <label for="schema" class="block text-sm font-medium">Select Binance Schema</label>
      <select id="schema" v-model="selectedSchema" class="form-select">
        <option v-for="schema in schemas" :key="schema.id" :value="schema.value">
          {{ schema.label }}
        </option>
      </select>
  
      <label for="proof" class="block text-sm font-medium">Upload zkPass Proof</label>
      <input id="proof" type="file" @change="handleFileUpload" class="form-input" />
  
      <button type="submit" class="btn-primary">Verify</button>
    </form>
  
    <div v-if="verificationResult" class="mt-4">
      <p v-if="verificationResult.success" class="text-green-500">✅ Verification Successful!</p>
      <p v-else class="text-red-500">❌ Verification Failed!</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const schemas = [
    { id: 1, label: 'Binance User Verification', value: 'user_verification' },
    { id: 2, label: 'Binance Transaction History', value: 'transaction_history' },
    { id: 3, label: 'Binance Loan Status', value: 'loan_status' },
    { id: 4, label: 'Binance VIP Status', value: 'vip_status' },
    { id: 5, label: 'Binance Assets', value: 'assets' },
  ]
  
  const selectedSchema = ref('')
  const verificationResult = ref(null)
  const proofFile = ref(null)
  
  const handleFileUpload = (event) => {
    proofFile.value = event.target.files[0]
  }
  
  const handleVerification = async () => {
    if (!selectedSchema.value || !proofFile.value) {
      alert('Please select a schema and upload a proof file.')
      return
    }
  
    try {
      // Simulate verification API call (replace with zkPass API)
      const formData = new FormData()
      formData.append('schema', selectedSchema.value)
      formData.append('proof', proofFile.value)
  
      const response = await fetch('/api/verify', { method: 'POST', body: formData })
      const data = await response.json()
      verificationResult.value = data
    } catch (error) {
      console.error('Verification failed:', error)
    }
  }
  </script>
  