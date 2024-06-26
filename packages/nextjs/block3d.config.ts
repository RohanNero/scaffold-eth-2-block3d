import { Block3dConfig } from "./types/block3d";

// This config file allows users to
//    - specify which pages/routes are restricted
//    - specify the type of restriction
//    - specify which addresses are restricted

/** PLEASE DELETE DEFAULT TEMPLATE VALUES AFTER INSTALLING
 *  THESE ARE ONLY FOR EXAMPLE AND WILL BLOCK ANYONE NOT HOLDING AT LEAST:
 *  1. 1 USDC ON EITHER MAINNET, ARBITRUM, OR POLYGON
 */

// Adding a route to the `publicRoutes` array will allow anyone to view that page
export const block3dConfig: Block3dConfig = {
  publicRoutes: [],
  strict: true, // Boolean indicating if rules are strict (every rule criteria must be met vs only one being required)
  rules: [
    {
      title: "Original Gangsters",
      type: "simple",
      addresses: ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
    },
    {
      title: "USDC",
      type: "token", // for `token` type, the minimum balance must be formatted according to however many decimals the token has
      strict: false,
      contracts: [
        {
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // the token contract address
          chainId: 1, // the chainId where the token lives
          minimumBal: "100000000", // minimum amount of tokens an address must hold
        },
        {
          address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
          chainId: 42161,
          minimumBal: "1000000000",
        },
        {
          address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
          chainId: 137,
          minimumBal: "1000000000",
        },
      ],
    },
  ],
};
