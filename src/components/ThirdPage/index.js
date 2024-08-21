import { Component } from "react";

import {
  Section,
  GradientDiv,
  Button,
  ProgressBars,
  AnchorContainer,
  Container,
  Heading,
  Paragraph,
  AnchorElement,
  Arrow,
  SpanElement,
  VideoComponent,
  VideoItemContainer,
  VideoContainer,
  VideoItem,
} from "./styledComponent";

const video1 = () => (
  <VideoComponent autoPlay loop>
    <source
      src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1724220660/shopping_technology_nevt5u.mp4"
      type="video/mp4"
    />
  </VideoComponent>
);

const video2 = () => (
  <VideoComponent autoPlay loop>
    <source
      src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1724220508/customizes_templates_dki8vm.mp4"
      type="video/mp4"
    />
  </VideoComponent>
);

const video3 = () => (
  <VideoComponent autoPlay loop>
    <source
      src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1724220454/Shpify_apps_tubdja.mp4"
      type="video/mp4"
    />
  </VideoComponent>
);

const videoMapping = {
  1: video1,
  2: video2,
  3: video3,
};

class ThirdPage extends Component {
  state = {
    hoverId: null,
    duration: 21 * 1000,
    bars: [
      { id: 1, playing: false, time: 11 },
      { id: 2, playing: true, time: 19 },
      { id: 3, playing: false, time: 12 },
    ],
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

  udpateVidoeUrl = (id) => {
    this.setState((prevState) => ({
      bars: prevState.bars.map((bar) =>
        bar.id === id
          ? { ...bar, playing: !bar.playing }
          : { ...bar, playing: false }
      ),
    }));
  };

  handleMouseEnter = (id) => {
    this.setState({ hoverId: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoverId: null });
  };

  render() {
    const { bars, hoverId } = this.state;

    return (
      <Section>
        <VideoContainer>
          <VideoItemContainer>
            {bars.map(({ id, playing }) => {
              const VideoFunction = videoMapping[id];
              return (
                playing && <VideoItem key={id}>{VideoFunction()}</VideoItem>
              );
            })}
          </VideoItemContainer>
        </VideoContainer>
        <ProgressBars>
          {bars.map((bar) => (
            <Button key={bar.id} onClick={() => this.udpateVidoeUrl(bar.id)}>
              <GradientDiv playing={bar.playing} time={bar.time} />
            </Button>
          ))}
        </ProgressBars>

        <AnchorContainer>
          {[
            {
              id: 1,
              heading: "Build an online storefront",
              paragraph:
                "Bring your vision to life with our drag-and-drop store creator. No coding expertise required — just your next big idea.",
              anchor: "Online Store Builder",
              href: "https://www.shopify.com/online",
            },
            {
              id: 2,
              heading: "Craft the brand you want",
              paragraph:
                "Select from customizable templates created by a community of world-class designers.",
              anchor: "Theme Store",
              href: "https://themes.shopify.com/?locale=en",
            },
            {
              id: 3,
              heading: "Level up with apps",
              paragraph:
                "Add more features and functionality to your online store with apps built by trusted Shopify developers.",
              anchor: "Shopify App Store",
              href: "https://apps.shopify.com/",
            },
          ].map(({ id, heading, paragraph, anchor, href }) => (
            <Container onClick={() => this.udpateVidoeUrl(id)}>
              <Heading>{heading}</Heading>
              <Paragraph>{paragraph}</Paragraph>
              <AnchorElement
                href={href}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
              >
                <SpanElement>
                  {anchor}
                  {hoverId === id && <Arrow />}
                </SpanElement>
              </AnchorElement>
            </Container>
          ))}
        </AnchorContainer>
      </Section>
    );
  }
}

export default ThirdPage;
