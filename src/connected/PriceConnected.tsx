import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { Price } from '@src/components';

import {
  ModelCollectionItemInterface,
  CurrentModelModificationsCollectionInterface
} from '@src/interfaces';

import {
  ModelCollectionSelector,
  CurrentModelModificationsCollectionSelector
} from '@src/selectors';

import {
  syncActionCreators
} from '@src/redux/price';

const mapStateToProps = createStructuredSelector<RootState, {
    ModelCollection: ModelCollectionItemInterface[],
    CurrentModelModificationsCollection: 
      CurrentModelModificationsCollectionInterface
  }>({
    ModelCollection: ModelCollectionSelector,
    CurrentModelModificationsCollection: 
      CurrentModelModificationsCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  selectCurrentModel: syncActionCreators.selectCurrentModel
}, dispatch);

export const PriceConnected = connect(
  mapStateToProps, mapDispatchToProps)(Price);