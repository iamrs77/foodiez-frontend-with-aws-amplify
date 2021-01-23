/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
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
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFoodItem = /* GraphQL */ `
  query GetFoodItem($id: ID!) {
    getFoodItem(id: $id) {
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
export const listFoodItems = /* GraphQL */ `
  query ListFoodItems(
    $filter: ModelFoodItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoodItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
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
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        userId
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const vendorByUserid = /* GraphQL */ `
  query VendorByUserid(
    $userId: String
    $sortDirection: ModelSortDirection
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vendorByUserid(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const foodItemByVendorid = /* GraphQL */ `
  query FoodItemByVendorid(
    $vendorId: String
    $sortDirection: ModelSortDirection
    $filter: ModelFoodItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    foodItemByVendorid(
      vendorId: $vendorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const cartItemByDate = /* GraphQL */ `
  query CartItemByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        userId
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const cartItemByStatus = /* GraphQL */ `
  query CartItemByStatus(
    $status: String
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartItemByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        userId
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
