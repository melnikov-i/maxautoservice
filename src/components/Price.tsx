import * as React from 'react';

import {
  ModelCollectionItemInterface
} from '@src/interfaces';

import {
  PriceModelItem,
  PriceModelItemAnchor,
  PriceModificationBackAnchor
  // PriceText,
} from '@src/styled';


interface PriceProps {
  ModelCollection: ModelCollectionItemInterface[],
  CurrentModelItem: ModelCollectionItemInterface['name'],
}

export const Price: React.SFC<PriceProps> = (props) => {
  const { 
    ModelCollection,
    CurrentModelItem
  } = props;
  
  // Handlers
  const priceModelHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    // e.currentTarget.getAttribute('data-model-name');
  };

  const clearCurrentModelHandler = 
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
    }

  if ( CurrentModelItem !== '' ) {
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
        <div>
          <PriceModificationBackAnchor
            onClick={clearCurrentModelHandler} 
          />          
        </div>
      </div>
    );
  }
};