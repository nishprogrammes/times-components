import React, { FC } from 'react';
import { Block, GridLayoutItem, TextBlock } from 'newskit';
import {
  BreakoutSectionContainer,
  BreakoutSectionGridLayout,
  BreakoutSectionLink,
  StyledSudokuIconA4,
  StyledSudokuIconD2,
  StyledSudokuIconD4
} from './styles';
import { StyledNewskitWaveBg } from '../personal-stats/styles';
import { breakoutItems } from './fixtures/breakoutItems.json';

export const BreakoutSection: FC = () => {
  return (
    <Block as="section">
      <BreakoutSectionContainer
        flow="vertical-center"
        paddingBlock="space070"
        paddingInline={{ xs: 'space045', md: 'space050' }}
      >
        <TextBlock
          as="h2"
          typographyPreset="editorialDisplay004"
          stylePreset="puzzlesCenterAlignedText"
        >
          Add a challenge to your day
        </TextBlock>
        <TextBlock
          as="p"
          typographyPreset="editorialParagraph020"
          marginBlockStart="space045"
          stylePreset="puzzlesCenterAlignedText"
        >
          Play exclusive Word puzzles, Number puzzles, Quizzes and more
        </TextBlock>
        <BreakoutSectionGridLayout
          columns={{ sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          rowGap="space050"
          columnGap="space050"
          overrides={{
            marginBlockStart: { xs: 'space070', sm: 'space080' },
            width: '100%',
            maxWidth: '1272px'
          }}
        >
          <StyledSudokuIconD2 />
          <StyledSudokuIconA4 />
          {breakoutItems.map(({ id, title, url }) => (
            <GridLayoutItem key={id} id={id}>
              <BreakoutSectionLink
                overrides={{
                  stylePreset: 'puzzlesShadowBtn',
                  typographyPreset: 'utilityButton020'
                }}
                href={url}
              >
                {title}
              </BreakoutSectionLink>
            </GridLayoutItem>
          ))}
        </BreakoutSectionGridLayout>
        <StyledSudokuIconD4 />
      </BreakoutSectionContainer>
      <StyledNewskitWaveBg overrides={{ marginBlockStart: '-1px' }} />
    </Block>
  );
};
