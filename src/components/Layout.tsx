import * as React from 'react';
import { injectGlobal } from 'styled-components';

import {
  PageDataInterface,
} from '@src/interfaces';

import ProfitConnected from '@src/connected/ProfitConnected.usage';
import HeadConnected from '@src/connected/HeadConnected.usage';
import TOCalculatorConnected from '@src/connected/TOCalculatorConnected.usage';

import {
  LayoutWrapper,
  LayoutTopWrapper,
  LayoutTop,

  LayoutTopLogo,
  LayoutTopLogoName,
  LayoutTopLogoNameSpan,
  LayoutTopLogoDescription,
  LayoutTopPhone,
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

  LayoutContactsWrapper,
  LayoutContactsAddressWrapper,
  LayoutContactsAddress,
  LayoutContactsPhone,
  LayoutContactsMapWrapper,

  // LayoutTOSet,
  // LayoutPhotoGallery,
  // LayoutWarranty,
  // LayoutCallToAction,
  
  LayoutScreenWrapper,
  LayoutItemWrapper,
  LayoutScreenHeader,

  LayoutFooter,

  YELLOW_COLOR
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
  // console.log(PageData);


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
          <LayoutTopPhone>
            <LayoutTopPhoneNumber>
              {PageData.phone}
            </LayoutTopPhoneNumber>
          </LayoutTopPhone>
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
          <LayoutDescriptionText>
            { PageData.description.text[0] }
          </LayoutDescriptionText>
          <LayoutDescriptionText>
            { PageData.description.text[1] }
          </LayoutDescriptionText>
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
        </LayoutItemWrapper>
        <LayoutItemWrapper>
          <TOCalculatorConnected />
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
                // <span className={'ymaps-geolink'}>
                // </span>
        // <LayoutTOSet>
        //   {'Комплекты ТО'}
        // </LayoutTOSet>
        // <LayoutPhotoGallery>
        //   {'Галерея выполненных работ'}
        // </LayoutPhotoGallery>
        // <LayoutWarranty>
        //   {'Гарантия'}
        // </LayoutWarranty>

