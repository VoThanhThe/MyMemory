import {createContext, useEffect, useState} from 'react';
import {JsonRpcProvider, formatUnits, Contract} from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface AppContextType {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  tokenInfo: object;
  setTokenInfo: React.Dispatch<React.SetStateAction<object>>;
}

interface TokenInfo {
  tokenAddress: string;
  symbol: string;
  decimals: string; // or number if decimals is not a string
  id: string;
  indexChain: string;
  logo?: string; // optional logo URL
}

export interface CoinRate {
  name: string;
  usd: number;
  usd_24h_change: number;
}
// let provider = new ethers.JsonRpcProvider('https://bsc-testnet.publicnode.com');
// Example usage:

function listPriceModelFromJson(jsonString: string): CoinRate {
  const decoded = JSON.parse(jsonString);
  return {
    name: decoded.name,
    usd: decoded.usd,
    usd_24h_change: decoded.usd_24h_change,
  };
}
export const AppContext = createContext<AppContextType | undefined>(undefined);
const api = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const AppContextProvider = ({children}: any) => {
  const [balance, setBalance] = useState<number>(0);
  const [tokenInfo, setTokenInfo] = useState<object>({});
  const networkUrl = 'https://bsc-testnet.publicnode.com';
  const walletAddress = '0xEa5007831646fa01C7079B15cFa4c62748905b04';

  const getPrice = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=orbit-bridge-klaytn-usdc%2Cfantom%2Cmetis-token%2Ccelo%2Ccrypto-com-chain%2Cthe-open-network%2Ctron%2Cberachain-bera%2Coptimism%2Cwmatic%2Cwrapped-core%2Cweth%2Cbinancecoin%2Cwbnb%2Cethereum%2Ctether%2Cusd-coin%2Cshiba-inu%2Ccoredaoorg%2Cmatic-network%2Carbitrum%2Cavalanche-2&vs_currencies=usd&include_24hr_change=true',
      );
      // console.log("DATA: ", response.data);

      // Lưu dữ liệu vào AsyncStorage
      await AsyncStorage.setItem('priceData', JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const fetchData = async () => {
    try {
      // Lấy dữ liệu từ AsyncStorage
      const storedData = await AsyncStorage.getItem('priceData');
      if (storedData !== null) {
        console.log('Stored data: ', JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage: ', error);
    }
  };

  const getInfoToken = async (walletAddress: string, networkUrl: string) => {
    try {
      const provider = new JsonRpcProvider(networkUrl);
      // const signer = await provider.getSigner();
      // const balanceWallet = await provider.getBalance(walletAddress);
      // const block = await provider.getBlockNumber();
      // const transaction = await provider.getTransactionCount(walletAddress);

      const tokenContractAddress = '0x0221144D770De4ca55D0a9B7306cA8BF7FB8B805'; // Thay YOUR_TOKEN_CONTRACT_ADDRESS bằng địa chỉ smart contract của token
      const tokenContract = new Contract(tokenContractAddress, api, provider);

      // Gọi hàm symbol() từ smart contract để lấy symbol
      const symbol = await tokenContract.symbol();

      // Gọi hàm decimals() từ smart contract để lấy số lượng số thập phân (decimals)
      const decimals = await tokenContract.decimals();

      let result = {
        tokenAddress: tokenContractAddress,
        symbol: symbol,
        decimals: decimals.toString(),
      };
      setTokenInfo({
        tokenAddress: tokenContractAddress,
        symbol: symbol,
        decimals: decimals.toString(), // Convert decimals to string
      });
      console.log(result);

      // setTokenInfo({symbol});
    } catch (error) {
      console.error('Error fetching token info:', error);
    }
  };
 

  useEffect( () => {
    // getInfoToken(walletAddress, networkUrl);
    // getPrice();
    // fetchData();
  }, []);

  return (
    <AppContext.Provider value={{balance, setBalance, tokenInfo, setTokenInfo}}>
      {children}
    </AppContext.Provider>
  );
};
