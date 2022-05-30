/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface Marry3Interface extends utils.Interface {
  functions: {
    "CANNOT_TRANSFER_TO_ZERO_ADDRESS()": FunctionFragment;
    "NOT_CURRENT_OWNER()": FunctionFragment;
    "burn(address,address,bytes)": FunctionFragment;
    "burnByOwner(address,address)": FunctionFragment;
    "getMarryCount()": FunctionFragment;
    "getPrice()": FunctionFragment;
    "mint(address,address,uint8,uint8,bytes)": FunctionFragment;
    "mintByOwner(address,address,uint8,uint8)": FunctionFragment;
    "owner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateBurnNonce(string)": FunctionFragment;
    "updateNonce(string)": FunctionFragment;
    "updatePriceMax(uint256)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CANNOT_TRANSFER_TO_ZERO_ADDRESS"
      | "NOT_CURRENT_OWNER"
      | "burn"
      | "burnByOwner"
      | "getMarryCount"
      | "getPrice"
      | "mint"
      | "mintByOwner"
      | "owner"
      | "transferOwnership"
      | "updateBurnNonce"
      | "updateNonce"
      | "updatePriceMax"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NOT_CURRENT_OWNER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burnByOwner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarryCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintByOwner",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBurnNonce",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "updateNonce", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updatePriceMax",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NOT_CURRENT_OWNER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarryCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBurnNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Marry3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Marry3Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CANNOT_TRANSFER_TO_ZERO_ADDRESS(
      overrides?: CallOverrides
    ): Promise<[string]>;

    NOT_CURRENT_OWNER(overrides?: CallOverrides): Promise<[string]>;

    burn(
      _addressA: string,
      _addressB: string,
      _signatureB: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnByOwner(
      _addressA: string,
      _addressB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMarryCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      _addressA: string,
      _addressB: string,
      _sexA: BigNumberish,
      _sexB: BigNumberish,
      _signatureB: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintByOwner(
      _addressA: string,
      _addressB: string,
      _sexA: BigNumberish,
      _sexB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateBurnNonce(
      _nonce: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateNonce(
      _nonce: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePriceMax(
      _priceMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CANNOT_TRANSFER_TO_ZERO_ADDRESS(overrides?: CallOverrides): Promise<string>;

  NOT_CURRENT_OWNER(overrides?: CallOverrides): Promise<string>;

  burn(
    _addressA: string,
    _addressB: string,
    _signatureB: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnByOwner(
    _addressA: string,
    _addressB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMarryCount(overrides?: CallOverrides): Promise<BigNumber>;

  getPrice(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    _addressA: string,
    _addressB: string,
    _sexA: BigNumberish,
    _sexB: BigNumberish,
    _signatureB: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintByOwner(
    _addressA: string,
    _addressB: string,
    _sexA: BigNumberish,
    _sexB: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateBurnNonce(
    _nonce: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateNonce(
    _nonce: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePriceMax(
    _priceMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CANNOT_TRANSFER_TO_ZERO_ADDRESS(overrides?: CallOverrides): Promise<string>;

    NOT_CURRENT_OWNER(overrides?: CallOverrides): Promise<string>;

    burn(
      _addressA: string,
      _addressB: string,
      _signatureB: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    burnByOwner(
      _addressA: string,
      _addressB: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getMarryCount(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _addressA: string,
      _addressB: string,
      _sexA: BigNumberish,
      _sexB: BigNumberish,
      _signatureB: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    mintByOwner(
      _addressA: string,
      _addressB: string,
      _sexA: BigNumberish,
      _sexB: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateBurnNonce(_nonce: string, overrides?: CallOverrides): Promise<void>;

    updateNonce(_nonce: string, overrides?: CallOverrides): Promise<void>;

    updatePriceMax(
      _priceMax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(recipient: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    CANNOT_TRANSFER_TO_ZERO_ADDRESS(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    NOT_CURRENT_OWNER(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      _addressA: string,
      _addressB: string,
      _signatureB: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnByOwner(
      _addressA: string,
      _addressB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMarryCount(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _addressA: string,
      _addressB: string,
      _sexA: BigNumberish,
      _sexB: BigNumberish,
      _signatureB: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintByOwner(
      _addressA: string,
      _addressB: string,
      _sexA: BigNumberish,
      _sexB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateBurnNonce(
      _nonce: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateNonce(
      _nonce: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePriceMax(
      _priceMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CANNOT_TRANSFER_TO_ZERO_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    NOT_CURRENT_OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      _addressA: string,
      _addressB: string,
      _signatureB: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnByOwner(
      _addressA: string,
      _addressB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMarryCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      _addressA: string,
      _addressB: string,
      _sexA: BigNumberish,
      _sexB: BigNumberish,
      _signatureB: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintByOwner(
      _addressA: string,
      _addressB: string,
      _sexA: BigNumberish,
      _sexB: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateBurnNonce(
      _nonce: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateNonce(
      _nonce: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePriceMax(
      _priceMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
