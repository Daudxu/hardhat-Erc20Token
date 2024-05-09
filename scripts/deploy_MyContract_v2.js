const { ethers, upgrades } = require("hardhat");

// proxy address
const myContractProxyAddr = ""

async function main() {
    const MyContractV2 = await ethers.getContractFactory("DanTokenV2");
    
    const myContractV2 = await upgrades.upgradeProxy(myContractProxyAddr, MyContractV2);

    console.log("myContractV2 upgraded", myContractV2);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
