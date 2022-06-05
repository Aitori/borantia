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
            text="Deliver 20 meals to seniors & homebound clients"
            imageUrl="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png"
            org="Second Harvest"
            onClick={()=>{navigate("deliver")}}
          />
          <ThingCard
            text="Sort food in our warehouse"
            imageUrl="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png"
            org="Second Harvest"
            onClick={()=>{navigate("delivers")}}
          />
          <ThingCard
            text="Host booth for San Francisco Fair Day"
            imageUrl="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png"
            org="Second Harvest"
            onClick={()=>{navigate("delivers")}}
          />
          <ThingCard
            text="Organize a virtual food drive"
            imageUrl="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png"
            org="Second Harvest"
            onClick={()=>{navigate("delivers")}}
          />
          <ThingCard
            text="Cry for like 5 seconds"
            imageUrl="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png"
            org="Second Harvest"
            onClick={()=>{navigate("delivers")}}
          />
          <ThingCard
            text="Win a food hackathon"
            imageUrl="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png"
            org="Second Harvest"
            onClick={()=>{navigate("delivers")}}
          />
          <ThingCard
            text="Run a marathon"
            imageUrl="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png"
            org="Second Harvest"
            onClick={()=>{navigate("delivers")}}
          />
        </CardWrapper>
      )}
      {se && (
        <CardWrapper>
          <OtherCard
            location="San Francisco, CA"
            imageUrl="https://www.shfb.org/wp-content/uploads/2019/07/SHFB_Primary_Logo_RGB@2x-8.png"
            org="Second Harvest"
            desc="Food and nutrition for those in need"
            num={6}
          />
        </CardWrapper>
      )}
    </Wrapper>
  );
};

export default LandingPage;
