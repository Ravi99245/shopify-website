import { Component } from "react";

import {
  Section,
  DescriptionContainer,
  HeadingContaner,
  Heading,
  Para,
  Arrow1,
  Arrow2,
  ArrowContainer,
  Anchor,
  Paragraph,
  StyledContainer,
  StyledImage,
  Line,
  StyledVideo,
} from "./styledComponent";

class FourthPage extends Component {
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
          <HeadingContaner>
            <Para>SALES CHANNELS</Para>
            <Heading>
              Sell to every buyer,
              <br />
              everywhere
            </Heading>
          </HeadingContaner>
          <HeadingContaner>
            <Paragraph>
              Sell online, in person, and around the world with the marketing
              tools, social integrations, and sales channels you need to get
              your products in front of customers.
            </Paragraph>
            <Anchor
              href="/sell"
              onMouseEnter={this.handleMouseEneter}
              onMouseLeave={this.handleMouseLeave}
            >
              <ArrowContainer>
                <Arrow1 arrow1={arrow1} />
                <span>Start selling</span>
              </ArrowContainer>
              <Arrow2 arrow2={arrow2} />
            </Anchor>
            <Line />
          </HeadingContaner>
        </DescriptionContainer>
        <StyledContainer>
          <StyledImage
            sizes="100vw"
            srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/sell-buyer-small-f7a1e59a62226c554e7691b17a1af76c06978bd41ce78d4f980446ed1bfcaad6.webp 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/sell-buyer-large-37ef6b862e53584054039ff594f868d60f1804c08624b462c4f4d679e7155c71.webp 2x"
            loading="lazy"
            alt="Marketing product examples"
          />
          <StyledImage
            sizes="100vw"
            srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/marketing2-small-2a712ec8dc64d2b33a2ddd9346f5ebeb8d87d616831d14cb32dcef3e06302598.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/marketing2-large-11a96ec4b8f603824a9f489b164510137d62ec4035577593d68c787159c9a5e2.png 2x"
            loading="lazy"
            alt="Marketing - Connect with customers online"
          />
          <StyledImage
            sizes="100vw"
            srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/marketing3-small-6582aefc08f96962465ba3e4579af9e7c1fd338571c1ac96de8999feb106c05f.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/marketing3-large-45a05b52b6219582fe516c4fdea4dfe6aa7107b7dd07b1e91e49bcf35fb85fc7.png 2x"
            loading="lazy"
            alt="Marketing - Connect with customers in person"
          />
        </StyledContainer>
        <div>
          <StyledVideo
            id="wistia_simple_video_236"
            crossorigin="anonymous"
            poster="https://fast.wistia.com/assets/images/blank.gif"
            aria-label="Video"
            src="https://www.shopify.com/431ae521-b392-4eb4-bd44-850dc6ad9a06.mp4"
            controlslist="nodownload"
            playsinline=""
            muted="muted"
            loop=""
            preload="auto"
            type="video/m3u8"
            x-webkit-airplay="allow"
          ></StyledVideo>
        </div>
      </Section>
    );
  }
}

export default FourthPage;
