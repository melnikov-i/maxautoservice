export interface CurrentProfitDataInterface {
  icon: string,
  header: string,
  text: string,
}

export interface PageDataInterface {
  logo: {
    yellow: string,
    black: string
  },
  phone: string,
  profitHeader: string,
  profit: CurrentProfitDataInterface[],
}

interface CurrentProfitIconInterface {
  icon: CurrentProfitDataInterface['icon']
}

export interface CarouselItemDataInterface {
  animationDelay: string,
  marginLeft: string,
  images: any[],
}


interface HeadCarouselItemInterface {
  carouselWidth: number,
  image: any,
  // delay: string,
  // first: boolean,
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


