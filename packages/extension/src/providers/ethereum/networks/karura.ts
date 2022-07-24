import wrapActivityHandler from "@/libs/activity-state/wrap-activity-handler";
import { NetworkNames } from "@enkryptcom/types";
import { EtherscanActivity } from "../libs/activity-handlers";
import { EvmNetwork, EvmNetworkOptions } from "../types/evm-network";

const karuraOptions: EvmNetworkOptions = {
  name: NetworkNames.KaruraEVM,
  name_long: "Karura EVM",
  homePage: "https://karura.network",
  blockExplorerTX: "https://blockscout.karura.network/tx/[[txHash]]",
  blockExplorerAddr: "https://blockscout.karura.network/address/[[address]]",
  chainID: 686,
  isTestNetwork: false,
  currencyName: "KAR",
  node: "https://eth-rpc-karura.aca-api.network/eth/http",
  icon: require("./icons/karura-evm.svg"),
  gradient: "#FF4C3B",
  coingeckoID: "karura",
  activityHandler: wrapActivityHandler(EtherscanActivity),
};

const karura = new EvmNetwork(karuraOptions);

export default karura;
