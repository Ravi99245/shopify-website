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
  PlayButton,
} from "./styledComponent";

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
          playing: true,
          symbol: <Hashtag />,
          heading: "Reach new Leads",
          time: 21,
          videoUrl:
            "https://res.cloudinary.com/dxa4rbmrj/video/upload/v1722582554/social_campaign_p0x8xa.mp4",
          paragraph:
            "Find new shoppers with SEO, social media, and content marketingtools that help you reach customers where they are.",
        },
        {
          id: 2,
          playing: false,
          symbol: <At />,
          heading: "Enguage with customers",
          time: 10,
          videoUrl:
            "https://res.cloudinary.com/dxa4rbmrj/video/upload/v1723268256/digitalVideo_mziget.mp4",
          paragraph:
            "Build custom eamil campaigns, set automations serve everysegment, and connect with customers on the go with integrated messaging tool.",
        },
        {
          id: 3,
          playing: false,
          symbol: <Data />,
          heading: "Data you can build on",
          time: 25,
          videoUrl:
            "https://res.cloudinary.com/dxa4rbmrj/video/upload/v1722596336/7578614-uhd_2160_4096_25fps_cptimm.mp4",
          paragraph:
            "Take control of your customer data to build custom audiences and explore the customer insights that drive ongoing growth.",
        },
      ],
    };

    this.videoRef = React.createRef();
  }

  udpateVidoeUrl = (video) => {
    this.setState({ url: video });
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
      const video = bars[nextPlayingIndex].videoUrl;
      const duration = bars[nextPlayingIndex].time * 1000; // Default to 10 seconds if `time` is undefined

      // Clear and reset the interval with the new duration
      clearInterval(this.interval);
      this.interval = setInterval(this.updateInterval, duration);

      return { bars, url: video, duration };
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

  componentDidUpdate(prevProps) {
    // Check if the video URL has changed
    if (prevProps.url !== this.props.url) {
      // Access the video element
      const videoElement = this.videoRef.current;

      if (videoElement) {
        // Pause the video
        videoElement.pause();
        // Clear the video source
        videoElement.src = "";
        // Set the new source
        videoElement.src = this.props.url;
        // Reload and play the video
        videoElement.load();
        videoElement.play();
      }
    }
  }

  handleMouseEneter = () => {
    this.setState({ arrow1: true, arrow2: false });
  };

  handleMouseLeave = () => {
    this.setState({ arrow1: false, arrow2: true });
  };

  handlePlayPause = () => {
    // Access the video element using the ref
    const video = this.videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  render() {
    const { arrow1, arrow2, bars, url } = this.state;
    console.log(url);
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
        <VideoContainer>
          <GradientContainer>
            {bars.map(
              ({ id, symbol, playing, heading, paragraph, videoUrl, time }) => (
                <VidoeDetailContainer
                  key={id}
                  onClick={() => this.udpateVidoeUrl(videoUrl)}
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
              )
            )}
          </GradientContainer>
          <VideoItemContainer>
            <VideoComponent ref={this.videoRef} autoPlay controls loop>
              <source src={url} type="video/mp4" />
            </VideoComponent>
          </VideoItemContainer>
        </VideoContainer>
      </Section>
    );
  }
}

export default VideoPage;
