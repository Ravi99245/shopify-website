import {
  Section,
  DetailsContianainer,
  Paragraph,
  Heading,
  Shopify,
  VideoContainer,
  VideoComponent,
  IndividualContianer,
  ImageComponent,
} from "./styledComponent";

const LastPage = () => (
  <Section>
    <DetailsContianainer>
      <Paragraph>MERCHANT OBSESSED</Paragraph>
      <Heading>
        Meet
        <br /> the people
        <br /> who chose
      </Heading>
      <Shopify>Shopify</Shopify>
    </DetailsContianainer>
    <VideoContainer>
      <IndividualContianer>
        <VideoComponent autoPlay loop>
          <source
            src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1724824276/packing2_lyinpp.mp4"
            type="video/mp4"
          />
        </VideoComponent>
        <ImageComponent
          alt="shopify"
          src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1724827627/shopify-image1_n7tocu.webp"
        />
      </IndividualContianer>
    </VideoContainer>
  </Section>
);

export default LastPage;
