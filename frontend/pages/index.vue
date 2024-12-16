<template>
    <div class="flex flex-col items-center text-center">
      <h1 class="text-4xl font-bold mt-10">zkPass Binance Verification</h1>
      <p class="mt-4 text-gray-600">Verify your Binance attestations privately using zkPass.</p>
      <ConnectWallet />
      <div class="mt-10">
        <NuxtLink to="/verify" class="btn-primary">Start Verification</NuxtLink>
      </div>
    </div>
</template>
  