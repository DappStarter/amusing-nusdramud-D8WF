require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note right purpose good narrow forget turkey'; 
let testAccounts = [
"0xad37c49a55f7654df6e2e7606b78ae542a980a70f98962fd0844320ac923271e",
"0x72221c1642aa3538e8edc2a80abaa33f66af58ced5bcf300a026f212cecb1daa",
"0xaaee98c0ef804b6cc05502ce79c47fe30710f2740074c8a9579d54e92c33d0d1",
"0x52831bcdb9dec64674015ab46653dba50ab01be541e18351599778414faea835",
"0x68fdf6f251c2b48566107254b94136e09d8f9d2af17acb896847a9b71b9a5bf1",
"0xf796cb22136eee2831785029b0c96fc2b51126628d892756c6af47b4a21aa31f",
"0x407ecec2988601480e8f42bc18786d7cb92e66889507518910413a5ef826921e",
"0xae8cdfd008616319ee0eb8e4040893e5092a13e790afbc5640b8bb9a31942eaa",
"0x87f842a56f5e9e1f54720ab38f557a20b0dd9e26b9f4d87e0296be994546845e",
"0xbd877d7f9df102bccf86b0d061e5281d50161b30a9afc81e7f8f2c53c6c11736"
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
            version: '^0.8.0'
        }
    }
};

