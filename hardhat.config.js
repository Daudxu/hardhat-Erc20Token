// require("@nomicfoundation/hardhat-toolbox")
// require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    arbitrumSepolia: {
      url: `https://sepolia-rollup.arbitrum.io/rpc`,
      accounts: [process.env.PRI_KEY],
    },
    test: {
      url: `http://127.0.0.1:8545`,
      accounts: [process.env.TEST_PRI_KEY],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      arbitrumGoerli: process.env.ARBISCAN_API_KEY,
      arbitrumSepolia: process.env.ARBISCAN_API_KEY,
    },
    customChains: [
      {
        network: "arbitrumSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
};
