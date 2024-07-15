import { Component } from "react";

import { Section, GradientDiv, Button, ProgressBars } from "./styledComponent";

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
      </Section>
    );
  }
}

export default ThirdPage;
