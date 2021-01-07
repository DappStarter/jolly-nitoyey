require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture street cruise spider upset grace sister army gasp'; 
let testAccounts = [
"0x5905768fd8fd4f3226ce68db8a6bb8cad873a7efd6fc351cb10f8797d89fb7ee",
"0x15ed99bd84af8f55bfef256f0b9b818a085900f42069b68f5f03d78404ff9985",
"0xe8d8e1e5801404093a4c0f73e04d086c07647f8ed82089c754bebe6ab3506cbe",
"0x74e18f0582a3598fe5382ffdf76936191c85fcf678cc2bbe4e508c6352bfb5b1",
"0x35c56ce1811d49909669dc63c722547cde9b63a3b9ed1e6e84810c868136d91b",
"0xe87943e43b232d65b4820b3023b8d898ed19121fbaad8b439753ab853f154212",
"0x07ca520ab341ebfdc27764b5705f2a836bd6791636a9de95be9878887caeedc8",
"0xbf5884cd066e01546a84a503f9fbfac9191a506115d9f9290a35ab0128d5c37c",
"0xe954bf588e3293db3df3044498020f6d771d6469f9e3f573daae2a42427b6639",
"0x2dc92a84585deaaeade7015e580c0c833e537553bb6fea10afed7dd6a3b2b4c8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
