import {
  Section,
  DetailsContianainer,
  Paragraph,
  Heading,
  Shopify,
  VideoContainer,
  VideoComponent1,
  IndividualContianer,
  ImageComponent,
  VideoComponent2,
  VideoComponent3,
  ImageComponent1,
  IndividualContianer1,
  IndividualContianer2,
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
        <VideoComponent1 autoPlay loop controlsList="nodownload">
          <source
            src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1724824276/packing2_lyinpp.mp4"
            type="video/mp4"
          />
        </VideoComponent1>
        <ImageComponent
          alt="shopify"
          src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1724827627/shopify-image1_n7tocu.webp"
        />
      </IndividualContianer>
      <IndividualContianer1>
        <VideoComponent2 autoPlay loop>
          <source
            src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1724824426/introduction_uehcop.mp4"
            type="video/mp4"
          />
        </VideoComponent2>
        <ImageComponent1
          alt="shopify"
          src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1724839989/greeting-shopify_dun3cm.webp"
        />
      </IndividualContianer1>
      <IndividualContianer2>
        <VideoComponent3 autoPlay loop>
          <source
            src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1724824466/file_seeing_veru3f.mp4"
            type="video/mp4"
          />
        </VideoComponent3>
        <VideoComponent3>
          <source
            src="https://res.cloudinary.com/dxa4rbmrj/video/upload/v1724824295/unpacking_ucuhst.mp4"
            type="video/mp4"
          />
        </VideoComponent3>
      </IndividualContianer2>
    </VideoContainer>
  </Section>
);

export default LastPage;
