import * as React from 'react';

import {
} from '@src/interfaces';

import {
  TOCalculatorWrapper,
  TOCalculatorDroppedListWrapper,
  TOCalculatorDroppedListSelect,
  TOCalculatorDroppedListOption,
} from '@src/styled';

interface TOCalculatorProps {

}

export const TOCalculator: React.SFC<TOCalculatorProps> = (props) => {
  return (
    <TOCalculatorWrapper>
      <TOCalculatorDroppedListWrapper>
        <TOCalculatorDroppedListSelect>
          <TOCalculatorDroppedListOption>
            {'Option 1'}
          </TOCalculatorDroppedListOption>
          <TOCalculatorDroppedListOption>
            {'Option 2'}
          </TOCalculatorDroppedListOption>
          <TOCalculatorDroppedListOption>
            {'Option 3'}
          </TOCalculatorDroppedListOption>
        </TOCalculatorDroppedListSelect>
      </TOCalculatorDroppedListWrapper>
      <TOCalculatorDroppedListWrapper>
        <TOCalculatorDroppedListSelect disabled>
          <TOCalculatorDroppedListOption>
            {'Option 1'}
          </TOCalculatorDroppedListOption>
          <TOCalculatorDroppedListOption>
            {'Option 2'}
          </TOCalculatorDroppedListOption>
          <TOCalculatorDroppedListOption>
            {'Option 3'}
          </TOCalculatorDroppedListOption>
        </TOCalculatorDroppedListSelect>
      </TOCalculatorDroppedListWrapper>
      <TOCalculatorDroppedListWrapper>
        <TOCalculatorDroppedListSelect>
          <TOCalculatorDroppedListOption>
            {'Option 1'}
          </TOCalculatorDroppedListOption>
          <TOCalculatorDroppedListOption>
            {'Option 2'}
          </TOCalculatorDroppedListOption>
          <TOCalculatorDroppedListOption>
            {'Option 3'}
          </TOCalculatorDroppedListOption>
        </TOCalculatorDroppedListSelect>
      </TOCalculatorDroppedListWrapper>
    </TOCalculatorWrapper>
  );
}