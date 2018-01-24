import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '@src/redux';

import { Head } from '@src/components';

const mapStateToProps = createStructuredSelector<RootState, {}>({});

export const HeadConnected = connect(
  mapStateToProps, {})(Head);