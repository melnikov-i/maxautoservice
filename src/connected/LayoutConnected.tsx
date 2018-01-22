import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/redux';

import { Layout } from '@src/components';

import {
  HelloSelecror
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {
    Hello: string,
  }>({
    Hello: HelloSelecror,
  });

export const LayoutConnected = connect(
  mapStateToProps, {})(Layout);