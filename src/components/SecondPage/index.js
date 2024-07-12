import AnimatedNumber from "../AnimatedNumber/index";
import {
  Container,
  Globe,
  Span,
  MerchatContainer,
  Millions,
  WorldWide,
  InformationContainer,
  HeadingContianer,
  Heading,
} from "./styledCompnent";

const SecondPage = () => {
  return (
    <Container>
      <Globe
        alt="Shopify Globe"
        src="https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png?width=636&amp;height=636, https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png x2"
      />
      <HeadingContianer>
        <Heading>
          Discover why millions of entrepreneurs chose Shopify to build their
          business — <br />
          <Span>from hello world to IPO.</Span>
        </Heading>
        <InformationContainer>
          <MerchatContainer>
            <Millions>Millions</Millions>
            <WorldWide>of merchants world wide</WorldWide>
          </MerchatContainer>
          <MerchatContainer>
            <Millions>{<AnimatedNumber number={170} />}+</Millions>
            <WorldWide>countries represented</WorldWide>
          </MerchatContainer>
          <MerchatContainer>
            <Millions>{<AnimatedNumber number={10} />}%</Millions>
            <WorldWide>of total US commerce</WorldWide>
          </MerchatContainer>
          <MerchatContainer>
            <Millions>${<AnimatedNumber number={444} />}B</Millions>
            <WorldWide>golbal economic activity</WorldWide>
          </MerchatContainer>
        </InformationContainer>
      </HeadingContianer>
    </Container>
  );
};

export default SecondPage;
