import { Container, Globe, Span } from "./styledCompnent";

const SecondPage = () => (
  <Container>
    <Globe
      alt="Shopify Globe"
      src="https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png?width=636&amp;height=636, https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png x2"
    />
    <div>
      <h1>
        Discover why millions of entreprenures chose Shopify to build their
        business -<br />
        <Span>from hello world to IPO.</Span>
      </h1>
    </div>
  </Container>
);

export default SecondPage;
