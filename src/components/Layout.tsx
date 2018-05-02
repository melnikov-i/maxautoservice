import * as React from 'react';
import { injectGlobal } from 'styled-components';

import {
  PageDataInterface,
} from '@src/interfaces';

import {
  CommonPrice
} from '@src/data';

import ProfitConnected from '@src/connected/ProfitConnected.usage';
import HeadConnected from '@src/connected/HeadConnected.usage';
import PriceConnected from '@src/connected/PriceConnected.usage';
import BeltConnected from '@src/connected/BeltConnected.usage';

import {
  LayoutWrapper,
  LayoutTopWrapper,
  LayoutTop,
  LayoutTopLogo,
  LayoutTopLogoName,
  LayoutTopLogoNameSpan,
  LayoutTopLogoDescription,
  LayoutTopMiddle,
  LayoutTopLinksWrapper,
  LayoutTopLink,
  LayoutTopPhoneNumber,
  LayoutHead,
  LayoutContent,
  LayoutDescriptionText,
  LayoutDesctiptionList,
  LayoutDescriptionListItem,
  LayoutDescriptionListImage,
  LayoutDescriptionListItemText,
  LayoutDescriptionListItemHeader,
  LayoutDecriptionListItemSpan,
  LayoutInviteToCall,
  LayoutInviteToCallSpan,
  LayoutContactsWrapper,
  LayoutContactsAddressWrapper,
  LayoutContactsAddress,
  LayoutContactsPhone,
  LayoutContactsMapWrapper,
  LayoutScreenWrapper,
  LayoutItemWrapper,
  LayoutScreenHeader,
  LayoutFooter,
  YELLOW_COLOR,
  PriceTable,
  PriceTableRow,
  PriceTableColl,
} from '@src/styled';

const FontAwesomeEOT = require('@src/fonts/fontawesome-webfont.eot');
const FontAwesomeWOFF2 = require('@src/fonts/fontawesome-webfont.woff2');
const FontAwesomeWOFF = require('@src/fonts/fontawesome-webfont.woff');
const FontAwesomeTTF = require('@src/fonts/fontawesome-webfont.ttf');
const FontAwesomeSVG = require('@src/fonts/fontawesome-webfont.svg');

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-size: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #000;
    &::selection {
      background-color: ${YELLOW_COLOR};
    }
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #fff;
  }

  #app {
    width: 100%;
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url('${FontAwesomeEOT}?v=4.7.0');
    src: url('${FontAwesomeEOT}?#iefix&v=4.7.0') format('embedded-opentype'), 
         url('${FontAwesomeWOFF2}?v=4.7.0') format('woff2'), 
         url('${FontAwesomeTTF}?v=4.7.0') format('truetype'), 
         url('${FontAwesomeWOFF}?v=4.7.0') format('woff'), 
         url('${FontAwesomeSVG}?v=4.7.0#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;

interface LayoutProps {
  PageData: PageDataInterface
}

export const Layout: React.SFC<LayoutProps> = (props) => {
  const { PageData } = props;
  return (
    <LayoutWrapper>
      <LayoutTopWrapper>
        <LayoutTop>
          <LayoutTopLogo>
            <LayoutTopLogoName>
              <LayoutTopLogoNameSpan>
                {PageData.logo.yellow}
              </LayoutTopLogoNameSpan>
              {PageData.logo.black}
            </LayoutTopLogoName>
            <LayoutTopLogoDescription>
              {PageData.logo.header}
            </LayoutTopLogoDescription>
          </LayoutTopLogo>
          <LayoutTopMiddle>
            <LayoutTopLinksWrapper>
              <LayoutTopLink 
              icon={'f189'}
              href={'https://vk.com/maxavtoservice'}
              title={'Подписчикам нашей группы скидка 5%'}
              target={'_blank'} />
              <LayoutTopLink
              icon={'f25b'}
              href={'http://www.club-renault.ru/forum/forum/217-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B9-prima/'}
              title={'Партнёры club-renault'}
              target={'_blank'} />
              <LayoutTopLink
              icon={'f013'}
              href={'http://prima.parts/'}
              title={'Магазин запасных частей'}
              target={'_blank'} />
            </LayoutTopLinksWrapper>
            <LayoutTopPhoneNumber>
              { PageData.phone }
            </LayoutTopPhoneNumber>
          </LayoutTopMiddle>

        </LayoutTop>
      </LayoutTopWrapper>
      <LayoutHead>
        <HeadConnected />
      </LayoutHead>      
      <LayoutContent>
        <LayoutScreenWrapper>
          <LayoutItemWrapper>
            <LayoutScreenHeader>
              {PageData.profitHeader}
            </LayoutScreenHeader>
      {
        PageData.profit.map((e, i) => {
          return (
            <ProfitConnected key={i} profit={e} />
          )
        })
      }     
          </LayoutItemWrapper>
        </LayoutScreenWrapper>
        <LayoutItemWrapper>
          <LayoutScreenHeader>
            { PageData.description.header }
          </LayoutScreenHeader>
      {
        PageData.description.text.map((e, i) => {
          return (
            <LayoutDescriptionText key={i}>
              {e}
            </LayoutDescriptionText>
          );
        })
      }
          <LayoutDesctiptionList>
      {
        PageData.description.list.map((e, i) => {
          return (
            <LayoutDescriptionListItem key={i}>
              <LayoutDescriptionListImage
              src={e.image} />
              <LayoutDescriptionListItemText>
                <LayoutDescriptionListItemHeader>
                  {e.header}
                </LayoutDescriptionListItemHeader>
                <LayoutDecriptionListItemSpan>
                  {e.text}
                </LayoutDecriptionListItemSpan>                
              </LayoutDescriptionListItemText>
            </LayoutDescriptionListItem>

          );
        })
      }
          </LayoutDesctiptionList>
          <LayoutScreenHeader>
            {PageData.priceHeader}
          </LayoutScreenHeader>
          <PriceConnected />
          <LayoutScreenHeader>
            {PageData.beltHeader}
          </LayoutScreenHeader>
          <BeltConnected />
          <LayoutScreenHeader>
            {PageData.otherHeader}
          </LayoutScreenHeader>
          <PriceTable>
            <tbody>
              {CommonPrice.map((e, i) => (
                <PriceTableRow key={i}>
                  <PriceTableColl>
                    {e.desctription}
                  </PriceTableColl>
                  <PriceTableColl>
                    {e.value}
                  </PriceTableColl>
                </PriceTableRow>
              ))}
            </tbody>
          </PriceTable>
          <LayoutInviteToCall>
            { PageData.description.inviteToCall }
          </LayoutInviteToCall>
          <LayoutInviteToCall>
            <LayoutInviteToCallSpan>
              { PageData.phone }              
            </LayoutInviteToCallSpan>
          </LayoutInviteToCall>
        </LayoutItemWrapper>
        <LayoutScreenWrapper>
          <LayoutItemWrapper>
            <LayoutScreenHeader>
              {PageData.address.header}
            </LayoutScreenHeader>
            <LayoutContactsWrapper>
              <LayoutContactsAddressWrapper>                
                <LayoutContactsAddress
                icon={PageData.address.addressIcon}>
                  {PageData.address.address}
                </LayoutContactsAddress>                
                <LayoutContactsAddress
                icon={PageData.address.scheduleIcon}>
                  {PageData.address.schedule}
                </LayoutContactsAddress>                
                <LayoutContactsPhone
                icon={PageData.address.phoneIcon}>
                  {PageData.phone}
                </LayoutContactsPhone>              
              </LayoutContactsAddressWrapper>
              <LayoutContactsMapWrapper>
                <iframe
                src={'https://yandex.ru/map-widget/v1/?um=constructor%3Afa6fe2de53ce9d5d02bcd8db89a5e327949081ee92e65c8f9605bea41014f701&amp;source=constructor'} 
                width={'100%'}
                height={'425'}></iframe>
              </LayoutContactsMapWrapper>            
            </LayoutContactsWrapper>
          </LayoutItemWrapper>
        </LayoutScreenWrapper>
        <LayoutFooter>
          
        </LayoutFooter>
      </LayoutContent>
    </LayoutWrapper>
  );
};
