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
  LayoutHead,
  LayoutContent,
  LayoutProfit,
  LayoutDescription,
  LayoutTOSet,
  LayoutPhotoGallery,
  LayoutWarranty,
  LayoutContacts,
  LayoutCallToAction,
  LayoutScreenHeader,
  LayoutScreenHeaderSpan,
  LayoutProfitList,
  LayoutProfitListItem,
  LayoutProfitListItemSpan,
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
    font-family: 'PT Sans', sans-serif;
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
      <LayoutHead>
        {'Идентификация'}
      </LayoutHead>
      <LayoutContent>
        <LayoutProfit>
          <LayoutScreenHeader>
            <LayoutScreenHeaderSpan>
              {'MAX'}              
            </LayoutScreenHeaderSpan>
            {'AUTO - сервис без хлопот'}
          </LayoutScreenHeader>
          <LayoutProfitList>
            <LayoutProfitListItem>
              <LayoutProfitListItemSpan>
                {'Профессиональный подход:'}
              </LayoutProfitListItemSpan>
              <LayoutProfitListItemSpan>
                {'Обслуживание автомобилей наших клиентов выполняется профессионалами высокого уровня. За плечами большинства наших специалистов многолетний опыт работы в этой области, в том числе и на СТО официального дилера.'}
              </LayoutProfitListItemSpan>
            </LayoutProfitListItem>
          </LayoutProfitList>
          <LayoutProfitList>
            <LayoutProfitListItem>
              <LayoutProfitListItemSpan>
                {'Разумная цена:'}
              </LayoutProfitListItemSpan>
              <LayoutProfitListItemSpan>
                {'Стоимость выполненных работ и запасных частей значительно ниже, чем у официалов.'}
              </LayoutProfitListItemSpan>
            </LayoutProfitListItem>
          </LayoutProfitList>
          <LayoutProfitList>
            <LayoutProfitListItem>
              <LayoutProfitListItemSpan>
                {'Все в наличии:'}
              </LayoutProfitListItemSpan>
              <LayoutProfitListItemSpan>
                
              </LayoutProfitListItemSpan>
            </LayoutProfitListItem>
          </LayoutProfitList>
          <LayoutProfitList>
            <LayoutProfitListItem>
              <LayoutProfitListItemSpan>
                {'Точная диагностика:'}
              </LayoutProfitListItemSpan>
              <LayoutProfitListItemSpan>
                
              </LayoutProfitListItemSpan>
            </LayoutProfitListItem>
          </LayoutProfitList>
          <LayoutProfitList>
            <LayoutProfitListItem>
              <LayoutProfitListItemSpan>
                {'Приемлемые сроки:'}
              </LayoutProfitListItemSpan>
              <LayoutProfitListItemSpan>
                
              </LayoutProfitListItemSpan>
            </LayoutProfitListItem>
          </LayoutProfitList>
          <LayoutProfitList>
            <LayoutProfitListItem>
              <LayoutProfitListItemSpan>
                {'Прозрачно:'}
              </LayoutProfitListItemSpan>
              <LayoutProfitListItemSpan>
                
              </LayoutProfitListItemSpan>
            </LayoutProfitListItem>
          </LayoutProfitList>
          <LayoutProfitList>
            <LayoutProfitListItem>
              <LayoutProfitListItemSpan>
                {'Гарантия:'}
              </LayoutProfitListItemSpan>
              <LayoutProfitListItemSpan>
                
              </LayoutProfitListItemSpan>
            </LayoutProfitListItem>
          </LayoutProfitList>
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

