const { ethers } = require("ethers");

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider('https://mainnet.infura.io/v3/d99a662fed8d4fc9bd6903413d484984')

// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()


// You can also use an ENS name for the contract address
const daiAddress = "dai.tokens.ethers.eth";

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const daiAbi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",

    // Get the account balance
    "function balanceOf(address) view returns (uint)",

    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",

    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

// The Contract object
// const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

// // Read-Write; By connecting to a Signer, allows:
// // - Everything from Read-Only (except as Signer, not anonymous)
// // - Sending transactions for non-constant functions
// const erc20_rw = new ethers.Contract(sa, daiAbi, signer)