import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import styled from "styled-components";
import Navbar from "./components/Navbar";
import BountyPage from "./pages/BountyPage";
// import abi from "./Borantia.json";
import { ethers } from "ethers";
import { SiweMessage } from "siwe";
import ProfilePage from "./pages/ProfilePage";
import LeaderboardPage from "./pages/LeaderboardPage";

export const CONTRACT_ADDRESS = "0x0685818CB5f016f4f0aa231c0D04f60bcd6499aa";

const PageLayout = styled.div`
  height: 100%;
  width: 100%;
  background: #100e15;
`;

function App() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          const { ethereum } = window as any;
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  const connectWallet = async () => {
    try {
      const { ethereum } = window as any;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const message = createSiweMessage(
        await signer.getAddress(),
        "Sign in with Ethereum to the app."
      );
      console.log(await signer.signMessage(message));
      setAccount(accounts[0]);
      try {
        localStorage.setItem("isWalletConnected", "true");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function createSiweMessage(address: string, statement: string) {
    const message = new SiweMessage({
      address,
      statement,
      uri: origin,
    });
    return message.prepareMessage();
  }

  // const register = async () => {
  //   try {
  //     const { ethereum } = window as any;

  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const contract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer);
  //       const sampleMetadata = {
  //         title: "Sample Borantia",
  //         organization: "Sample Borantia Organization",
  //         description: "Sample Description",
  //         imageUrl: "Sample Image",
  //         eventDate: 2309840239,
  //       };
  //       await contract.registerBorantia(
  //         "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
  //         sampleMetadata
  //       );
  //     } else {
  //       console.log("Ethereum object doesn't exist!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Router>
      <PageLayout>
        <Navbar onClick={connectWallet} account={account} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/:bounty" element={<BountyPage account={account} />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
