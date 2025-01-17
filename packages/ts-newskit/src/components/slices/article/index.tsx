import React from 'react';
import {
  Divider,
  CardContent,
  Block,
  TextBlock,
  CardComposable,
  CardMedia,
  GridLayoutItem
} from 'newskit';
import {
  CardHeadlineLink,
  FullWidthCardMediaMob,
  FullWidthBlock
} from '../shared-styles';
import { TagAndFlag } from '../shared/tag-and-flag';

type ImageProps = {
  src: string;
  alt?: string;
  credit?: string;
};

export interface ArticleProps {
  title: string;
  url: string;
  image?: ImageProps;
  tag?: {
    label: string;
    href: string;
  };
  flag?: string;
  hasTopBorder?: boolean;
  hideImage?: boolean;
  isLeadImage?: boolean;
  imageRight?: boolean;
  isFullWidth?: boolean;
  articleTitleMarginTop?: string;
  titleTypographyPreset?: string;
  tagAndFlagMarginBlockStart?: string;
}

type LayoutProps = {
  imageRight: boolean;
};

export const Article = ({
  image,
  title,
  url,
  tag,
  flag,
  hasTopBorder,
  hideImage,
  isLeadImage,
  imageRight,
  isFullWidth,
  articleTitleMarginTop = 'space040',
  titleTypographyPreset = 'editorialHeadline020',
  tagAndFlagMarginBlockStart = 'space040'
}: ArticleProps) => {
  const cardImage = !hideImage &&
    image && {
      media: {
        src: image.src,
        alt: image.alt || title,
        loadingAspectRatio: '3:2'
      }
    };

  const CardMediaComponent = isLeadImage ? FullWidthCardMediaMob : CardMedia;
  const titleMarginBlockStart =
    imageRight || hideImage ? 'space000' : articleTitleMarginTop;

  const hasImage = image && image.src !== '';

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return imageRight ? <Block>{children}</Block> : <>{children}</>;
  };

  return (
    <CardComposable
      alignContent="start"
      areas={
        imageRight
          ? `
          border  border
          content media`
          : `border
         media
         content
        `
      }
      columns={{ xl: imageRight ? '1fr 1fr' : '1fr' }}
      columnGap="space040"
    >
      {hasTopBorder && (
        <GridLayoutItem area="border">
          {isFullWidth ? (
            <FullWidthBlock>
              <Divider
                overrides={{
                  marginBlockEnd: 'space040',
                  stylePreset: 'dashedDivider'
                }}
              />
            </FullWidthBlock>
          ) : (
            <Divider
              overrides={{
                marginBlockEnd: 'space040',
                stylePreset: 'dashedDivider'
              }}
            />
          )}
        </GridLayoutItem>
      )}

      {hasImage && !hideImage && <CardMediaComponent {...cardImage} />}
      <CardContent>
        {image &&
          !imageRight &&
          image.credit &&
          !hideImage && (
            <TextBlock
              marginBlockStart="space020"
              stylePreset="inkSubtle"
              typographyPreset="utilityMeta010"
            >
              {image.credit}
            </TextBlock>
          )}
        <Layout imageRight={imageRight || false}>
          <CardHeadlineLink
            href={url}
            role="link"
            overrides={{
              typographyPreset: titleTypographyPreset,
              marginBlockStart: titleMarginBlockStart
            }}
          >
            {title}
          </CardHeadlineLink>
          <TagAndFlag
            tag={tag}
            flag={flag}
            marginBlockStart={tagAndFlagMarginBlockStart}
          />
        </Layout>
      </CardContent>
    </CardComposable>
  );
};
