import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #18151e;
  border-radius: 15px;
  display: flex;
  padding: 16px;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 23px;
  line-height: 31px;
  color: #fafafa;
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 24px;
  color: #524e63;
`;
const Org = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 8px 0;
`;

interface ThingCardProps {
  location: string;
  desc: string;
  org: string;
  imageUrl: string;
  num: number;
}

const Orgimg = styled.img`
  width: 40%;
  margin-right: 16px;
`;

const Bubble = styled.div`
  background: #201d28;
  border-radius: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #FAFAFA;
  width: 60%;
  margin-top: 8px;
  padding: 4px 4px;
`;
const OtherCard = ({ location, org, imageUrl, desc, num }: ThingCardProps) => {
  return (
    <Wrapper>
      <Orgimg src={imageUrl} alt="" />
      <Org>
        <Text>{org}</Text>
        <Desc>{desc}</Desc>
        <Bubble>
          🚀 {num} {num > 1 || num === 0 ? "bounties" : "bounty"}
        </Bubble>
        <Bubble>📍 {location}</Bubble>
      </Org>
    </Wrapper>
  );
};

export default OtherCard;
