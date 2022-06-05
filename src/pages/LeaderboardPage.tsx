import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 128px 548px 128px;

`;

const Hh = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  color: #fafafa;
`;

const H3 = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #524e63;
`;

const BB = styled.div`
  display: flex;
  background: #18151e;
  border-radius: 15px;
  padding: 16px;
  align-items: center;
  margin-top: 24px;
  position: relative;
`;

const E1 = styled.div`
  font-size: 40px;
  line-height: 48px;
  margin-right: 16px;
  color: #fafafa;
`;

const N1 = styled.div`
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;

  color: #fafafa;
  margin-left: 24px;
`;

const H23 = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #524e63;
`;

const H24 = styled.div`
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  right: 48px;
  position: absolute;
  color: #fafafa;
`;
const H25 = styled.div`
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  right: 176px;
  position: absolute;
  color: #fafafa;
`;
const LeaderboardPage = () => {
  return (
    <Wrapper>
      <div>
        <Hh style={{ color: "white" }}>Leaderboard</Hh>
        <H3>See how you compare against the world!</H3>
      </div>
      <div style={{ position: "relative", padding: "16px" }}>
        <H23 style={{ position: "absolute", right: "48px" }}>Badges</H23>
        <H23 style={{ position: "absolute", right: "176px" }}>Hours</H23>
      </div>
      <BB>
        <E1>🥇</E1>
        <img
          style={{ height: "40px", borderRadius: "50%", marginRight: "16px" }}
          src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4"
          alt=""
        />
        <N1>luiso.eth</N1>
        <H24>47</H24>
        <H25>232</H25>
      </BB>
      <BB>
        <E1>🥈</E1>
        <img
          style={{ height: "40px", borderRadius: "50%", marginRight: "16px" }}
          src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4"
          alt=""
        />
        <N1>mkwan.eth</N1>
        <H24>22</H24>
        <H25>123</H25>
      </BB>
      <BB>
        <E1>🥉</E1>
        <img
          style={{ height: "40px", borderRadius: "50%", marginRight: "16px" }}
          src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4"
          alt=""
        />
        <N1>zzz.eth</N1>
        <H24>7</H24>
        <H25>45</H25>
      </BB>
      <BB>
        <E1>4</E1>
        <img
          style={{ height: "40px", borderRadius: "50%", marginRight: "16px" }}
          src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4"
          alt=""
        />
        <N1>graph.eth</N1>
        <H24>5</H24>
        <H25>30</H25>
      </BB>
      <BB>
        <E1>5</E1>
        <img
          style={{ height: "40px", borderRadius: "50%", marginRight: "16px" }}
          src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4"
          alt=""
        />
        <N1>sky.eth</N1>
        <H24>2</H24>
        <H25>8</H25>
      </BB>
    </Wrapper>
  );
};

export default LeaderboardPage;
