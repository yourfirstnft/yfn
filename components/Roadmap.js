import styled from "styled-components";
import Container from "./Container";
import Typography from "@mui/material/Typography";

const Content = styled.div`
  max-width: 840px;
  margin: 5% auto 5% auto;
  strong {
    color: red;
  }
`;

function Roadmap() {
  return (
    <Container
      style={{
        background: "#dde4b6",
      }}
      id="roadmap"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        发展路线
      </Typography>

      <Content>
        <Typography
          style={{ marginBottom: 20, marginTop: "4%" }}
          variant="body1"
          gutterBottom
        >
          <strong>2022 Q2</strong>{" "}
          {/* <del> */}
            完成合约发布，项目网站上线
            在 Mint 成功后，我们鼓励你使用 Mirror 发布文章，创建你的第一篇 Web3 文章，鼓励进入 RSS3，创造你的 Web3 主页。
          {/* </del> */}
          {/* （2022.03.12{" "}
          <a
            href="https://twitter.com/gclxnft/status/1498978154056065024"
            target="_blank"
            rel="noreferrer"
          >
            提前完成
          </a> 
          ）*/}
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          <strong>2022 Q3</strong>{" "}
          完成 Q2 没有完成的目标。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          <strong>2022 Q4</strong>{" "}
          绝对不会跑路，因为我们没有拿你们一分钱，没有必要。
        </Typography>
        {/* <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          <strong>2022 Q4</strong>{" "}
          我们大概在这个时间或者之前卷钱跑路，所有未MINT完成的NFT将会被全部锁定在合约当中，同时我们将放弃合约的控制权，交给社区管理！
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          我们是国产良心 NFT
          项目，不太擅长开空头支票。如果之后做了，就算超出预期吧，再更新上来。
        </Typography> */}
      </Content>
    </Container>
  );
}

export default Roadmap;
