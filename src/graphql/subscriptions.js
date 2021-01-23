/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor {
    onCreateVendor {
      id
      name
      foodType
      minPrice
      location
      deliveryTime
      userId
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor {
    onUpdateVendor {
      id
      name
      foodType
      minPrice
      location
      deliveryTime
      userId
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor {
    onDeleteVendor {
      id
      name
      foodType
      minPrice
      location
      deliveryTime
      userId
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFoodItem = /* GraphQL */ `
  subscription OnCreateFoodItem {
    onCreateFoodItem {
      id
      rating
      name
      description
      foodType
      cost
      vendorId
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFoodItem = /* GraphQL */ `
  subscription OnUpdateFoodItem {
    onUpdateFoodItem {
      id
      rating
      name
      description
      foodType
      cost
      vendorId
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFoodItem = /* GraphQL */ `
  subscription OnDeleteFoodItem {
    onDeleteFoodItem {
      id
      rating
      name
      description
      foodType
      cost
      vendorId
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem($owner: String!) {
    onCreateCartItem(owner: $owner) {
      id
      status
      foodItem {
        id
        rating
        name
        description
        foodType
        cost
        vendorId
        image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      userId
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem($owner: String!) {
    onUpdateCartItem(owner: $owner) {
      id
      status
      foodItem {
        id
        rating
        name
        description
        foodType
        cost
        vendorId
        image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      userId
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem($owner: String!) {
    onDeleteCartItem(owner: $owner) {
      id
      status
      foodItem {
        id
        rating
        name
        description
        foodType
        cost
        vendorId
        image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      userId
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
