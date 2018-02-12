import * as React from 'react';

import {
  ModelCollectionItemInterface,
  CurrentModelModificationsCollectionInterface
} from '@src/interfaces';

import {
  PriceModelItem,
  PriceModelItemAnchor,
  PriceModificationBackAnchor,
  PriceModelItemText
  // PriceText,
} from '@src/styled';


interface PriceProps {
  ModelCollection: ModelCollectionItemInterface[],
  CurrentModelModificationsCollection: 
  CurrentModelModificationsCollectionInterface,
  selectCurrentModel: 
  ( payload: ModelCollectionItemInterface['name'] ) => any,
}

export const Price: React.SFC<PriceProps> = (props) => {
  const { 
    ModelCollection,
    CurrentModelModificationsCollection,
    selectCurrentModel,
  } = props;
  
  // Handlers
  const priceModelHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const atribute: string | null = 
      e.currentTarget.getAttribute('data-model-name');
    if ( atribute !== null ) {
      selectCurrentModel(atribute);      
    }
  };

  const clearCurrentModelHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      selectCurrentModel('default');
    }

  if ( CurrentModelModificationsCollection.header === '' ) {
    return (
      <div>
        {ModelCollection.map((e, i) => (
          <PriceModelItem key={i}>
            <PriceModelItemAnchor
              onClick={priceModelHandler}
              data-model-name={e.name}
            >
              {e.value}
            </PriceModelItemAnchor>
          </PriceModelItem>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <PriceModelItem>
          <PriceModificationBackAnchor
            onClick={clearCurrentModelHandler} 
          />
          <PriceModelItemText>
            {CurrentModelModificationsCollection.header}
          </PriceModelItemText>
        </PriceModelItem>        
        {CurrentModelModificationsCollection.modifications.map((e, i) => (
          <PriceModelItem key={i}>
          <PriceModelItemAnchor
            onClick={priceModelHandler}
            data-model-name={e.id}
          >
            {e.value}
          </PriceModelItemAnchor>
        </PriceModelItem>
        ))}
      </div>
    );
  }
};