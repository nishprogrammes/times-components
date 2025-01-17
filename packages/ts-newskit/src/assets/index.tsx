import React from 'react';
import { customToNewsKitIcon, styled } from 'newskit';
import EastArrow from './EastArrow';
import SeeAllLeft from './SeeAllLeft';
import SeeAllRight from './SeeAllRight';
import SearchIcon from './SearchIcon';
import BurgerIcon from './BurgerIcon';
import RoundedPlusIcon from './RoundedPlusIcon';
import CloseIcon from './CloseIcon';
import ChevronIcon from './ChevronIcon';
import TimesMasthead from './TimesMasthead';
import SundayTimesMasthead from './SundayTimesMasthead';
import ChevronRightIcon from './ChevronRightIcon';
import ArticlePlaceholder from './ArticlePlaceholder';
import WaveBg from './WaveBg';
import ThumbsDownIcon from './ThumbsDown';
import ThumbsUpIcon from './ThumbsUp';
import TooltipIcon from './TooltipIcon';
import FilledArrowIcon from './FilledArrowIcon';

const RoundedCloseIcon = styled(RoundedPlusIcon)`
  transform: rotate(45deg);
`;

const FilledArrowIconDown = styled(FilledArrowIcon)`
  transform: rotate(180deg);
`;

export const NewsKitSearchIcon = customToNewsKitIcon(
  'NewskitSearchIcon',
  props => <SearchIcon {...props} />
);

export const NewsKitBurgerIcon = customToNewsKitIcon('NewsKitBurger', props => (
  <BurgerIcon {...props} />
));

export const NewsKitRoundedCloseIcon = customToNewsKitIcon(
  'NewsKitRoundedCloseIcon',
  props => <RoundedCloseIcon {...props} />
);

export const NewsKitCloseIcon = customToNewsKitIcon(
  'NewsKitCloseIcon',
  props => <CloseIcon {...props} />
);

export const NewsKitChevronIcon = customToNewsKitIcon(
  'NewsKitChevronIcon',
  props => <ChevronIcon {...props} />
);

export const NewsKitTimesMasthead = customToNewsKitIcon(
  'NewskitTimesMasthead',
  props => <TimesMasthead {...props} />
);

export const NewsKitSundayTimesMasthead = customToNewsKitIcon(
  'NewskitSundayTimesMasthead',
  props => <SundayTimesMasthead {...props} />
);

export const NewsKitChevronRightIcon = customToNewsKitIcon(
  'NewsKitChevronRightIcon',
  props => <ChevronRightIcon {...props} />
);

export const NewsKitArticlePlaceholder = customToNewsKitIcon(
  'NewsKitArticlePlaceholder',
  props => <ArticlePlaceholder {...props} />
);
export const NewsKitWaveBg = customToNewsKitIcon('NewskitWaveBg', props => (
  <WaveBg {...props} />
));

export const NewskitIconEast = customToNewsKitIcon('NewskitIconEast', props => (
  <EastArrow {...props} />
));

export const NewskitIconBack = customToNewsKitIcon('NewskitIconBack', props => (
  <SeeAllLeft {...props} />
));

export const NewskitIconForward = customToNewsKitIcon(
  'NewskitIconForward',
  props => <SeeAllRight {...props} />
);

export const NewsKitThumbsDownIcon = customToNewsKitIcon(
  'NewsKitThumbsDownIcon',
  props => <ThumbsDownIcon {...props} />
);

export const NewsKitThumbsUpIcon = customToNewsKitIcon(
  'NewsKitThumbsUpIcon',
  props => <ThumbsUpIcon {...props} />
);

export const NewsKitTooltipIcon = customToNewsKitIcon(
  'NewsKitTooltipIcon',
  props => <TooltipIcon {...props} />
);

export const NewsKitFilledArrowIcon = customToNewsKitIcon(
  'NewsKitFilledArrowIcon',
  props => <FilledArrowIcon {...props} />
);

export const NewsKitFilledArrowIconDown = customToNewsKitIcon(
  'NewsKitFilledArrowIconDown',
  props => <FilledArrowIconDown {...props} />
);
