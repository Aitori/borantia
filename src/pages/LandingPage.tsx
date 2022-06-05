import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OtherCard from "../components/OtherCard";
import ThingCard from "../components/ThingCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0 0 0;
`;

const Headline = styled.div`
  font-weight: 400;
  font-size: 32px;
  color: white;
  margin-bottom: 32px;
`;

const Higherlighter = styled.span`
  color: #f69af8;
  font-weight: 700;
`;

interface CategoryProps {
  selected: boolean;
}

const Categories = styled.div<CategoryProps>`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #fafafa;
  padding: 12px 8px 24px 8px;
  margin: 0 32px;
  border-bottom: ${(props) => (props.selected ? "3px solid #F69AF8" : "")};
  &:hover {
    cursor: pointer;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
`;

const CardWrapper = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px 24px;
  margin: 32px 0 512px 0;
`;

const LandingPage = () => {
  const [se, setSe] = useState(false);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Headline>
        Find your next <Higherlighter>volunteer opportunity</Higherlighter>
      </Headline>
      <CategoryWrapper>
        <Categories selected={!se} onClick={() => setSe(false)}>
          Active Bounties
        </Categories>
        <Categories selected={se} onClick={() => setSe(true)}>
          Organizations
        </Categories>
      </CategoryWrapper>
      {!se && (
        <CardWrapper>
          <ThingCard
            text="Develop an education curriculum for conservation"
            imageUrl="https://s2.coinmarketcap.com/static/img/coins/200x200/9921.png"
            org="Aquari"
            onClick={() => {
              navigate("deliver");
            }}
            offline
          />
          <ThingCard
            text="Attend a beach cleanup at Ocean Beach, San Francisco"
            imageUrl="https://s2.coinmarketcap.com/static/img/coins/200x200/9921.png"
            org="Aquari"
            onClick={() => {
              navigate("delivers");
            }}
          />
          <ThingCard
            text="Organize an ocean conservation hackathon"
            imageUrl="https://s2.coinmarketcap.com/static/img/coins/200x200/9921.png"
            org="Aquari"
            onClick={() => {
              navigate("delivers");
            }}
          />
          <ThingCard
            text="Volunteer at the Climate Change March in Chicago"
            imageUrl="https://s2.coinmarketcap.com/static/img/coins/200x200/9921.png"
            org="Aquari"
            onClick={() => {
              navigate("delivers");
            }}
            offline
          />
          <ThingCard
            text="Win a web3 hackathon"
            imageUrl="https://s2.coinmarketcap.com/static/img/coins/200x200/9921.png"
            org="Aquari"
            onClick={() => {
              navigate("delivers");
            }}
          />
          <ThingCard
            text="Run a marathon"
            imageUrl="https://s2.coinmarketcap.com/static/img/coins/200x200/9921.png"
            org="Aquari"
            onClick={() => {
              navigate("delivers");
            }}
          />
        </CardWrapper>
      )}
      {se && (
        <CardWrapper>
          <OtherCard
            location="San Francisco, CA"
            imageUrl="https://s2.coinmarketcap.com/static/img/coins/200x200/9921.png"
            org="Aquari"
            desc="Food and nutrition for those in need"
            num={6}
          />
        </CardWrapper>
      )}
    </Wrapper>
  );
};

export default LandingPage;
