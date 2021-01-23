/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
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
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
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
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
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
export const createFoodItem = /* GraphQL */ `
  mutation CreateFoodItem(
    $input: CreateFoodItemInput!
    $condition: ModelFoodItemConditionInput
  ) {
    createFoodItem(input: $input, condition: $condition) {
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
export const updateFoodItem = /* GraphQL */ `
  mutation UpdateFoodItem(
    $input: UpdateFoodItemInput!
    $condition: ModelFoodItemConditionInput
  ) {
    updateFoodItem(input: $input, condition: $condition) {
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
export const deleteFoodItem = /* GraphQL */ `
  mutation DeleteFoodItem(
    $input: DeleteFoodItemInput!
    $condition: ModelFoodItemConditionInput
  ) {
    deleteFoodItem(input: $input, condition: $condition) {
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
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
