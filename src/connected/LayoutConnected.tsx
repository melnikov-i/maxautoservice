import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/redux';

import { Layout } from '@src/components';

import {
  PageDataInterface,
} from '@src/interfaces';

import {
  PageDataSelecror,} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    PageData: PageDataInterface,
  }>({
    PageData: PageDataSelecror,
  });

export const LayoutConnected = connect(
  mapStateToProps, {})(Layout);