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
} from "./styledComponent";

class ThirdPage extends Component {
  state = {
    hoverId: null,
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
    const { bars, hoverId } = this.state;

    return (
      <Section>
        <div>
          <div class="w-css-reset">
            <img
              class="w-css-reset"
              srcset="https://embed-ssl.wistia.com/deliveries/d1de6590f4f55c80da421d3b27bad5f8.webp?image_crop_resized=640x276 320w, 
              https://embed-ssl.wistia.com/deliveries/d1de6590f4f55c80da421d3b27bad5f8.webp?image_crop_resized=640x276 640w, https://embed-ssl.wistia.com/deliveries/d1de6590f4f55c80da421d3b27bad5f8.webp?image_crop_resized=960x413 960w, https://embed-ssl.wistia.com/deliveries/d1de6590f4f55c80da421d3b27bad5f8.webp?image_crop_resized=1280x551 1280w, https://embed-ssl.wistia.com/deliveries/d1de6590f4f55c80da421d3b27bad5f8.webp?image_crop_resized=1920x827 1920w, https://embed-ssl.wistia.com/deliveries/d1de6590f4f55c80da421d3b27bad5f8.webp?image_crop_resized=1920x827 3840w"
              src="https://embed-ssl.wistia.com/deliveries/d1de6590f4f55c80da421d3b27bad5f8.webp?image_crop_resized=1920x827"
              alt="Shopify apps icons"
            />
          </div>
        </div>
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
            <Container>
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
