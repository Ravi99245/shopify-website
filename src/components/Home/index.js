import Header from "../Header";
import SecondPage from "../SecondPage/index";
import ThirdPage from "../ThirdPage/index";
import FourthPage from "../FouthPage/index";
import FifthPage from "../FifthPage/index";
import VideoPage from "../VideoPage/index";
import VideoPage2 from "../VideoPage2/index";
import { FaPlay } from "react-icons/fa";

import {
  Section,
  Picture,
  Overlay,
  Heading,
  Container,
  Paragraph,
  FreeTrail,
  FreeTrailContainer,
  Trail,
  BottomContainer,
  StoryContainer,
  PlayContianer,
  DetaialsContainer,
  ThirdPageContainer,
  FourthPageContainer,
  SixthPageContainer,
  SeventhPageContainer,
  MarqueeContainer,
  MarqueeText,
  Arrow1,
  AnchorElement,
} from "./styledComponent";

const Home = () => (
  <div>
    <Section>
      <Header />
      <Picture>
        <source
          media="(max-width: 480px) and (orientation: portrait) and (prefers-reduced-motion: no-preference)"
          type="video/mp4; codecs=hvc1"
          srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/488d6fb493040e46e45a1dcb7e899e79.mp4"
        />
        <source
          media="(min-width: 481px) and (-webkit-min-device-pixel-ratio: 1) and (prefers-reduced-motion: no-preference)"
          type="video/mp4; codecs=hvc1"
          srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/033212561ae4fd44e663bcf0c28aa6fb.mp4"
        />
        <source
          media="(max-width: 480px) and (prefers-reduced-motion: no-preference)"
          type="image/avif"
          srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/82e5b0282bfbefccfd6579c35ee212f3.avif"
        />
        <source
          media="(min-width: 481px) and (prefers-reduced-motion: no-preference)"
          type="image/avif"
          srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/288aa2d76b4e7aaff082af1eb4279091.avif"
        />
        <img
          src="https://cdn.shopify.com/b/shopify-brochure2-assets/339113bc828c2c7ab760a434e1703b93.webp?originalWidth=3840&originalHeight=2160&width=1920&height=1080"
          alt=""
          loading="lazy"
        />
      </Picture>
      <Overlay />
      <Container>
        <DetaialsContainer>
          <Heading>Making Commerce Better for Everyone</Heading>
          <Paragraph>
            Shopify is supporting the next generation of entreprenures, the
            world biggest brands, and every one in between
          </Paragraph>
        </DetaialsContainer>
        <BottomContainer>
          <FreeTrailContainer>
            <FreeTrail href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types[]=paid_trial_experience">
              Start Free Trail
            </FreeTrail>
            <Trail>Get 3 days free then 1 month for ₹20.</Trail>
          </FreeTrailContainer>
          <StoryContainer>
            <PlayContianer href="#/modal/video">
              <FaPlay style={{ marginRight: "10px" }} />
              Watch ths Shopify story
            </PlayContianer>
          </StoryContainer>
        </BottomContainer>
      </Container>
    </Section>
    <div>
      <SecondPage />
    </div>
    <ThirdPageContainer>
      <ThirdPage />
    </ThirdPageContainer>
    <FourthPageContainer>
      <FourthPage />
    </FourthPageContainer>
    <FourthPageContainer>
      <FifthPage />
    </FourthPageContainer>
    <SixthPageContainer>
      <VideoPage />
    </SixthPageContainer>
    <SeventhPageContainer>
      <VideoPage2 />
    </SeventhPageContainer>
    <MarqueeContainer>
      <MarqueeText>
        <AnchorElement href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=gmv_rw_myub&_y=73f7b28b-a67c-455f-9efc-e50fd0e351b7&_s=db1580f8-4380-4759-9f74-524131967e96&_p=d2c0f2b1-08ac-4132-ab86-16aced039387">
          START YOUR FREE STYLE <Arrow1 />
        </AnchorElement>
        <AnchorElement href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=gmv_rw_myub&_y=73f7b28b-a67c-455f-9efc-e50fd0e351b7&_s=db1580f8-4380-4759-9f74-524131967e96&_p=d2c0f2b1-08ac-4132-ab86-16aced039387">
          START YOUR FREE STYLE <Arrow1 />
        </AnchorElement>
        <AnchorElement href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=gmv_rw_myub&_y=73f7b28b-a67c-455f-9efc-e50fd0e351b7&_s=db1580f8-4380-4759-9f74-524131967e96&_p=d2c0f2b1-08ac-4132-ab86-16aced039387">
          START YOUR FREE STYLE <Arrow1 />
        </AnchorElement>
        <AnchorElement href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=gmv_rw_myub&_y=73f7b28b-a67c-455f-9efc-e50fd0e351b7&_s=db1580f8-4380-4759-9f74-524131967e96&_p=d2c0f2b1-08ac-4132-ab86-16aced039387">
          START YOUR FREE STYLE <Arrow1 />
        </AnchorElement>
        <AnchorElement href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=gmv_rw_myub&_y=73f7b28b-a67c-455f-9efc-e50fd0e351b7&_s=db1580f8-4380-4759-9f74-524131967e96&_p=d2c0f2b1-08ac-4132-ab86-16aced039387">
          START YOUR FREE STYLE <Arrow1 />
        </AnchorElement>
        <AnchorElement href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=gmv_rw_myub&_y=73f7b28b-a67c-455f-9efc-e50fd0e351b7&_s=db1580f8-4380-4759-9f74-524131967e96&_p=d2c0f2b1-08ac-4132-ab86-16aced039387">
          START YOUR FREE STYLE <Arrow1 />
        </AnchorElement>
        <AnchorElement href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=gmv_rw_myub&_y=73f7b28b-a67c-455f-9efc-e50fd0e351b7&_s=db1580f8-4380-4759-9f74-524131967e96&_p=d2c0f2b1-08ac-4132-ab86-16aced039387">
          START YOUR FREE STYLE <Arrow1 />
        </AnchorElement>
        <AnchorElement href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=gmv_rw_myub&_y=73f7b28b-a67c-455f-9efc-e50fd0e351b7&_s=db1580f8-4380-4759-9f74-524131967e96&_p=d2c0f2b1-08ac-4132-ab86-16aced039387">
          START YOUR FREE STYLE <Arrow1 />
        </AnchorElement>
      </MarqueeText>
    </MarqueeContainer>
  </div>
);

export default Home;
