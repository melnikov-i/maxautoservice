import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/redux';

import { Profit } from '@src/components';

const mapStateToProps = createStructuredSelector<RootState, {}>({});

export const ProfitConnected = connect(
  mapStateToProps, {})(Profit);