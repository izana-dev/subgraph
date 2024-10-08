// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext,
} from "@graphprotocol/graph-ts";

export class NonUniqueCollectible extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("NonUniqueCollectible", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "NonUniqueCollectible",
      [address.toHex()],
      context,
    );
  }
}

export class UniqueCollectible extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("UniqueCollectible", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "UniqueCollectible",
      [address.toHex()],
      context,
    );
  }
}
