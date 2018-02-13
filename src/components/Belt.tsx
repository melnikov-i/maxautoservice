import * as React from 'react';

import {
  CollectionContain,
  CurrentModelModificationsCollectionInterface,
  PriceItemInterface
} from '@src/interfaces';

import {
  PriceLayout,
  PriceModelItem,
  PriceModelItemAnchor,
  PriceModelPhaseItemAnchor,
  PriceModificationBackAnchor,
  PriceModelItemText,
  PriceModelPhaseHeader,
  PriceTable,
  PriceTableRow,
  PriceTableColl,
  PriceTableHeader,
} from '@src/styled';


interface BeltProps {
  BeltModelCollection: CollectionContain[],
  CurrentBeltModelModificationsCollection: 
    CurrentModelModificationsCollectionInterface,
  CurrentModificationBeltCollection: PriceItemInterface,
  selectCurrentBeltModel: 
    ( payload: CollectionContain['id'] ) => any,
  cleanCurrentBeltModel: () => any,
  selectCurrentBelt: ( payload: string ) => any,
}

export const Belt: React.SFC<BeltProps> = (props) => {
  const { 
    BeltModelCollection,
    CurrentBeltModelModificationsCollection,
    CurrentModificationBeltCollection,
    selectCurrentBeltModel,
    cleanCurrentBeltModel,
    selectCurrentBelt,
  } = props;
  
  // Handlers
  const priceModelsHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const atribute: string | null = 
      e.currentTarget.getAttribute('data-model-id');
    if ( atribute !== null ) {
      selectCurrentBeltModel(atribute);      
    }
  };

  const clearCurrentModelHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      cleanCurrentBeltModel();
    };

  const priceCurrentModelHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      const atribute: string | null = 
        e.currentTarget.getAttribute('data-model-id');
      if ( atribute !== null ) {
        selectCurrentBelt(atribute);
      }
    };

  if ( CurrentBeltModelModificationsCollection.header === '' ) {
    return (
      <PriceLayout>
        {BeltModelCollection.map((e, i) => (
          <PriceModelItem key={i}>
            <PriceModelItemAnchor
              onClick={priceModelsHandler}
              data-model-id={e.id}
            >
              {e.value}
            </PriceModelItemAnchor>
          </PriceModelItem>
        ))}
      </PriceLayout>
    );
  } else {
    if ( CurrentModificationBeltCollection.header === '' ) {
      // Список модификаций
      return (
        <PriceLayout>
          <PriceModelItem>
            <PriceModificationBackAnchor
              onClick={clearCurrentModelHandler} 
            />
            <PriceModelItemText>
              {CurrentBeltModelModificationsCollection.header}
            </PriceModelItemText>
          </PriceModelItem>        
          {CurrentBeltModelModificationsCollection.phases.map((phase, i) => (
            <div key={i}>
              {(phase.phaseHeader !== '') 
                ? <PriceModelPhaseHeader>
                    {phase.phaseHeader}
                  </PriceModelPhaseHeader>
                : null
              }
              {phase.modifications.map((modification, i) => (
                <PriceModelItem key={i}>
                  <PriceModelPhaseItemAnchor
                    onClick={priceCurrentModelHandler}
                    data-model-id={modification.id}
                  >
                    {modification.value}
                  </PriceModelPhaseItemAnchor>
                </PriceModelItem>
              ))}
            </div>
          ))}
        </PriceLayout>
      );      
    } else {
      // Таблица с ценами
      return (
        <PriceLayout>
          <PriceTableHeader>
            <PriceModificationBackAnchor
              onClick={clearCurrentModelHandler} 
            />
            <PriceModelItemText>
              {CurrentModificationBeltCollection.header}
            </PriceModelItemText>
          </PriceTableHeader> 
          <PriceTable>
            <tbody>
              <PriceTableRow>
                <PriceTableColl>
                  {'Оригинальный'}
                </PriceTableColl>
                <PriceTableColl>
                  {CurrentModificationBeltCollection.price[0]}
                </PriceTableColl>
              </PriceTableRow>
              <PriceTableRow>
                <PriceTableColl>
                  {'Оптимальный'}
                </PriceTableColl>
                <PriceTableColl>
                  {CurrentModificationBeltCollection.price[1]}
                </PriceTableColl>
              </PriceTableRow>
            </tbody>
          </PriceTable>
        </PriceLayout>
      );
    }
  }
};