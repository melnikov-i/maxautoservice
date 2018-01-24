export interface CurrentProfitDataInterface {
  icon: string,
  header: string,
  text: string,
}

export interface CurrentHeadDataInterface {
  header: string,  
}

export interface PageDataInterface {
  logo: {
    yellow: string,
    black: string
  },
  phone: string,
  profitHeader: string,
  profit: CurrentProfitDataInterface[],
  head: CurrentHeadDataInterface,
}

interface CurrentProfitIconInterface {
  icon: CurrentProfitDataInterface['icon']
}

export type ProfitIconStyleType =
  CurrentProfitIconInterface & React.HTMLProps<HTMLDivElement>;