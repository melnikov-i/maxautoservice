export interface CurrentProfitDataInterface {
  icon: string,
  header: string,
  text: string,
}

export interface PageDataInterface {
  logo: {
    yellow: string,
    black: string,
    header: string,
  },
  phone: string,
  profitHeader: string,
  profit: CurrentProfitDataInterface[],
  description: {
    header: string,
    text: string[],
    inviteToCall: string,
    list: {
      header: string,
      text: string,
      image: any,
    }[],
  },
  address: {
    header: string,
    address: string,
    addressIcon: string,
    schedule: string,
    scheduleIcon: string,
    phoneIcon: string,
  }
}

interface CurrentProfitIconInterface {
  icon: CurrentProfitDataInterface['icon']
}

interface CarouselSlidesInterface {
  images: any,
  header: string,
  text: string,
};

export interface CarouselItemDataInterface {
  animationDelay: string,
  marginLeft: string,
  direction: boolean,
  isFirst: boolean,
  delay: string,
  slides: CarouselSlidesInterface[],
}


interface HeadCarouselItemInterface {
  carouselWidth: number,
  image: any,
}

export type CarouselItemStyledType =
  HeadCarouselItemInterface & React.HTMLProps<HTMLDivElement>;

interface HeadCarouselInterface {
  carouselWidth: number,
  delay: string,
  marginLeft: string,
}

export type CarouselStyledType =
  HeadCarouselInterface & React.HTMLProps<HTMLDivElement>;

export type ProfitIconStyleType =
  CurrentProfitIconInterface & React.HTMLProps<HTMLDivElement>;