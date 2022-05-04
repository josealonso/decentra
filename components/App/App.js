import React from 'react';
// import Navigation from '../Navigation/Navigation';
// import SaladMaker from '../SaladMaker/SaladMaker';
import WalletContext from '../ConnectWallet/ConnectWallet';

// These data are available throughout the application. 
const walletState = {
  connected: false,
  chainId: 4
//   favorites: [
//     'avocado',
//     'carrot'
//   ]
}

function App() {
  return (
    <WalletContext.Provider value={walletState}>
      {/* <Navigation />
      <SaladMaker /> */}
    </WalletContext.Provider>
  );
}

export default App;
