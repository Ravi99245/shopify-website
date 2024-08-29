import { Component } from "react";

import {
  Section,
  Quote,
  ImageWrapper,
  Image,
  Button,
  DetaialsContainer,
  InformationContaner,
  Right,
  Left,
  Company,
  Owner,
} from "./styledComponent";

class BottomSection extends Component {
  state = {
    images: [
      {
        id: 1,
        src: "https://res.cloudinary.com/dxa4rbmrj/image/upload/v1724909529/swap-image2_bvazvq.webp",
        isBack: true,
        messege:
          "Shopify helped me take something that I put my heart and soul into and share it with people that need it and find it useful.",
        company: "Satya",
        owner: "Patrice Mousseau",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/dxa4rbmrj/image/upload/v1724909513/swap-image1_litlzb.webp",
        isBack: false,
        messege:
          "We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand.",
        company: "BLK & Bold",
        owner: "Rod Johnson ",
      },
    ],
  };

  handlePrevious = () => {
    this.setState((prevState) => ({
      images: prevState.images.map((image) => {
        return { ...image, isBack: !image.isBack };
      }),
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      images: prevState.images.map((image) => {
        return { ...image, isBack: !image.isBack };
      }),
    }));
  };

  render() {
    const { images } = this.state;

    return (
      <Section>
        <DetaialsContainer>
          <InformationContaner>
            {images.map((image) => (
              <>
                {image.isBack === false && (
                  <>
                    <Quote>{image.messege}</Quote>
                    <Company>{image.company}</Company>
                    <p>
                      <Owner>{image.owner}</Owner> — Owner
                    </p>
                  </>
                )}
              </>
            ))}
            <div>
              <Button onClick={this.handlePrevious}>
                <Left />
              </Button>
              <Button onClick={this.handleNext}>
                <Right />
              </Button>
            </div>
          </InformationContaner>
          <ImageWrapper>
            {images.map((image, index) => (
              <Image key={image.id} src={image.src} isBack={image.isBack} />
            ))}
          </ImageWrapper>
        </DetaialsContainer>
      </Section>
    );
  }
}

export default BottomSection;
