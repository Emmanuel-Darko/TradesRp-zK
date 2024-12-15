import TradeRepArtifact from "../artifacts/contracts/TradesRep.sol/TradeRep.json";
import Web3 from "web3";

async function main() {
  const web3 = new Web3(process.env.NETWORK_URL!);

  const account = web3.eth.accounts.privateKeyToAccount(process.env.DEPLOYER_PRIVATE_KEY!);
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  console.log("Deploying from account:", account.address);

  // Deploy contract
  const TradeRep = new web3.eth.Contract(TradeRepArtifact.abi);
  const deployTx = TradeRep.deploy({ data: TradeRepArtifact.bytecode });

  const deployed = await deployTx.send({
    from: account.address,
    gas: 5000000,
  });

  console.log("TradeRep deployed at:", deployed.options.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
