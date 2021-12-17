import {ethers} from "ethers";
import Counter from '../artifacts/contracts/Counter.sol/Counter.json'

function getEth() {
  //@ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("get metamask and a positive attitude");

  }
  return eth;
}

// to connect to metamask
async function hasAccounts() {
  const eth = getEth();
  // this is how we talk to metamask to request info, it will give you an arr of strings
  const accounts = await eth.request({method: "eth_accounts"}) as string[];
  //as long as we have accounts.length, we have accts
  return accounts && accounts.length;
}

async function requestAccounts() {
  const eth = getEth();
  const accounts = await eth.request({method: "eth_requestAccounts"}) as string[];

  return accounts && accounts.length;
}

// this is where we do teh main coding
async function run() {
  //this is us requesting from metamask the accounts
  if (!await hasAccounts() && !await requestAccounts()) {
    throw new Error("Please let me take your money")
  }
  // at this point we should have access to your metamask
  //now we ned to call the contract from the browser
  //Contract needs 3 things
  const counter = new ethers.Contract(
    process.env.CONTRACT_ADDRESS, // where on the network is the contract? "to:"" from our deployed contract, where it was
    Counter.abi, //what to do, interface to the contract
    new ethers.providers.Web3Provider(getEth()).getSigner() // how to contact the network, metamask is a provider
  )
  const el = document.createElement("div");
  async function setCounter() {
    el.innerHTML = await counter.getCounter();
  }
  setCounter();

  const button = document.createElement("button");
  button.innerText="increment";
  button.onclick = async function() {
    const tx= await counter.count();
    await tx.wait();
    setCounter();
  }

    counter.on(counter.filters.CounterInc(), function(count) {
      setCounter(count);
  });

  document.body.appendChild(el);
  document.body.appendChild(button);
}

run();