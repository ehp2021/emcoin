import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";



describe("TestGas", function() {
  it("Test", async function(){
      // 1. setup
      // 2. deploy our contract
      // 3. call our functions t otest

      //2. grab our contract and deploy it using nomiclabs
      // give it hte name, it's not hte name of hte file
      const Gas = await ethers.getContractFactory("TestGas");
      const gas = await Gas.deploy(); // will put this in the network
      await gas.deployed(); //ensures taht your contact has been confirmed by the network enough times so its ocnsidered deployed

      for (let i =0; i<10; i++) {
        await gas.test1();
        await gas.test2();
        await gas.test3();
        await gas.test4();
        await gas.test5();
      }

  });
});