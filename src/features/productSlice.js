import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../serverUrl";

const initialState = {
  product: [],
  loading: false,
};

export const fetchProduct = createAsyncThunk(
  "fetch/product",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/Product`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const patchProd = createAsyncThunk('patch/product', async ({ id, priceStart }, thunkAPI) => {
  try {
    await fetch(`${serverUrl}/Product/pat/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ priceStart: priceStart })
    });
    return { id, priceStart };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

export const addUserLikeAuictionMember = createAsyncThunk('patch/addUserLikeMember', async ({id, userId}, thunkAPI) => {
  try {
    const res = await fetch(`${serverUrl}/Product/members/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({userId})
    });

    const data = await res.json();
    return { data }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

export const addProductForWinnerUser = createAsyncThunk('patch/addProductForWinnerUser', async ({id, productId}, thunkAPI) => {
    try {
     const res = await fetch(`${serverUrl}/user/buy/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({productId})
      })

      const data = await res.json();
      return { data }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
})

export const patchUser = createAsyncThunk('patch/user', async ({ id, bet }, thunkAPI) => {
  try {
    const res = await fetch(`${serverUrl}/Product/arr/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ bet: bet })
    });
    const data = await res.json();
    return { id, data }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload;
      })
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(patchProd.fulfilled, (state, action) => {
        state.product.map((item) => {
          if (item._id === action.payload.id) {
            return item.priceStart = action.payload.priceStart;
          }
          return item;
        })
      })
      .addCase(patchUser.fulfilled, (state, action) => {
        state.product.map((item) => {
          if (item._id === action.payload.id) {
            return item.bet = action.payload.data.bet;
          }
          return item;
        })
      })
  },
});

export default productSlice.reducer;