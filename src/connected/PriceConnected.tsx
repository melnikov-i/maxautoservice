import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { Price } from '@src/components';

import {
  CollectionContain,
  CurrentModelModificationsCollectionInterface,
  PriceItemInterface
} from '@src/interfaces';

import {
  ModelCollectionSelector,
  CurrentModelModificationsCollectionSelector,
  CurrentModificationPriceCollectionSelector
} from '@src/selectors';

import {
  syncActionCreators
} from '@src/redux/price';

const mapStateToProps = createStructuredSelector<RootState, {
    ModelCollection: CollectionContain[],
    CurrentModelModificationsCollection: 
      CurrentModelModificationsCollectionInterface,
    CurrentModificationPriceCollection: PriceItemInterface,
  }>({
    ModelCollection: ModelCollectionSelector,
    CurrentModelModificationsCollection: 
      CurrentModelModificationsCollectionSelector,
    CurrentModificationPriceCollection:
      CurrentModificationPriceCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  selectCurrentModel: syncActionCreators.selectCurrentModel,
  cleanCurrentModel: syncActionCreators.cleanCurrentModel,
  selectCurrentPrice: syncActionCreators.selectCurrentPrice,
}, dispatch);

export const PriceConnected = connect(
  mapStateToProps, mapDispatchToProps)(Price);