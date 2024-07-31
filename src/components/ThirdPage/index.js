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
} from "./styledComponent";

class ThirdPage extends Component {
  state = {
    bars: [
      { id: 1, filling: true },
      { id: 2, filling: false },
      { id: 3, filling: false },
    ],
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        bars: prevState.bars.map((bar, index, array) => ({
          ...bar,
          filling:
            index === array.length - 1
              ? array[0].filling
              : array[index + 1].filling,
        })),
      }));
    }, 10000); // Change interval time as needed
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { bars } = this.state;

    return (
      <Section>
        <ProgressBars>
          {bars.map((bar) => (
            <Button key={bar.id}>
              <GradientDiv filling={bar.filling} />
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
            },
            {
              id: 2,
              heading: "Craft the brand you want",
              paragraph:
                "Select from customizable templates created by a community of world-class designers.",
              anchor: "Theme Store",
            },
            {
              id: 3,
              heading: "Level up with apps",
              paragraph:
                "Add more features and functionality to your online store with apps built by trusted Shopify developers.",
              anchor: "Shopify App Store",
            },
          ].map(({ id, heading, paragraph, anchor }) => (
            <Container>
              <Heading>{heading}</Heading>
              <Paragraph>{paragraph}</Paragraph>
              <a href="null">
                <span>{anchor}</span>
              </a>
            </Container>
          ))}
        </AnchorContainer>
      </Section>
    );
  }
}

export default ThirdPage;
