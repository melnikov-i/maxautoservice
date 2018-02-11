import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';

import { Price } from '@src/components';

import {} from '@src/interfaces';

import {} from '@src/selectors';

import {} from '@src/redux/price';

const mapStateToProps = createStructuredSelector<RootState, {

  }>({
    
  });

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  
}, dispatch);

export const PriceConnected = connect(
  mapStateToProps, mapDispatchToProps)(Price);