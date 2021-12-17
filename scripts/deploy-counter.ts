import "@nomiclabs/hardhat-ethers";
import {ethers} from 'hardhat';

//deploy the script
async function deploy() {
  //grab our file from teh filesys that HH has already generated (json) named "Counter"
  const Counter = await ethers.getContractFactory("Counter"); // get the cont
  //next, create our actual contract on the network
  const counter = await Counter.deploy();
  await counter.deployed();

  return counter;
}

//this function takes in the counter as the contract
//executes our script
async function count(counter) {
  await counter.count();
  //getCounter() is from Counter.sol
    console.log("Counter", await counter.getCounter());
}

//we do the deploy, we wait for hte promise to be done, then we do the count
deploy().then(count);