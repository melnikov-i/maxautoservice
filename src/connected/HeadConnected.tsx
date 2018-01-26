import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { Head } from '@src/components';

import {
  CarouselItemDataInterface
} from '@src/interfaces';

import {
  CarouselItemDataSelector
} from '@src/selectors';

import {
  asyncActionCreators
} from '@src/redux/carousel';

const mapStateToProps = createStructuredSelector<RootState, {
  CarouselItemData: CarouselItemDataInterface,
}>({
  CarouselItemData: CarouselItemDataSelector
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeCarouselItemDataUpdate: 
    asyncActionCreators.makeCarouselItemDataUpdate,
}, dispatch);

export const HeadConnected = connect(
  mapStateToProps, mapDispatchToProps)(Head);