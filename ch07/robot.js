const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

class Robot {
  constructor(parcels) {
    this.parcelsToPick = parcels 
    this.parcelsToDeliver = []
    this.currentPosition = null  // = starting node
  }

  makeDeliveries(map, parcels) {
    // for every node traversed
    checkForPickups().forEach(pickParcel)
    checkForDeliveries().forEach(deliverParcel)
    //
  }

  checkForPickups() {
    return this.parcelsToPick.filter(p => p.canBePicked(this.currentPosition))
  }

  checkForDeliveries() {
    return this.parcelsToDeliver.filter(p => p.canBeDelivered(this.currentPosition))
  }

  deliverParcel(parcel) {
      // removeParcelFromList  
  }

  pickParcel(parcel) {
      // setParcelAsPicked
  }
}

class Parcel {
  constructor(pickupNode, deliveryNode) {
    this.pickupNode = pickupNode
    this.recipientNode = recipientNode
  }

  canBePicked(position) {
    return this.pickupNode === position 
  }

  canBeDelivered(position) {
    return this.recipientNode === position
  }
}

class Map {
  constructor(nodes) {
    this.nodes = nodes
  }
}
