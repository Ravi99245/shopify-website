import { Component } from "react";

import {
  Section,
  Heading,
  Para,
  DescriptionContainer,
  Image,
  ArrowContainer,
  Arrow1,
  Arrow2,
  Anchor,
  Description,
  Line,
  AnchorContianer,
} from "./styledComponent";

class FifthPage extends Component {
  state = { arrow1: false, arrow2: true };

  handleMouseEneter = () => {
    this.setState({ arrow1: true, arrow2: false });
  };

  handleMouseLeave = () => {
    this.setState({ arrow1: false, arrow2: true });
  };

  render() {
    const { arrow1, arrow2 } = this.state;
    return (
      <Section>
        <DescriptionContainer>
          <Para>POINT OF SALE</Para>
          <Heading>Flexible point sale to power your retail store</Heading>
          <Description>
            A POS system that allows customers to shop their way, from online to
            checkout line.
          </Description>
          <AnchorContianer>
            <Anchor
              href="https://www.shopify.com/pos"
              onMouseEnter={this.handleMouseEneter}
              onMouseLeave={this.handleMouseLeave}
            >
              <ArrowContainer>
                <Arrow1 arrow1={arrow1} />
                <span>Meet Shopify POS</span>
              </ArrowContainer>
              <Arrow2 arrow2={arrow2} />
            </Anchor>
            <Line />
          </AnchorContianer>
        </DescriptionContainer>
        <DescriptionContainer>
          <Image
            srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/pos-2-small-2bceb2e9fd90de0e825252632b00f723978536c6c4535e44468dfc31a7cef8f0.webp 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/pos-2-large-50a3a20f09c7d1fef32dd3c6fdcfc75db43bc06e980cd317d08acbba64ae9a7b.webp 2x"
            alt="Shopify Point of Sale"
            loading="lazy"
          />
        </DescriptionContainer>
      </Section>
    );
  }
}

export default FifthPage;
