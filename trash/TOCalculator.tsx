import * as React from 'react';

import {
} from '@src/interfaces';

import {
  TOCalculatorWrapper,
  TOCalculatorItemWrapper,


  // TOCalculatorSelectWrapper,
  // TOCalculatorSelect,
  // TOCalculatorOptionWrapper,
  // TOCalculatorOption,
  // TOCalculatorDroppedListOption,

} from '@src/styled';

interface TOCalculatorProps {

}

          // <TOCalculatorDroppedListOption>
          //   {'Option 1'}
          // </TOCalculatorDroppedListOption>
          // <TOCalculatorDroppedListOption>
          //   {'Option 2'}
          // </TOCalculatorDroppedListOption>
          // <TOCalculatorDroppedListOption>
          //   {'Option 3'}
          // </TOCalculatorDroppedListOption>
export const TOCalculator: React.SFC<TOCalculatorProps> = (props) => {
  return (
    <TOCalculatorWrapper>
      <TOCalculatorItemWrapper>
        {'Model'}
      </TOCalculatorItemWrapper>
      <TOCalculatorItemWrapper>
        {'Model'}
      </TOCalculatorItemWrapper>
      <TOCalculatorItemWrapper>
        {'Model'}
      </TOCalculatorItemWrapper>
      <TOCalculatorItemWrapper>
        {'Model'}
      </TOCalculatorItemWrapper>
    </TOCalculatorWrapper>
  );
};
      // <TOCalculatorSelectWrapper>
      //   <TOCalculatorSelect>
      //     {'Текущий выбор'}
      //   </TOCalculatorSelect>
      //   <TOCalculatorOptionWrapper>
      //     <TOCalculatorOption onClick={() => {console.log('')}}>
      //       {'Option 1'}
      //     </TOCalculatorOption>
      //     <TOCalculatorOption onClick={() => {console.log('')}}>
      //       {'Option 2'}
      //     </TOCalculatorOption>
      //     <TOCalculatorOption onClick={() => {console.log('')}}>
      //       {'Option 3'}
      //     </TOCalculatorOption>
      //   </TOCalculatorOptionWrapper>
      // </TOCalculatorSelectWrapper>
      // <TOCalculatorSelectWrapper>
      //   <TOCalculatorSelect>
          
      //   </TOCalculatorSelect>
      //   <TOCalculatorOptionWrapper>
          
      //   </TOCalculatorOptionWrapper>
      // </TOCalculatorSelectWrapper>
      // <TOCalculatorSelectWrapper>
      //   <TOCalculatorSelect>
          
      //   </TOCalculatorSelect>
      //   <TOCalculatorOptionWrapper>
          
      //   </TOCalculatorOptionWrapper>
      // </TOCalculatorSelectWrapper>