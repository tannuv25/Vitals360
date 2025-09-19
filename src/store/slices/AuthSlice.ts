import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // or fetch, but axios is easier

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

// 🔹 Async thunk to call backend login API
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);

      // backend should return something like: { user, token }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    updateUser: (state, action: PayloadAction<Partial<AuthState["user"]>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
  // 🔹 handle async actions
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (
          state,
          action: PayloadAction<{ user: AuthState["user"]; token: string }>
        ) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Action creators
export const { logout, updateUser } = authSlice.actions;

export default authSlice.reducer;
