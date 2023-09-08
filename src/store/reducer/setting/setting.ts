import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface settingType {
  // 로그인 여부
  isLoginSuccess: boolean;
  loginId: string;

  // snackbar 관련
  snackbar: {
    snackbarOpen: boolean;
    snackbarType: string;
    snackbarMessage: string;
  };
}

const initialState: settingType = {
  isLoginSuccess: false,
  loginId: "",
  snackbar: {
    snackbarOpen: false,
    snackbarType: 'error',
    snackbarMessage: ''
  }
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setIsLoginSuccess: (state, action: PayloadAction<boolean>) => {
      state.isLoginSuccess = action.payload;
    },
    setLoginId: (state, action: PayloadAction<string>) => {
      state.loginId = action.payload;
    },
    setSnackbar: (state, action: PayloadAction<{ snackbarOpen: boolean; snackbarType: string; snackbarMessage: string }>) => {
      state.snackbar = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const settingReducer = settingSlice.reducer;
export const settingAction = settingSlice.actions;
export default settingSlice; // 리듀서 모듈을 내보냅니다.