pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint counter;

    event CounterInc(uint counter);

    //something that does the mutation, writes states
    function count() public {
        counter++;
        console.log("Counter is now", counter);
        emit CounterInc(counter);
    }

    //reads state
    function getCounter() public view returns (uint32) {
        return uint32(counter);
    }
}
