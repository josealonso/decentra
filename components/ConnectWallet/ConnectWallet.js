// This is not going to be a traditional component, in that you are going to use it both as a component and as a piece of data for a special Hook called useContext. For now, keep the flat file structure, but if you use a lot of contexts, it might be worth moving them to a different directory structure.
import { createContext } from 'react';

const WalletContext = createContext();
export default WalletContext; // The context is registered

