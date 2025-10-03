import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const landsReducer = createReducer(initialState, (builder) => {
  builder
    // Create Land
    .addCase("landsCreateRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("landsCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.lands = action.payload;
      state.success = true;
    })
    .addCase("landsCreateFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    // Get all lands of seller
    .addCase("getAllLandsShopRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllLandsShopSuccess", (state, action) => {
      state.isLoading = false;
      state.lands = action.payload;
    })
    .addCase("getAllLandsShopFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Delete a land
    .addCase("deleteLandsRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteLandsSuccess", (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase("deleteLandsfailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Get all lands (admin or global)
    .addCase("getAllLandsRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllLandsSuccess", (state, action) => {
      state.isLoading = false;
      state.allLands = action.payload;
    })
    .addCase("getAllLandsFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Clear errors
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
