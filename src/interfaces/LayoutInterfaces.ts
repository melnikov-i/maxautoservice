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
  priceHeader: string,
  beltHeader: string,
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


export interface CollectionContain {
  id: string,
  value: string,
}

export interface ModificationsInterface {
  phaseHeader: string,
  modifications: CollectionContain[],
}

export interface CurrentModelModificationsCollectionInterface {
  header: string,
  phases: ModificationsInterface[],
};

export interface ModificationsCollectionInterface {
  default: CurrentModelModificationsCollectionInterface,
  duster: CurrentModelModificationsCollectionInterface,
  logan: CurrentModelModificationsCollectionInterface,
  logan2: CurrentModelModificationsCollectionInterface,
  sandero: CurrentModelModificationsCollectionInterface,
  sandero2: CurrentModelModificationsCollectionInterface,
  sanderoStepway: CurrentModelModificationsCollectionInterface,
  sanderoStepway2: CurrentModelModificationsCollectionInterface,
  fluence: CurrentModelModificationsCollectionInterface,
}

export interface PriceItemInterface {
  header: string,
  price: string[],
}