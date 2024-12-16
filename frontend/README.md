# Binance User and Trade Verification - ZKPass

This project is built with Nuxt 3 and integrates zkPass for verifying Binance user information and trades securely.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher)
- Git (optional, but recommended)

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/Emmanuel-Darko/TradesRp-zK/tree/main/frontend/schemas

2.  **Install dependencies**
    ```bash
    npm install @zkpass/transgate-js-sdk
    yarn add @zkpass/transgate-js-sdk

3. **Run project**
    ```bash
    npm run dev
    
    yarn dev

3. **Working Demo**
    https://kode-tradesrep2.on-fleek.app/


5. **Project Breakdown**

    zkPass Schema for Binance User Verification
    zkPass is a privacy-preserving solution that enables secure sharing and verification of data without exposing sensitive information. Below are the Binance-related schemas you can use with zkPass to build decentralized applications:

    **Website:** "https://www.binance.com/my/dashboard"

    
    **A) Binance User Verification (bapi/accounts/v1/private/account/user/base-detail)**

    Verifies that the user has a Binance account. This can be used to confirm the user's identity while keeping personal data private.

    **B) Binance Transaction History (bapi/apex/v1/private/apex/marketing/user/sideBarStatus)**

    Allows verification of a user’s transaction history on Binance. Useful for applications requiring proof of trading activity without revealing exact details.

    **C) Binance Loan Status (bapi/apex/v1/private/apex/marketing/user/sideBarStatus)**
    
    Checks if a user has active or past loans on Binance. Helps evaluate financial behavior while preserving confidentiality. Binance VIP Status

    **D) Confirms the user’s Binance VIP level. (bapi/accounts/v1/private/vip/vip-portal/baseStatus)**
    
    Ideal for granting benefits or access based on the user’s VIP tier. Binance Assets

    **E) Verifies the user’s asset holdings on Binance. (bapi/asset/v2/private/asset-service/wallet/asset)**
    
    Ensures proof of asset ownership without exposing exact balances.

    **GitHub Repository for Schemas:** 
    🔗 https://github.com/Emmanuel-Darko/TradesRp-zK/tree/main/frontend/schemas

