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
  VidoeDetailContainer,
  Heading2,
  At,
  Button,
  Data,
  GradientDiv,
} from "./styledComponent";

class VideoPage extends Component {
  state = {
    arrow1: false,
    arrow2: true,
    bars: [
      {
        id: 1,
        playing: true,
        symbol: <Hashtag />,
        heading: "Reach new Leads",
        paragraph:
          "Find new shoppers with SEO, social media, and content marketingtools that help you reach customers where they are.",
      },
      {
        id: 2,
        playing: false,
        symbol: <At />,
        heading: "Enguage with customers",
        paragraph:
          "Build custom eamil campaigns, set automations serve everysegment, and connect with customers on the go with integrated messaging tool.",
      },
      {
        id: 3,
        playing: false,
        symbol: <Data />,
        heading: "Data you can build on",
        paragraph:
          "Take control of your customer data to build custom audiences and explore the customer insights that drive ongoing growth.",
      },
    ],
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        // Reset all bars to not playing
        const bars = prevState.bars.map((bar) => ({ ...bar, playing: false }));

        // Find the current playing bar
        const currentPlayingIndex = prevState.bars.findIndex(
          (bar) => bar.playing
        );

        // Determine the next index
        const nextPlayingIndex =
          currentPlayingIndex === prevState.bars.length - 1
            ? 0
            : currentPlayingIndex + 1;

        // Set the next bar to playing
        bars[nextPlayingIndex].playing = true;

        return { bars };
      });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMouseEneter = () => {
    this.setState({ arrow1: true, arrow2: false });
  };

  handleMouseLeave = () => {
    this.setState({ arrow1: false, arrow2: true });
  };

  render() {
    const { arrow1, arrow2, bars } = this.state;
    console.log(bars);
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
          <>
            {bars.map(({ id, symbol, playing, heading, paragraph }) => (
              <VidoeDetailContainer key={id}>
                <IconContianer>
                  <InnerContainer>{symbol}</InnerContainer>
                </IconContianer>
                <DetaialsContainer>
                  <Heading2>{heading}</Heading2>
                  <p>{paragraph}</p>
                  <Button key={id}>
                    <GradientDiv playing={playing} />
                  </Button>
                </DetaialsContainer>
              </VidoeDetailContainer>
            ))}
          </>
        </div>
      </Section>
    );
  }
}

export default VideoPage;
