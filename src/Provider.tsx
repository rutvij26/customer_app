import React, {FC} from 'react';
import AuthProvider from './AuthProvider';
import Routes from './Routes';
export interface ProviderProps {}

const Provider: FC<ProviderProps> = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Provider;
