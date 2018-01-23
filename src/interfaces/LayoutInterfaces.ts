export interface CurrentProfitDataInterface {
  icon: string,
  header: string,
  text: string,
}

export interface PageDataInterface {
  profit: CurrentProfitDataInterface[],
}

interface CurrentProfitIconInterface {
  icon: CurrentProfitDataInterface['icon']
}

export type ProfitIconStyleType =
  CurrentProfitIconInterface & React.HTMLProps<HTMLDivElement>;