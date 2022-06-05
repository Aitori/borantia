import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 128px;
`;

const Headliner = styled.div`
  display: flex;
`;

const Hh = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #fafafa;
`;

const H3 = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #fafafa;
`;

const H4 = styled.div`
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;

  color: #fafafa;
  background: #18151e;
  border-radius: 15px;
  padding: 4px 8px;
  margin-left: 72px;
  width: fit-content;
  margin-bottom: 48px;
`;

const T1 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;

  color: #524e63;
  padding-bottom: 16px;
  border-bottom: 1px solid #201d28;
  margin-bottom: 16px;
  width: fit-content;
  margin-top: 64px;
`;

const B1 = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const TT1 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ProfilePage = () => {
  return (
    <Wrapper>
      <Headliner>
        <img
          style={{ height: "64px", borderRadius: "50%", marginRight: "16px" }}
          src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4"
          alt=""
        />
        <div>
          <Hh style={{ color: "white" }}>luiso.eth</Hh>
          <H3 style={{ color: "white" }}>0xd1zZyd40....</H3>
        </div>
      </Headliner>
      <H4>Total $HOURS: 53</H4>
      <span style={{ borderBottom: "1px solid #201D28" }}></span>
      <T1>2022 / May</T1>
      <TT1>
        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />
        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />

        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />
      </TT1>
      <T1>2022 / April</T1>
      <TT1>
        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />
        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />
        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />

        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />

        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />

        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />

        <B1 src="https://lh3.googleusercontent.com/w9TSwV7QU7TiCRLqiZkAvm_0lLUp9aQmaKRv-BD02XmFkfga0GuMbwv27eovGAowVts3f2V4SDPtnadkwDcKl1IuAEdjbL3QBl2HuQ=w600" />
      </TT1>
    </Wrapper>
  );
};

export default ProfilePage;
