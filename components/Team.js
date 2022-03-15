import styled from "styled-components";
import Typography from "@mui/material/Typography";

import { padWidth } from "../utils";
import Container from "./Container";

const Content = styled.div`
  max-width: 840px;
  margin: 0 auto 5% auto;
  strong {
    color: red;
  }
`;

const Avatar = styled.div`
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid #000;
  img {
    width: 100%;
  }
`;

const TeamMemberWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${padWidth}) {
    width: 100%;
    max-width: 480px;
    margin-bottom: 10%;
  }
`;

function TeamMember(props) {
  return (
    <TeamMemberWrapper>
      <Avatar>
        <img src={props.img} alt="" />
      </Avatar>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <div style={{ fontSize: 28, fontWeight: "bold" }}>{props.name}</div>
        <div style={{ marginTop: 10 }}>{props.role}</div>
        <div style={{ marginTop: 5 }}>{props.description}</div>
        <div style={{ marginTop: 20 }}>
          {props.twitterLink && (
            <a href={props.twitterLink} target="_blank" rel="noreferrer">
              <img style={{ width: 30 }} src="/icons/twitter.svg" alt="" />
            </a>
          )}
          {props.blogLink && (
            <a href={props.blogLink} target="_blank" rel="noreferrer">
              <img style={{ width: 30 }} src="/icons/blog.svg" alt="" />
            </a>
          )}
          {props.openseaLink && (
            <a
              href={props.openseaLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: 20 }}
            >
              <img style={{ width: 30 }} src="/icons/opensea.svg" alt="" />
            </a>
          )}
        </div>
      </div>
    </TeamMemberWrapper>
  );
}

const TeamWrapper = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

function Team() {
  return (
    <Container
      style={{
        background: "#eef8f5",
      }}
      id="team"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        项目组成员
      </Typography>

      <Content>
        <TeamWrapper>
          <TeamMember
            img="/one/cnfeat.jpg"
            name="cnfeat"
            role="项目发起人"
            description="笨方法实验室发起人 / 代表作《笨方法文化手册》"
            blogLink="http://www.HardWayLab.com"
          />
          <TeamMember
            img="/one/nick.jpg"
            name="nick"
            role="项目参与者"
            description="打工人/ iOS开发者/ 努力学习web3"
            blogLink="https://www.devzhangh.com/"
          />
        </TeamWrapper>
      </Content>
    </Container>
  );
}

export default Team;
