import { AddCollection } from "../generated/AddCollectionSC/AddCollectionSC";
import {
  OrdersMatched,
  OrderCancelled,
} from "../generated/MarketExchange/Exchange";
import { Transfer } from "../generated/templates/UniqueCollectible/UniqueCollectible";
import {
  Collectible,
  Collection,
  Order,
  RoyaltyFee,
} from "../generated/schema";
import { CollectionDeployed } from "../generated/Factory/Factory";
import {
  RoyaltyFeeUpdate,
  NFTRoyaltyFeeUpdate,
} from "../generated/RoyaltyFeeRegistry/RoyaltyFeeRegistry";
import {
  UniqueCollectible as UniqueCollectibleTemplate,
  NonUniqueCollectible as NonUniqueCollectibleTemplate,
} from "../generated/templates";
import { TransferSingle } from "../generated/templates/NonUniqueCollectible/NonUniqueCollectible";
import { NFTRoyaltyFee } from "../generated/schema";

export function handleAddCollection(event: AddCollection): void {
  const entity = new Collection(event.params.add_.toHex());

  entity.timestamp = event.block.timestamp;
  entity.blockNumber = event.block.number;

  UniqueCollectibleTemplate.create(event.params.add_);
  NonUniqueCollectibleTemplate.create(event.params.add_);

  entity.save();
}

export function handleCollectionDeployed(event: CollectionDeployed): void {
  const entity = new Collection(event.params.collection.toHex());

  entity.timestamp = event.block.timestamp;
  entity.blockNumber = event.block.number;

  UniqueCollectibleTemplate.create(event.params.collection);
  NonUniqueCollectibleTemplate.create(event.params.collection);

  entity.save();
}

export function handleRoyaltyFeeUpdate(event: RoyaltyFeeUpdate): void {
  const entity = new RoyaltyFee(event.transaction.hash.toHex());

  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.collection = event.params.collection.toHex();
  entity.setter = event.params.setter.toHex();
  entity.receiver = event.params.receiver.toHex();
  entity.fee = event.params.fee.toString();
  entity.save();
}

export function handleNFTRoyaltyFeeUpdate(event: NFTRoyaltyFeeUpdate): void {
  const entity = new NFTRoyaltyFee(event.transaction.hash.toHex());

  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.tokenId = event.params.tokenId.toString();
  entity.setter = event.params.setter.toHex();
  entity.receiver = event.params.receiver.toHex();
  entity.fee = event.params.fee.toString();
  entity.save();
}

export function handleOrderCancelled(event: OrderCancelled): void {
  const entity = new Order(event.transaction.hash.toHex());

  entity.price = "0";
  entity.sellHash = "";
  entity.buyHash = "";
  entity.cancelHash = event.params.hash.toHex();
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleOrdersMatched(event: OrdersMatched): void {
  const entity = new Order(event.transaction.hash.toHex());

  entity.price = event.params.price.toString();
  entity.sellHash = event.params.sellHash.toHex();
  entity.buyHash = event.params.buyHash.toHex();
  entity.cancelHash = "";
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleTransfer(event: Transfer): void {
  const collectible = new Collectible(
    event.transaction.hash.toHex() + event.params.from.toHex()
  );

  collectible.timestamp = event.block.timestamp;
  collectible.blockNumber = event.block.number;
  collectible.tokenId = event.params.tokenId;
  collectible.collection = event.address.toHex();
  collectible.from = event.params.from.toHex();
  collectible.to = event.params.to.toHex();
  collectible.tx = event.transaction.hash.toHex();
  collectible.amount = "1";

  collectible.save();
}

export function handleTransferSingle(event: TransferSingle): void {
  const collectible = new Collectible(
    event.transaction.hash.toHex() + event.params.from.toHex()
  );

  collectible.timestamp = event.block.timestamp;
  collectible.blockNumber = event.block.number;
  collectible.tokenId = event.params.id;
  collectible.collection = event.address.toHex();
  collectible.from = event.params.from.toHex();
  collectible.to = event.params.to.toHex();
  collectible.tx = event.transaction.hash.toHex();
  collectible.amount = event.params.value.toString();

  collectible.save();
}
