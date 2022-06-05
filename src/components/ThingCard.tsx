import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #18151e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  margin: 12px 24px;
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;

  color: #fafafa;
`;

const Org = styled.div`
  display: flex;
  height: 27px;
  margin: 12px 24px;
  background: #201d28;
  border-radius: 15px;
  width: fit-content;
  align-items: center;
  padding: 4px 16px;
`;

interface ThingCardProps {
  text: string;
  org: string;
  imageUrl: string;
  onClick: () => void;
  offline?: boolean;
}

const Orgimg = styled.img`
  height: 100%;
`;

const Orgtxt = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;

  color: #fafafa;
  margin-left: 16px;
`;
const ThingCard = ({
  text,
  org,
  imageUrl,
  onClick,
  offline,
}: ThingCardProps) => {
  return (
    <Wrapper onClick={() => onClick()}>
      <Text>{text}</Text>
      <div style={{ display: "flex" }}>
        <Org>
          <Orgimg src={imageUrl} alt="" />
          <Orgtxt>{org}</Orgtxt>
        </Org>
        <Org>
          {offline ? "💻" : "📌"}
          <Orgtxt>{offline ? "offline" : "online"}</Orgtxt>
        </Org>
      </div>
    </Wrapper>
  );
};

export default ThingCard;
