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
  // PriceTablePlace
} from '@src/styled';


interface PriceProps {
  ModelCollection: CollectionContain[],
  CurrentModelModificationsCollection: 
    CurrentModelModificationsCollectionInterface,
  CurrentModificationPriceCollection: PriceItemInterface,
  selectCurrentModel: 
    ( payload: CollectionContain['id'] ) => any,
  cleanCurrentModel: () => any,
  selectCurrentPrice: ( payload: string ) => any,
}

export const Price: React.SFC<PriceProps> = (props) => {
  const { 
    ModelCollection,
    CurrentModelModificationsCollection,
    CurrentModificationPriceCollection,
    selectCurrentModel,
    cleanCurrentModel,
    selectCurrentPrice,
  } = props;
  
  // Handlers
  const priceModelsHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const atribute: string | null = 
      e.currentTarget.getAttribute('data-model-id');
    if ( atribute !== null ) {
      selectCurrentModel(atribute);      
    }
  };

  const clearCurrentModelHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      cleanCurrentModel();
    };

  const priceCurrentModelHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      const atribute: string | null = 
        e.currentTarget.getAttribute('data-model-id');
      if ( atribute !== null ) {
        selectCurrentPrice(atribute);
      }
    };

  if ( CurrentModelModificationsCollection.header === '' ) {
    return (
      <PriceLayout>
        {ModelCollection.map((e, i) => (
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
    if ( CurrentModificationPriceCollection.header === '' ) {
      // Список модификаций
      return (
        <PriceLayout>
          <PriceModelItem>
            <PriceModificationBackAnchor
              onClick={clearCurrentModelHandler} 
            />
            <PriceModelItemText>
              {CurrentModelModificationsCollection.header}
            </PriceModelItemText>
          </PriceModelItem>        
          {CurrentModelModificationsCollection.phases.map((phase, i) => (
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
              {CurrentModificationPriceCollection.header}
            </PriceModelItemText>
          </PriceTableHeader> 
          <PriceTable>
            <tbody>
              <PriceTableRow>
                <PriceTableColl>
                  {'Оригинальный'}
                </PriceTableColl>
                <PriceTableColl>
                  {CurrentModificationPriceCollection.price[0]}
                </PriceTableColl>
              </PriceTableRow>
              <PriceTableRow>
                <PriceTableColl>
                  {'Оптимальный'}
                </PriceTableColl>
                <PriceTableColl>
                  {CurrentModificationPriceCollection.price[1]}
                </PriceTableColl>
              </PriceTableRow>
              <PriceTableRow>
                <PriceTableColl>
                  {'Экономный'}
                </PriceTableColl>
                <PriceTableColl>
                  {CurrentModificationPriceCollection.price[2]}
                </PriceTableColl>
              </PriceTableRow>            
            </tbody>
          </PriceTable>          
        </PriceLayout>
      );
    }
  }
};
        // {( CurrentModificationPriceCollection.length !== 0 )
        //   ? <table>
        //       <tr>
        //         <td>{'Оригинальный'}</td>
        //         <td>{CurrentModificationPriceCollection[0]}</td>
        //       </tr>
        //       <tr>
        //         <td>{'Оптимальный'}</td>
        //         <td>{CurrentModificationPriceCollection[1]}</td>
        //       </tr>
        //       <tr>
        //         <td>{'Экономный'}</td>
        //         <td>{CurrentModificationPriceCollection[2]}</td>
        //       </tr>
        //     </table>
        //   : <PriceTablePlace>
        //       <p>{'Чтобы увидеть цену, выберите модификацию'}</p>
        //     </PriceTablePlace>
        // }