import { useState } from "react";
import {
  Section,
  HeadingContianer,
  Paragraph,
  Heading,
  AnchorContainer,
  BlogContainer,
  BlogIcon,
  BlogIconContianer,
  BlogHeading,
  BlogParagraph,
  Button,
  Right,
  BookIcon,
  BlogIconContianer1,
  PeopleIcaon,
  BlogIconContianer2,
  HelpIcon,
  BlogIconContianer3,
} from "./styledComponent";

const BlogSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Section>
      <HeadingContianer>
        <Paragraph>SHOPIFY SUPPORT</Paragraph>
        <Heading>
          The help you need,
          <br /> when you need it
        </Heading>
      </HeadingContianer>
      <BlogContainer>
        <AnchorContainer
          key="1"
          href="https://www.shopify.com/blog"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BlogIconContianer>
            <BlogIcon />
          </BlogIconContianer>
          <BlogHeading>Blog</BlogHeading>
          <BlogParagraph>
            Get all the Marketing and business strategy tips you need to help
            you run an online business.
          </BlogParagraph>
          <Button type="button" isHovered={isHovered}>
            Read <Right isHovered={isHovered} />
          </Button>
        </AnchorContainer>
        <AnchorContainer
          href="https://www.shopify.com/learn"
          target="_blank"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BlogIconContianer1>
            <BookIcon />
          </BlogIconContianer1>
          <BlogHeading>Online Courses</BlogHeading>
          <BlogParagraph>
            Learn tried-and-tested business tips with instant access to lessons
            from successful entrepreneurs.
          </BlogParagraph>
          <Button type="button" isHovered={isHovered}>
            Learn <Right isHovered={isHovered} />
          </Button>
        </AnchorContainer>
        <AnchorContainer
          href="https://www.shopify.com/blog"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BlogIconContianer2>
            <PeopleIcaon />
          </BlogIconContianer2>
          <BlogHeading>Commnity</BlogHeading>
          <BlogParagraph>
            Connect with community of brands, partners, and fellow merchants who
            understand shopify.
          </BlogParagraph>
          <Button type="button" isHovered={isHovered}>
            Discuss <Right isHovered={isHovered} />
          </Button>
        </AnchorContainer>
        <AnchorContainer
          href="https://www.shopify.com/blog"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BlogIconContianer3>
            <HelpIcon />
          </BlogIconContianer3>
          <BlogHeading>Help Center</BlogHeading>
          <BlogParagraph>
            Find answers with dedicated helpdesk resource full of articles adn
            videosfrom our support team.
          </BlogParagraph>
          <Button type="button" isHovered={isHovered}>
            Get help <Right isHovered={isHovered} />
          </Button>
        </AnchorContainer>
      </BlogContainer>
    </Section>
  );
};

export default BlogSection;
