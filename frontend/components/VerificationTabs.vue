<template>
  <div class="tabs-container">
    <!-- Tabs Section -->
    <div class="tabs">
      <button
        class="border border-blue-100"
        v-for="(verification, index) in verifications"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="setActiveTab(index)"
      >
        {{ verification.name }}
      </button>
    </div>

    <!-- Content Section -->
    <div class="content">
      <h2>{{ verifications[activeTab].name }}</h2>
      <p class="description">{{ verifications[activeTab].description }}</p>
      <button class="verify-button" :class="[{'bg-green-700': verifications[activeTab].verified=='verified'}, {'bg-red-700': verifications[activeTab].verified=='failed'}, {'bg-[#007bff]': !verifications[activeTab].verified}]" @click="verify">
        <LodingVertical v-if="loading" color="#fff"/>
        <span v-else-if="verifications[activeTab].verified == 'verified'">Verified ✔</span>
        <span v-else-if="verifications[activeTab].verified == 'failed'">Failed ❌</span>
        <span v-else>Verify {{ verifications[activeTab].name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TransgateConnect from '@zkpass/transgate-js-sdk';

// Binance Data Points
const verifications = ref([
  {
    name: "Binance User Verification",
    description: "Verify your Binance user identity to access Binance-exclusive features and services.",
    schemaId: "da988dbde69549da96f69f74b02e39b9",
    verified: "",
  },
  {
    name: "Binance Transaction History",
    description: "Verify your transaction history to ensure compliance and maintain transparency.",
    schemaId: "591ae44761c849269373367cbef57bb3",
    verified: "",
  },
  {
    name: "Binance Loan Status",
    description: "Verify your loan status to determine eligibility for new financial services.",
    schemaId: "13fc1bac263d42ad9d3890a60809e86f",
    verified: "",
  },
  {
    name: "Binance VIP Status",
    description: "Verify your VIP level to enjoy tailored rewards and exclusive services.",
    schemaId: "79e57c411c234eaf92d7cbb07113e5ed",
    verified: "",
  },
  {
    name: "Binance Assets (at least 3 assets)",
    description: "Verify your asset holdings securely to access advanced financial tools.",
    schemaId: "7c7410f4c5044c979484333263309d10",
    verified: false,
  },
]);

const appid = "d7d45186-ca3c-449e-9a41-80c0d61ff22c"; //my app id

const activeTab = ref(0);
const loading = ref(false);
const errorText = ref("");

function setActiveTab(index: any) {
  activeTab.value = index;
}

async function verify() {
  const selectedVerification = verifications.value[activeTab.value];
  console.log(`Verifying ${selectedVerification.name} with Schema ID: ${selectedVerification.schemaId}`);
  // Call your verification function here

  loading.value = true

  const connector = new TransgateConnect(appid)
  try {
    const isAvailable = await connector.isTransgateAvailable()
    if (!isAvailable) {
      alert("Install zkPass TransGate extension to continue.");
      return;
    }

    // Verify Binance User
    loading.value = true;
    const userResponse = await connector.launch(selectedVerification.schemaId) as Object;
    console.log("User Response:", userResponse);
    const isVerified = verifyResult({...userResponse, schemaId: selectedVerification.schemaId});
    selectedVerification.verified = "verified";
  }
  catch (error) {
    console.error("User verification error:", error);
    errorText.value = "User verification failed.";
    selectedVerification.verified = "failed";
    return;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* Overall Container */
.tabs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Tabs Section */
.tabs {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ddd;
}

.tabs button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background: none;
  cursor: pointer;
  color: #555;
  border-radius: 6px 6px 0 0;
  transition: all 0.3s ease;
}

.tabs button:hover {
  color: #007bff;
}

.tabs button.active {
  background: #007bff;
  color: #fff;
  font-weight: bold;
  border-bottom: 2px solid #007bff;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.15);
}

/* Content Section */
.content {
  text-align: center;
}

.content h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* Verify Button */
.verify-button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.verify-button:hover {
  background: #0056b3;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

.verify-button:active {
  transform: scale(0.95);
}

/* Responsive Design */
@media (max-width: 768px) {
  .tabs {
    flex-wrap: wrap;
    justify-content: center;
  }

  .tabs button {
    margin-bottom: 0.5rem;
  }

  .content h2 {
    font-size: 1.25rem;
  }

  .verify-button {
    width: 100%;
  }
}
</style>
