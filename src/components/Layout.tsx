import * as React from 'react';
import { injectGlobal } from 'styled-components';

import {
  LayoutWrapper,
  LayoutTop,
  LayoutTopLogo,
  LayoutTopLogoName,
  LayoutTopLogoNameSpan,
  LayoutTopLogoDescription,
  LayoutTopPhone,
  LayoutTopPhoneNumber,
  LayoutHeader,
  LayoutContent,
  LayoutProfit,
  LayoutDescription,
  LayoutTOSet,
  LayoutPhotoGallery,
  LayoutWarranty,
  LayoutContacts,
  LayoutCallToAction
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
    --font-size: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
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
  Hello: string,
}

export const Layout: React.SFC<LayoutProps> = (props) => {
  const { Hello } = props;
  console.log(Hello);
  return (
    <LayoutWrapper>
      <LayoutTop>
        <LayoutTopLogo>
          <LayoutTopLogoName>
            <LayoutTopLogoNameSpan>
              {'MAX'}
            </LayoutTopLogoNameSpan>
            {'AUTO'}
          </LayoutTopLogoName>
          <LayoutTopLogoDescription>
            {'Ваш проводник в мире Renault'}
          </LayoutTopLogoDescription>
        </LayoutTopLogo>
        <LayoutTopPhone>
          <LayoutTopPhoneNumber>
            {'+7 (952) 277-7763'}            
          </LayoutTopPhoneNumber>
        </LayoutTopPhone>
      </LayoutTop>
      <LayoutHeader>
        {'Идентификация'}
      </LayoutHeader>
      <LayoutContent>
        <LayoutProfit>
          {'Выгоды'}
        </LayoutProfit>
        <LayoutDescription>
          {'Описание продукта (или услуги)'}
        </LayoutDescription>
        <LayoutTOSet>
          {'Комплекты ТО'}
        </LayoutTOSet>
        <LayoutPhotoGallery>
          {'Галерея выполненных работ'}
        </LayoutPhotoGallery>
        <LayoutWarranty>
          {'Гарантия'}
        </LayoutWarranty>
        <LayoutContacts>
          {'Контакты и телефоны'}
        </LayoutContacts>
        <LayoutCallToAction>
          {'Призыв к действию'}
        </LayoutCallToAction>        
      </LayoutContent>
    </LayoutWrapper>
  );
}