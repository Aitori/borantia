import React, { useState } from "react";

import styled from "styled-components";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../App";
import abi from "../Borantia.json";
import { useLocation } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  padding-bottom: 528px;
`;

const SS = styled.div`
  display: flex;
  max-width: 900px;
`;

const SSS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.div`
  display: flex;
  background: #18151e;
  border-radius: 15px;
  align-items: center;
  width: fit-content;
  padding: 16px 24px;
  margin: 0 0 32px 0;
  align-self: flex-start;
`;
const Logotxt = styled.div`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  color: #fafafa;
  width: fit-content;
`;

const BigText = styled.div`
  background: #18151e;
  border-radius: 15px;
  padding: 24px 32px;
  color: #fafafa;
`;

const Reward = styled.div`
  background: #18151e;
  border-radius: 15px;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  width: 100%;
  color: rgba(250, 250, 250, 0.5);
  padding: 8px 16px;
  align-items: center;
  margin-top: 20px;
`;

const Bora = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #fafafa;
  margin-top: 16px;
`;

const BoraButton = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  background: #f69af8;
  border-radius: 15px;
  color: #000000;
  margin-top: 24px;
  width: fit-content;
  padding: 8px 32px;
  outline: none;
  border: none;
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const VolunteerTexst = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;

  color: #fafafa;
  display: flex;
  align-items: center;
  margin-top: 24px;
  border-bottom: 1px solid #201d28;
  padding-bottom: 8px;
  margin-bottom: 24px;
`;

const Countt = styled.div`
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  color: #524e63;
  margin-left: 24px;
`;

const PPI = styled.img`
  border-radius: 50%;
  height: 32px;
  margin-right: 16px;
`;

const Volun = styled.div`
  background: #18151e;
  border-radius: 15px;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #fafafa;
  height: fit-content;
  padding: 8px;
`;

interface Props {
  account: string;
  volunteered?: boolean;
}

const BountyPage = ({ account, volunteered }: Props) => {
  const [addUser, setAddUser] = useState(false);
  const location = useLocation();
  const claim = async () => {
    try {
      const { ethereum } = window as any;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer);
        await contract.claimBorantia(
          3,
          "0xaA387bcAFc8d9030D71dc072F0dF264782b8988B",
          69
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addVolunteer = async (num: number, address: string) => {
    try {
      const { ethereum } = window as any;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer);
        const tt = await contract.addVolunteer(
          num,
          "0xaA387bcAFc8d9030D71dc072F0dF264782b8988B"
        );
        if (tt) {
          setAddUser(true);
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <SS>
        <SSS style={{ width: "65%", marginRight: "48px" }}>
          <Headline>
            <Logotxt>Ocean Beach Cleanup</Logotxt>
          </Headline>
          <BigText>
            <p>
              The vast majority of marine pollution comes from rivers so we are
              focused on the rivers that require immediate relief. Garbage
              accumulates on the beaches so if we stop the pollution from
              entering the oceans by cleaning up rivers, we can then stop the
              marine pollution from spreading.
              <br />
              <br /> Though we do river clean-ups globally, our efforts are
              heavily focused on India because the river pollution is especially
              concentrated there.
              <br />
              <br /> To complete this bounty, you must show up to the local
              river and pick up some trash. This is some test copy showing what
              the actual bounty text would look like, but don’t you want some
              nice volunteer hours in exchange for continuing the fight for
              ocean preservation?
            </p>
          </BigText>
        </SSS>
        <SSS style={{ width: "35%" }}>
          {volunteered || addUser || location.pathname === "/delivers" ? (
            <BoraButton onClick={() => claim()}>Claim</BoraButton>
          ) : (
            <BoraButton onClick={() => addVolunteer(1, account)}>
              Volunteer
            </BoraButton>
          )}
          <Reward>
            <div>you'll get </div>
            <Bora>4 $BORA</Bora>
          </Reward>
          <Volun style={{ marginTop: "8px" }}>
            <PPI src="https://s2.coinmarketcap.com/static/img/coins/200x200/9921.png" />{" "}
            Aquari
          </Volun>
          <VolunteerTexst>
            Volunteers<Countt>3/4 slots remaining</Countt>
          </VolunteerTexst>
          <Volun>
            <PPI src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4" />
            0xd1zZyd40....
          </Volun>
          {addUser && (
            <Volun>
              <PPI src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4" />
              {"0xaA387bcAFc8d9030D71dc072F0dF264782b8988B".substring(0, 9) +
                "..."}
            </Volun>
          )}
        </SSS>
      </SS>
    </Wrapper>
  );
};

export default BountyPage;
