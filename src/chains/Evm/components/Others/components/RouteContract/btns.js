const btns = [
  {
    chainId: '0x1',
    to: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    type: 'Withdraw',
    callData: '0x2e1a7d4d0000000000000000000000000000000000000000000000000113984d6c161224',
  },
  {
    chainId: '0x1',
    to: '0xf3de3c0d654fda23dad170f0f320a92172509127',
    type: 'Swap',
    callData: '0x9871efa400000000003065c160aa2dc000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000186cc6acd4b00000000000000000000000000000000000000000000001624abe35390291bd2922b00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000001b0000000000000003b6d03404103e658a8acab924a9a2d3750e6cf3fb932a186',
  },
  {
    chainId: '0x1',
    to: '0x6759acd57cb5ea451a3edf397734edddfc123049',
    type: 'ClaimReward',
    callData: '0x1aee31d000000000000000000000000000000000000000000000000000000000000055870000000000000000000000000000000000000000000004af8fb048d4d3c00000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000688be1b4000000000000000000000000000000000000000000000000000000000000001ccff4fed2422710342400de4540d21d13f72c3e3bb57f3d1759efcbd84c453a2a58241509043ff46cd89e68a0db051d67565bc28e7683af08c5e07a461e5569c2000000000000000000000000000000000000000000000000000000000000000fe935acc1666ba975c8724ef514ed5d5166d4cbd2d4e653fd95ae03cffe5f3d3c88e25a461c06a8bd0dd9b0ab12a0b69e927fdc12415446a3ca908cc326d01266a486435bbc196d1f46aa27c2d143c088584ee8b027e3ca66fa13aa135dcf3b649bbe3ee92d8369cca580a154a185e60b929f306d70b6c7d613e0f843d44dfbed0346fcc15e93aa73bfbdd913c5185b27da7f481a0d31d7ddbaf272455b2af6f3e2dbb4fbfcd9f32113537747f974ac3872046169ce6cb6c8d9f262856bb93199d742d16150f00b4e984cdf9e471c36a0488df21f1aef3c4754a58b65012cc484a91e49606211faeae8e77678807815ea258e63cf95cf160db5464c175d9eba0c06710e754fb59ba898bba1127346c870f2aee05c22c952ce4412ea517c4586b431adffe7cc25c6e1c190fff148f31a21752775abeb1aa707ae7a7fe5bb0ff22c6c220eb496842c14dac711e270b6d469aa5e3e7c6d9971c4de9c4dcd02535c822004b41aeb7f85b9f6e46c71a451cb5fb86b03e0dcf18fb59b7af3db96ee6c6c5726934831a61a96855d33955db5ad5bc9b5b904fd048ab42010479076017e2997c1afa732779d9256af31d8525d2bb50eba01907f7c6cfea62b90759ea7a96b377a72a7db91b2606459fa309908ccbd3f61d32fcaab3c874d37d09784167cbf',
  },
  {
    chainId: '0x1',
    to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    type: 'Token Approval',
    callData: '0x095ea7b3000000000000000000000000e92b586627cca7a83dc919cc7127196d70f55a0600000000000000000000000000000000000000000000000005278ab4012fa000',
  },
  {
    chainId: '0x1',
    to: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    type: 'Send Token',
    callData: '0xa9059cbb000000000000000000000000b2db21f72d616aff10a4d043ee678dd24d042d8300000000000000000000000000000000000000000000000000000000000001f4',
  },
  {
    chainId: '0x1',
    to: '0x5d22045daceab03b158031ecb7d9d06fad24609b',
    type: 'Bridge',
    callData: '0x00aeef8a05fe4940c19493b7facbc012677989fa504d88e14ec33628281ca4957c16979400b333e3142fe16b78628f19bb15afddaef437e72d6d7f5c6c20c6801a27fba60000000000000000000000000000000000000000000000000000000039ebfcb3',
  },
  {
    chainId: '0x1',
    to: '0x29469395eaf6f95920e59f858042f0e28d98a20b',
    type: 'Take Order',
    callData: '0x619a309f000000000000000000000000218e312ff5181290a46e3f87a73a8ad40c05a9440000000000000000000000003bb4fa84b120ac0dbb4a6bb0442fe2c47e324a93000000000000000000000000bd3531da5cf5857e7cfaa92426877b022e612cf8000000000000000000000000000000000000000000000000000000000000138d0000000000000000000000000000000000000000000000006dc5f7174d5700000000000000000000000000000000000000000000000000000000000066a8f5e7000000000000000000000000000000000000000000000000000000000000089800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002328000000000000000000000000000000000000000000000000000000000004eb3f00000000000000000000000000000000000000000000000000000000000001600000000000000000000000000fcbfc0a67985ee0803def22343ec4aeed02760e000000000000000000000000bd3531da5cf5857e7cfaa92426877b022e612cf807206b8e31b6516d7eff87d5c922fe0f37d7855bb0803032f6a33095f47e7428000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000688dff1b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009e26d5f76ef2bea3b8158493c99513be0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000007f65e95cbe1600000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000412acf1861718edf92830de444a5581fef5c3496901833ddb906e2a35286bc714026af28759c752bc2e3f9f92967121ee760c6cee9c503771edf2a5e1dcf85c9f31c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000599b0fe6317ee97fd93d9b3cb06121fb8aba5422920fe884780df9a802d7718f9b3c3b76c79692fadc2c1bc2beeac8c68160a54535698f8a32c2363c890c516c851b0137e7406af68e5d010513ff70a3aaed9afeb8661116e6ce00000000000000',
  },
  {
    chainId: '0x1',
    to: '0x29469395eaf6f95920e59f858042f0e28d98a20b',
    type: 'Borrow',
    callData: '0xe263967e0000000000000000000000008ee0033f81aa75d222b43b2b4571eb2bbd0c185a000000000000000000000000bd3531da5cf5857e7cfaa92426877b022e612cf800000000000000000000000000000000000000000000000053444835ec580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006f05b59d3b20000000000000000000000000000000000000000000000000000000000000000232800000000000000000000000000000000a95f35e70e6d3acf9b0de1543e8713d40000000000000000000000000000000000000000000000000000000066d408a5000000000000000000000000000000000000000000000000000000000000019a000000000000000000000000473ca1d29a136b935a96380ea342f296b4eea82c00000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000058d15e17628000000000000000000000000000000000000000000000000000000000000000013a200000000000000000000000000000000000000000000000000000000000000a241df57db0d7b160709d45400c6d8d4804b83c431f5245c5a3832f5d143add2d1437a549f64da1d3dc37b489c717d52bc66fff13efb398522f959490efc003cdf1b482935865df9ab5812aa98505c0f80c5d20ad232f7d947b007908419cb17dc9b570811373f3152966dcc047a692510a9dcfeaef0b6bcedcb513c637d39bb4ab11c000000000000000000000000000000000000000000000000000000000137e74b000000000000000000000000000000000000000000000000000000000000',
  },
  {
    chainId: '0x1',
    to: '0x0000000000000068f116a894984e2db1123eb395',
    type: 'Cancel Order',
    callData: '0xfd9f1e10000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000a01ab398e7b55e74d222992d5f286cf3ba5a75cb000000000000000000000000df2d4bffec010debd302674c9fb9cda99bb5e8520000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000066342016000000000000000000000000000000000000000000000000000000006635715e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000cc8155b224ff88b70000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c2e0ca5fe0b9abe1b86f3cc0b865448908d20a16a01ab398e7b55e74d222992d5f286cf3ba5a75cb0000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e848000000000000000000000000000000000000000000000000000000000001e8480000000000000000000000000a01ab398e7b55e74d222992d5f286cf3ba5a75cb',
  },
  {
    chainId: '0x38',
    to: '0x3556e8b925ee20c1fc6a00107fd449522338f7fd',
    type: 'Bet',
    callData: '0x35bcf347000000000000000000000000000000000000000000000037d61f16d37c5800007f2c395d9fee4afa5b24c23db4ffb34c02239e22c812f971e2171035c5ae04a300000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000041c83a001a319cd670d414286d79d6c1581fb2728187f590fc9d63a3d9c47f835e12bf8cf800383370b431e05a3670e093bea747df9cc61c75fa05dd59dfb1e24c1c00000000000000000000000000000000000000000000000000000000000000',
  },
  {
    chainId: '0x38',
    to: '0x0dd6d9c60bc6799acaad9be3ff9c583259cddfca',
    type: 'subscribe',
    callData: '0xf739d67c0000000000000000000000001a098793a7b850b896bb7e278ead55a499e19a37000000000000000000000000000000000000000000000000000000000000000100000000000000000000000016fc4f4c81539a6517075170d9099d2a8f84bad8',
  },
  {
    chainId: '0x89',
    to: '0x830017756ce93b471f90a0502985766c9bb9baf4',
    type: 'Config',
    callData: '0x074d11ae0000000000000000000000000000000000000000000000000000000000000001',
  },
  {
    chainId: '0x89',
    to: '0xf3a3d1b89a70e291531ecb4a1299117f5de44612',
    type: 'Register',
    callData: '0x0840605a000000000000000000000000d51ea6e3f0f931548d1f4ba586814a964dd7f38d',
  },
];

export default btns;
