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
  padding-bottom: 128px;
`;

const SS = styled.div`
  display: flex;
  max-width: 900px;
`;

const SSS = styled.div`
  display: flex;
  flex-direction: column;
`;

const Headline = styled.div`
  display: flex;
  background: #18151e;
  border-radius: 15px;
  align-items: center;
  width: 80%;
  padding: 16px 24px;
  margin: 0 0 32px 0;
`;
const Logo = styled.img`
  width: 20%;
  margin: 0 32px 0 0;
`;
const Logotxt = styled.div`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  color: #fafafa;
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

  color: rgba(250, 250, 250, 0.5);
  padding: 16px 16px;
  align-items: center;
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
            <Logo src="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png" />
            <Logotxt>Second Harvest</Logotxt>
          </Headline>
          <BigText>
            <h2>Headline</h2>
            <p>
              Help us sort and box the fresh produce and healthy groceries we
              provide to neighbors in our community.
              <br /> <br /> Shifts are available at our Cypress Center and
              Brennan warehouses in San Jose. <br /> <br /> The primary
              responsibility of a Food Sort Volunteer is to prepare food for
              distribution by verifying, sorting, labeling, and repacking food
              items at our distribution center Cypress Center in North San Jose.
              <br /> <br /> Sorting opportunities run two to three hours and are
              generally two to four times per month in the evenings and on
              Saturday mornings.
              <br /> <br />
              Unfortunately, we do not offer food sort volunteer opportunities
              at our Curtner location. <br /> <br /> Training is provided at the
              beginning of each shift. To participate in this volunteer
              activity, you must be fully vaccinated or have proof of a negative
              COVID-19 test.
            </p>
          </BigText>
        </SSS>
        <SSS style={{ width: "35%" }}>
          <Reward>
            <div>reward. </div>
            <Bora>4 $BORA</Bora>
            {volunteered || addUser || location.pathname === "/delivers" ? (
              <BoraButton onClick={() => claim()}>Claim</BoraButton>
            ) : (
              <BoraButton onClick={() => addVolunteer(1, account)}>
                Volunteer
              </BoraButton>
            )}
          </Reward>
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
