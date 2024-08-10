import { Component } from "react";

import {
  AnchorContianer,
  Arrow1,
  Arrow2,
  Anchor,
  ArrowContainer,
  HeadingContianer,
  Line,
  TopContainer,
  Section,
  Heading,
  Paragraph,
  IconContianer,
  Hashtag,
  InnerContainer,
  DetaialsContainer,
} from "./styledComponent";

class VideoPage extends Component {
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
        <TopContainer>
          <Paragraph>BUILT-IN MARKETING TOOLS</Paragraph>
          <HeadingContianer>
            <Heading>From first touch to full funnel</Heading>
            <AnchorContianer>
              <Anchor
                href="https://www.shopify.com/pos"
                onMouseEnter={this.handleMouseEneter}
                onMouseLeave={this.handleMouseLeave}
              >
                <ArrowContainer>
                  <Arrow1 arrow1={arrow1} />
                  <span>Leverage our full marketing suite</span>
                </ArrowContainer>
                <Arrow2 arrow2={arrow2} />
              </Anchor>
              <Line />
            </AnchorContianer>
          </HeadingContianer>
        </TopContainer>
        <div>
          <div>
            <IconContianer>
              <InnerContainer>
                <Hashtag />
              </InnerContainer>
            </IconContianer>
            <DetaialsContainer>
              <h1>Reach new Leads</h1>
              <p>
                Find new shoppers with SEO, social media, and content marketing
                tools that help you reach customers where they are.
              </p>
            </DetaialsContainer>
          </div>
        </div>
      </Section>
    );
  }
}

export default VideoPage;
