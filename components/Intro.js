import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import Container from "./Container";
import ConnectWallet from "./ConnectWallet";
import { padWidth } from "../utils";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MenuItemText = styled.span`
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;

function MenuItem(props) {
  const elementId = props.elementId;
  return (
    <MenuItemText
      style={{ padding: "10px 20px" }}
      onClick={() => {
        if (elementId) {
          const ele = document.getElementById(elementId);
          ele.scrollIntoView({ behavior: "smooth" });
        }
        props.onClick && props.onClick();
      }}
    >
      {props.children}
    </MenuItemText>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 60px;
`;
const ContentImage = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

function Intro() {
  return (
    <Container
      style={{
        background: "#dae7f8",
      }}
      id="intro"
    >
      <Head>
        <h1>Your First NFT</h1>
        <MenuWrapper>
          <MenuItem elementId="intro">介绍</MenuItem>
          <MenuItem elementId="roadmap">发展路线</MenuItem>
          <MenuItem elementId="faq">问与答</MenuItem>
          <MenuItem elementId="team">项目成员</MenuItem>
        </MenuWrapper>
        <ConnectWallet showCollect={true} />
      </Head>
      <Content>
        <ContentImage>
          <img style={{ width: 400 }} src="/images/firstnft1.png" />
        </ContentImage>
        <Typography
          style={{
            marginTop: "8.3333333%",
          }}
          variant="body1"
          gutterBottom
        >
          献给 Web3  新手的第一个 NFT
        </Typography>
        <Typography
          style={{
            marginTop: "2%",
          }}
          variant="body1"
          gutterBottom
        >
          公开供应，数量无限，人手一个
          <br/>
          请放心参与，咱中国人不骗中国人{" "}
          <img
            style={{ width: 36, position: "relative", top: 5 }}
            src="/icons/doge.png"
          />
        </Typography>
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <Tooltip title="官方 OpenSea">
            <a
              href="https://opensea.io/collection/yourfirstnft-v3"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  cursor: "pointer",
                  width: 40,
                  marginRight: "40px",
                }}
                src="/icons/opensea.svg"
              />
            </a>
          </Tooltip>
          <Tooltip title="官方 github">
            <a
              href="https://github.com/yourfirstnft/YourFirstNFT"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  cursor: "pointer",
                  width: 40,
                  marginRight: "40px",
                }}
                src="/icons/github.png"
              />
            </a>
          </Tooltip>
          <Tooltip title="官方 Twitter">
            <a
              href="https://twitter.com/gclxnft"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  width: 40,
                }}
                src="/icons/twitter.svg"
              />
            </a>
          </Tooltip>
        </div>
        {/* <Typography
          style={{
            marginTop: "5%",
            textAlign: "center",
            color: "#666",
            maxWidth: "600px",
          }}
          variant="body2"
          gutterBottom
        >
          我们不与国际接轨。We DO NOT provide an English version for English
          speakers, please consider learning Chinese or using Google Translate.
        </Typography> */}
      </Content>
    </Container>
  );
}

export default Intro;
