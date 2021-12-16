import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";



describe("Hello World", function() {
  it("should say hi", async function(){
      // 1. setup
      // 2. deploy our contract
      // 3. call our functions t otest

      //2. grab our contract and deploy it using nomiclabs
      // give it hte name, it's not hte name of hte file
      const HelloWorld = await ethers.getContractFactory("HelloWorld");
      const hello = await HelloWorld.deploy(); // will put this in the network
      await hello.deployed(); //ensures taht your contact has been confirmed by the network enough times so its ocnsidered deployed

      expect(await hello.hello()).to.equal("Hello World");

  });
});