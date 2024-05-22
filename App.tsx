import {SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/home/HomeScreen';
import {AppContextProvider} from './src/context/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import {MyTabs} from './src/navigation/MyTab';
import Loading from './src/screens/LoadigAnimation/Loading';
import FlashScreen from './src/screens/flashscreen/FlashScreen';
import Webview from './src/screens/webview/Webview';
import {AppNavigator} from './src/navigation/Appnavigator';

import '@walletconnect/react-native-compat';
import {WagmiConfig} from 'wagmi';
import {mainnet, polygon, arbitrum} from 'viem/chains';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
  W3mButton,
} from '@web3modal/wagmi-react-native';
import {Colors} from './src/contants/Theme';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '99b8bc5369835cc61c416c7a9470930e';

// 2. Create config
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

const chains = [mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata});

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';

const providerMetadata = {
  name: 'YOUR_PROJECT_NAME',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

const App = () => {
  const {isOpen, open, close, provider, isConnected, address} =
    useWalletConnectModal();

  const onPress = () => {
    if (isConnected) {
      provider.disconnect();
    } else {
      open();
    }
  };
  return (
    // <View style={styles.container}>
    //   <WagmiConfig config={wagmiConfig}>
    //     <Text style={[styles.text]}>Web3 Connect</Text>
    //     <W3mButton />
    //     <Web3Modal />
    //   </WagmiConfig>
    //   <Text style={[styles.text]}>Wallet Connect</Text>
    //   <Pressable style={styles.button} onPress={onPress}>
    //     <Text>{isConnected ? 'Disconnect' : 'Connect'}</Text>
    //   </Pressable>
    //   <WalletConnectModal
    //     projectId={projectId}
    //     providerMetadata={providerMetadata}
    //   />
    // </View>
    <NavigationContainer>
      <AppContextProvider>
        <AppNavigator />
      </AppContextProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: Colors.LIGTH_COLOR.PRIMARY,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.LIGTH_COLOR.PRIMARY,
    padding: 20,
    borderRadius: 10,
  },
});
