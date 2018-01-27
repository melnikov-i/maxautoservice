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

interface HeadCarouselItemInterface {
  width: number,
  image: any,
  delay: string,
  first: boolean,
  margin: string,
}

interface HeadCarouselInterface {
  width: number,
  
}

export type ProfitIconStyleType =
  CurrentProfitIconInterface & React.HTMLProps<HTMLDivElement>;

export type CarouselItemStyleType =
  HeadCarouselItemInterface & React.HTMLProps<HTMLDivElement>;

export type CarouselStyledType =
  HeadCarouselInterface & React.HTMLProps<HTMLDivElement>;

export interface CarouselItemDataInterface {
  beforeDelay: string,
  images: any[],
}