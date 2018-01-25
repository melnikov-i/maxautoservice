import * as React from 'react';
import { injectGlobal } from 'styled-components';

import {
  PageDataInterface,
} from '@src/interfaces';

import ProfitConnected from '@src/connected/ProfitConnected.usage';
import HeadConnected from '@src/connected/HeadConnected.usage';

import {
  LayoutWrapper,
  LayoutTop,

  LayoutTopLogo,
  LayoutTopLogoName,
  LayoutTopLogoNameSpan,
  LayoutTopLogoDescription,
  LayoutTopPhone,
  LayoutTopPhoneNumber,

  // LayoutHead,
  
  LayoutContent,
  LayoutProfit,
  LayoutDescription,
  LayoutTOSet,
  LayoutPhotoGallery,
  LayoutWarranty,
  LayoutContacts,
  LayoutCallToAction,
  
  LayoutScreenHeader,

  YELLOW_COLOR
  
  // LayoutScreenHeaderSpan,
  // LayoutProfitList,
  // LayoutProfitListItem,
  // LayoutProfitListItemSpan,
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
  console.log(PageData);


  return (
    <LayoutWrapper>
      <LayoutTop>
        <LayoutTopLogo>
          <LayoutTopLogoName>
            <LayoutTopLogoNameSpan>
              {PageData.logo.yellow}
            </LayoutTopLogoNameSpan>
            {PageData.logo.black}
          </LayoutTopLogoName>
          <LayoutTopLogoDescription>
            {PageData.profitHeader}
          </LayoutTopLogoDescription>
        </LayoutTopLogo>
        <LayoutTopPhone>
          <LayoutTopPhoneNumber>
            {PageData.phone}
          </LayoutTopPhoneNumber>
        </LayoutTopPhone>
      </LayoutTop>
      <HeadConnected head={PageData.head} />
      <LayoutContent>
        <LayoutProfit>
          <LayoutScreenHeader>
            {PageData.profitHeader}
          </LayoutScreenHeader>
    {
      PageData.profit.map((e, i) => {
        console.log(e);
        return (
          <ProfitConnected key={i} profit={e} />
        )
      })
    }
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
          // <LayoutProfitItem>
          //   <LayoutProfitItemIcon />
          //   <LayoutProfitItemHeader>
          //     {'Профессиональный подход'}
          //   </LayoutProfitItemHeader>
          //   <LayoutProfitItemText>
          //     {'Обслуживание автомобилей наших клиентов выполняется профессионалами высокого уровня. За плечами большинства наших специалистов многолетний опыт работы в этой области, в том числе и на СТО официального дилера.'}
          //   </LayoutProfitItemText>
          // </LayoutProfitItem>
          // <LayoutProfitItem>
          //   <LayoutProfitItemIcon />
          // </LayoutProfitItem>
          // <LayoutProfitItem>
          //   <LayoutProfitItemIcon />
          // </LayoutProfitItem>
          // <LayoutProfitItem>
          //   <LayoutProfitItemIcon />
          // </LayoutProfitItem>
          // <LayoutProfitItem>
          //   <LayoutProfitItemIcon />
          // </LayoutProfitItem>
          // <LayoutProfitItem>
          //   <LayoutProfitItemIcon />
          // </LayoutProfitItem>
}
          //       {'Профессиональный подход:'}
          //       {'Разумная цена:'}
          //       {'Все в наличии:'}
          //       {'Точная диагностика:'}
          //       {'Приемлемые сроки:'}
          //       {'Прозрачно:'}
          //       {'Гарантия качества:'}

          // <LayoutProfitList>
          //   <LayoutProfitListItem>
          //     <LayoutProfitListItemSpan>
          //     </LayoutProfitListItemSpan>
          //     <LayoutProfitListItemSpan>
          //       {'Обслуживание автомобилей наших клиентов выполняется профессионалами высокого уровня. За плечами большинства наших специалистов многолетний опыт работы в этой области, в том числе и на СТО официального дилера.'}
          //     </LayoutProfitListItemSpan>
          //   </LayoutProfitListItem>
          // </LayoutProfitList>
          // <LayoutProfitList>
          //   <LayoutProfitListItem>
          //     <LayoutProfitListItemSpan>
          //     </LayoutProfitListItemSpan>
          //     <LayoutProfitListItemSpan>
          //       {'Стоимость выполненных работ и запасных частей значительно ниже, чем у официалов.'}
          //     </LayoutProfitListItemSpan>
          //   </LayoutProfitListItem>
          // </LayoutProfitList>
          // <LayoutProfitList>
          //   <LayoutProfitListItem>
          //     <LayoutProfitListItemSpan>
          //     </LayoutProfitListItemSpan>
          //     <LayoutProfitListItemSpan>
                
          //     </LayoutProfitListItemSpan>
          //   </LayoutProfitListItem>
          // </LayoutProfitList>
          // <LayoutProfitList>
          //   <LayoutProfitListItem>
          //     <LayoutProfitListItemSpan>
          //     </LayoutProfitListItemSpan>
          //     <LayoutProfitListItemSpan>
                
          //     </LayoutProfitListItemSpan>
          //   </LayoutProfitListItem>
          // </LayoutProfitList>
          // <LayoutProfitList>
          //   <LayoutProfitListItem>
          //     <LayoutProfitListItemSpan>
          //     </LayoutProfitListItemSpan>
          //     <LayoutProfitListItemSpan>
                
          //     </LayoutProfitListItemSpan>
          //   </LayoutProfitListItem>
          // </LayoutProfitList>
          // <LayoutProfitList>
          //   <LayoutProfitListItem>
          //     <LayoutProfitListItemSpan>
          //     </LayoutProfitListItemSpan>
          //     <LayoutProfitListItemSpan>
                
          //     </LayoutProfitListItemSpan>
          //   </LayoutProfitListItem>
          // </LayoutProfitList>
          // <LayoutProfitList>
          //   <LayoutProfitListItem>
          //     <LayoutProfitListItemSpan>
          //     </LayoutProfitListItemSpan>
          //     <LayoutProfitListItemSpan>
                
          //     </LayoutProfitListItemSpan>
          //   </LayoutProfitListItem>
          // </LayoutProfitList>
