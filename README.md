# Subgraph

## Description
Define subgraph for crawling data from blockchain.

## Subgraph commands
- Refer from project guide ([Refer Link](https://thegraph.com/docs/en/))

Install Graph CLI using NPM
```bash
npm install -g @graphprotocol/graph-cli
```
Install Graph CLI using Yarn
```bash
yarn global add @graphprotocol/graph-cli
```

Authenticate in CLI
```bash
graph auth --studio [api key]
```

Build subgraph
```bash
graph codegen && graph build
```

Deploy subgraph
```bash
graph deploy --studio test-sub
```

## Project guides
### Update ./subgraph.yaml file
Items to update each time build~deploy:
- network: set <strong>cli name</strong> of network ([Refer Link](https://thegraph.com/docs/en/developing/supported-networks/))
- source/address: set appropriate address of contract that deployed on the network.
- source/startBlock: set block number

Refer content of [./subgraph.yaml] file
```shell
dataSources:
  - kind: ethereum
    name: AddCollectionSC
    network: polygon-amoy
    source:
      address: "0xf499483d090dd097010B659dc29db83FB143A00e"
      abi: AddCollectionSC
      startBlock: 5960501
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Collection
      abis:
        - name: AddCollectionSC
          file: ./abis/AddCollectionSC.json
      eventHandlers:
        - event: AddCollection(address)
          handler: handleAddCollection
      file: ./src/mapping.ts
```