import React from 'react';
import SelectedServerProvider from './SelectedServerProvider';
import ContractServersProvider from './ContractServersProvider';

const ContextProviders = ({ children }) => {
  return (
    <SelectedServerProvider>
      <ContractServersProvider>
        {children}
      </ContractServersProvider>
    </SelectedServerProvider>
  );
};

export default ContextProviders;
