import { Component } from "react";

import {
  Section,
  DescriptionContainer,
  HeadingContaner,
  Heading,
  Para,
  Arrow1,
  Arrow2,
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
            <p>
              Sell online, in person, and around the world with the marketing
              tools, social integrations, and sales channels you need to get
              your products in front of customers.
            </p>
            <a
              href="/sell"
              onMouseEnter={this.handleMouseEneter}
              onMouseLeave={this.handleMouseLeave}
            >
              {arrow1 && <Arrow1 />}
              <span>Start selling</span>
              {arrow2 && <Arrow2 />}
            </a>
          </HeadingContaner>
        </DescriptionContainer>
      </Section>
    );
  }
}

export default FourthPage;
