import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  //doing the same thing as in the test, get the contract factory, gets all the info to deploy
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  // makes a json request, rpc it over to a netwk, network starts the contract, we wait for it to be deployed
  const hello = await HelloWorld.deploy();
  const hello.deployed(); //considered deployed

  return hello;
}

//@ts-ignore
async function sayHello(hello) {
  console.log("Say Hello:", await hello.hello()); //then we run a fxn on it 
}

deploy().then(sayHello);