<template>
    <div class="flex flex-col items-center text-center">
      <h1 class="text-4xl font-bold mt-10">zkPass Binance Verification</h1>
      <p class="mt-4 text-gray-600">Verify your Binance attestations privately using zkPass.</p>
      <ConnectWallet />
      <div class="mt-10">
        <NuxtLink 
            to="/verify" 
            class="btn-primary px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transform transition-transform hover:scale-105 active:scale-95"
        >
            Start Verification
        </NuxtLink>
      </div>
    </div>
</template>
  