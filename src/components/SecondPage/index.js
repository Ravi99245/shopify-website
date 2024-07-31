import { Component } from "react";

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
  AnchorElement,
  LinksContainer,
  Enterprise,
  SmallImage,
  Paragraph,
  AnchorContainer,
  Explore,
  ExploreHeading,
  Arrow,
} from "./styledCompnent";

class SecondPage extends Component {
  state = { hoveredId: null };

  handleMouseEnter = (id) => {
    this.setState({ hoveredId: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredId: null });
  };

  render() {
    const { hoveredId } = this.state;

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
        <LinksContainer>
          <Explore>
            <ExploreHeading>
              Explore the world's largest commerce community
            </ExploreHeading>
          </Explore>
          <AnchorContainer>
            {[
              {
                id: 1,
                href: "https://www.shopify.com/enterprise",
                imgSrc:
                  "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/icons/layers-75e27771a1461d41eeea6d3776873fcf0dca705afb334adadb0c7dc0a20b0404.svg",
                title: "Enterprise",
                description:
                  "The modern, composable stack for enterprise retail",
              },
              {
                id: 2,
                href: "https://www.shopify.com/enterprise",
                imgSrc:
                  "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/icons/infinity-ea665cc8ef4b2379465495ba43cd5cdbba88cd70dd51c6fa59aec331fd2336be.svg",
                title: "Plus",
                description: "A commercial solution for growing digital brands",
              },
              {
                id: 3,
                href: "https://www.shopify.com/enterprise",
                imgSrc:
                  "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/icons/partners-d453b53d9ff10a630080d24563478935f3d1b10de8eb15bef9f13fe58be3f8de.svg",
                title: "Partners",
                description:
                  "Offer your expertise to Shopify merchants all over the world",
              },
              {
                id: 4,
                href: "https://www.shopify.com/enterprise",
                imgSrc:
                  "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/icons/dev-82bdbe630a35ca679000d2177f4e32d44b5455e906f0a7ff628c3eadbee38c8e.svg",
                title: "Developers",
                description:
                  "Build the future of commerce with Shopify's powerful API",
              },
              {
                id: 5,
                href: "https://www.shopify.com/enterprise",
                imgSrc:
                  "https://cdn.shopify.com/b/shopify-brochure2-assets/fc4cebbadfd9af383ccd031219260b7d.svg",
                title: "Retail Stores",
                description: "The complete system for selling in person",
              },
            ].map(({ id, href, imgSrc, title, description }) => (
              <AnchorElement
                key={id}
                href={href}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
              >
                <SmallImage src={imgSrc} alt={title} />
                <Enterprise>
                  {title} {hoveredId === id && <Arrow />}
                </Enterprise>
                <Paragraph>{description}</Paragraph>
              </AnchorElement>
            ))}
          </AnchorContainer>
        </LinksContainer>
      </Container>
    );
  }
}

export default SecondPage;
