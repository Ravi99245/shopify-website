import React, { Component } from "react";

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
  VideoContainer,
  GradientContainer,
  VideoComponent,
  VideoItemContainer,
} from "./styledComponent";

const video1 = () => (
  <VideoComponent autoPlay loop>
    <source
      src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1722582554/social_campaign_p0x8xa.mp4"
      type="video/mp4"
    />
  </VideoComponent>
);

const video2 = () => (
  <VideoComponent autoPlay loop>
    <source
      src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1723268256/digitalVideo_mziget.mp4"
      type="video/mp4"
    />
  </VideoComponent>
);

const video3 = () => (
  <VideoComponent autoPlay loop>
    <source
      src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1722596336/7578614-uhd_2160_4096_25fps_cptimm.mp4"
      type="video/mp4"
    />
  </VideoComponent>
);

const videoMapping = {
  1: video1,
  2: video2,
  3: video3,
};

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow1: false,
      arrow2: true,
      duration: 21 * 1000,
      url: "https://res.cloudinary.com/dxa4rbmrj/video/upload/v1722582554/social_campaign_p0x8xa.mp4",
      bars: [
        {
          id: 1,
          playing: false,
          symbol: <Hashtag />,
          heading: "Oversee your operations",
          time: 21,
          paragraph:
            "Manage inventory, track payments, and view real-timebusiness insights -- all in one place, so you can focus on buliding your business",
        },
        {
          id: 2,
          playing: true,
          symbol: <At />,
          heading: "Fulfill every order",
          time: 10,
          paragraph:
            "Get your products where they need to be with integreated inventory management, streamlined returns, and dedicated shipping and fulfillment network.",
        },
        {
          id: 3,
          playing: false,
          symbol: <Data />,
          heading: "Manage your money where you make it",
          time: 25,
          paragraph:
            "Manage your business finances all from one place with money management and flexible funding designed with entreprenueurs in mind.",
        },
      ],
    };
  }

  udpateVidoeUrl = (id) => {
    this.setState((prevState) => ({
      bars: prevState.bars.map((bar) =>
        bar.id === id
          ? { ...bar, playing: !bar.playing }
          : { ...bar, playing: false }
      ),
    }));
  };

  updateInterval = () => {
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

      // Calculate the new video URL and duration

      const duration = bars[nextPlayingIndex].time * 1000; // Default to 10 seconds if `time` is undefined

      // Clear and reset the interval with the new duration
      clearInterval(this.interval);
      this.interval = setInterval(this.updateInterval, duration);

      return { bars, duration };
    });
  };

  componentDidMount(prevProps) {
    this.updateInterval();

    // Initialize the interval
    this.interval = setInterval(this.updateInterval, this.state.duration); // Default duration if undefined
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
    return (
      <Section>
        <TopContainer>
          <Paragraph>CENTRALIZED BUSINESS OPERATIONS</Paragraph>
          <HeadingContianer>
            <Heading>Streamline your back office</Heading>
            <AnchorContianer>
              <Anchor
                href="https://www.shopify.com/pos"
                onMouseEnter={this.handleMouseEneter}
                onMouseLeave={this.handleMouseLeave}
              >
                <ArrowContainer>
                  <Arrow1 arrow1={arrow1} />
                  <span>Manage your business</span>
                </ArrowContainer>
                <Arrow2 arrow2={arrow2} />
              </Anchor>
              <Line />
            </AnchorContianer>
          </HeadingContianer>
        </TopContainer>
        <VideoContainer>
          <GradientContainer>
            {bars.map(({ id, symbol, playing, heading, paragraph, time }) => (
              <VidoeDetailContainer
                key={id}
                playing={playing}
                onClick={() => this.udpateVidoeUrl(id)}
              >
                <IconContianer>
                  <InnerContainer>{symbol}</InnerContainer>
                </IconContianer>
                <DetaialsContainer>
                  <Heading2>{heading}</Heading2>
                  <p>{paragraph}</p>
                  <Button key={id}>
                    <GradientDiv playing={playing} time={time} />
                  </Button>
                </DetaialsContainer>
              </VidoeDetailContainer>
            ))}
          </GradientContainer>
          <VideoItemContainer>
            {bars.map(({ id, playing }) => {
              const VideoFunction = videoMapping[id];
              return playing && <div key={id}>{VideoFunction()}</div>;
            })}
          </VideoItemContainer>
        </VideoContainer>
      </Section>
    );
  }
}

export default VideoPage;
