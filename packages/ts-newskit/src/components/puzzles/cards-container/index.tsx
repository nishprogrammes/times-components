import React, { useRef } from 'react';
import { GridLayout, getSSRId, Scroll, GridLayoutItem } from 'newskit';
import { Puzzle } from '../archive/types';
import { StyledTitleBar } from './styles';
import { ScrollControls } from './ScrollControls';
import { PuzzleCard } from '../puzzle-card';

interface CardsContainerProps {
  cards: Puzzle[];
  title?: string;
  isScrollable?: boolean;
  seeAllLink?: string;
  isImageCropped?: boolean;
}

export const CardsContainer = ({
  cards,
  title,
  isScrollable = false,
  seeAllLink,
  isImageCropped = false
}: CardsContainerProps) => {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  return (
    <>
      <StyledTitleBar
        headingAs="h2"
        overrides={{
          paddingBlock: {
            xs: 'space040',
            lg: 'space050'
          },
          paddingInline: 'space000',
          heading: {
            typographyPreset: {
              xs: 'editorialDisplay002',
              md: 'editorialDisplay003',
              lg: 'editorialDisplay004'
            },
            stylePreset: 'inkBrand010'
          }
        }}
        actionItem={() =>
          isScrollable && cards.length > 4 ? (
            <ScrollControls
              scrollRef={scrollRef}
              seeAllLink={seeAllLink}
              cardRef={cardRef}
            />
          ) : null
        }
        hideActionItemOn={{
          xs: true,
          sm: true
        }}
        data-testid="title-bar"
      >
        {title}
      </StyledTitleBar>
      <Scroll
        ref={scrollRef}
        overrides={{
          overlays: { stylePreset: '__delete' }
        }}
        data-testid="scroll-container"
      >
        <GridLayout
          columns={
            !isScrollable
              ? {
                  xs: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)'
                }
              : undefined
          }
          autoFlow={isScrollable ? 'column' : undefined}
          autoColumns={
            isScrollable ? { xs: '154px', lg: '218px', xl: '293px' } : undefined
          }
          columnGap={{
            xs: isScrollable ? 'space030' : 'space050',
            md: 'space060'
          }}
          rowGap={{
            xs: 'space060',
            md: 'space070'
          }}
        >
          {' '}
          {cards.map(card => (
            <GridLayoutItem
              key={getSSRId()}
              data-test-id="single-card"
              ref={cardRef}
            >
              <PuzzleCard data={card} isImageCropped={isImageCropped} />
            </GridLayoutItem>
          ))}
        </GridLayout>
      </Scroll>
    </>
  );
};
