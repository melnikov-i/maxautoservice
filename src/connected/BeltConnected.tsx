import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { Belt } from '@src/components';

import {
  CollectionContain,
  CurrentModelModificationsCollectionInterface,
  PriceItemInterface
} from '@src/interfaces';

import {
  BeltModelCollectionSelector,
  CurrentBeltModelModificationsCollectionSelector,
  CurrentModificationBeltCollectionSelector
} from '@src/selectors';

import {
  syncActionCreators
} from '@src/redux/belt';

const mapStateToProps = createStructuredSelector<RootState, {
    BeltModelCollection: CollectionContain[],
    CurrentBeltModelModificationsCollection: 
      CurrentModelModificationsCollectionInterface,
    CurrentModificationBeltCollection: PriceItemInterface,
  }>({
    BeltModelCollection: BeltModelCollectionSelector,
    CurrentBeltModelModificationsCollection: 
      CurrentBeltModelModificationsCollectionSelector,
    CurrentModificationBeltCollection:
      CurrentModificationBeltCollectionSelector,
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  selectCurrentBeltModel: syncActionCreators.selectCurrentBeltModel,
  cleanCurrentBeltModel: syncActionCreators.cleanCurrentBeltModel,
  selectCurrentBelt: syncActionCreators.selectCurrentBelt,
}, dispatch);

export const BeltConnected = connect(
  mapStateToProps, mapDispatchToProps)(Belt);