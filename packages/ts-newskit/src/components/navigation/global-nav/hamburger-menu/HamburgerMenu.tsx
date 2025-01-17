import React, { useState } from 'react';
import { MenuDivider, Block, Visible, TextBlock } from 'newskit';
import NavigationList from './NavigationList';
import { HamburgerMenuNav } from '../styles';
import { NavigationData } from '../types';
import NavSearch from '../search';
import NavButtonSection from './NavButtons';

export const HamburgerMenu: React.FC<{
  isLoggedIn?: boolean;
  data: NavigationData;
}> = ({ isLoggedIn, data }) => {
  const mainNavigation = 'Sections';

  const [expandedL1, setExpandedL1] = useState<string>('');
  const [selected, setSelected] = useState(mainNavigation);

  return (
    <HamburgerMenuNav
      aria-label="menu-vertical"
      vertical
      align="spaceBetween"
      overrides={{ spaceInline: 'space000' }}
    >
      <Visible xs sm>
        <Block
          paddingInline="space040"
          marginBlock="space040"
          role="region"
          aria-label="Search Bar"
        >
          <NavSearch isHamburger />
        </Block>
        {isLoggedIn && (
          <NavButtonSection setSelected={setSelected} selected={selected} />
        )}
      </Visible>
      <NavigationList
        data={
          selected === mainNavigation
            ? data.mainMenuItems
            : data.accountMenuItems
        }
        onExpand={setExpandedL1}
        expandedL1={expandedL1}
      />
      {selected === mainNavigation ? (
        <>
          <Block
            stylePreset="blockWrapper"
            paddingInline="space040"
            paddingBlock="space040"
          >
            <TextBlock typographyPreset="newPreset010">More</TextBlock>
          </Block>
          <MenuDivider />
          <NavigationList data={data.moreMenuItems} />
        </>
      ) : null}
    </HamburgerMenuNav>
  );
};

export default HamburgerMenu;
