import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// 일기 목록, 일기작성에 관한것
interface diaryContentType{
  id: string;
  title: string;
  content: string;
}
interface diaryType {
    groupList: Array<string>;
    diaryList: Array<diaryContentType>;
    diaryInfo: {
        id: string;
        title: string;
        content: string;
    },
    diaryNew: {
        title: string;
        content: string;
    };
}

const initialState: diaryType = {
    groupList: [],
    diaryList: [],
    diaryInfo:{
        id: '',
        title: '',
        content: '',
    },
    diaryNew:{
        title: '',
        content: '',
    }
  };

const diarySlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setGroupList: (state, action: PayloadAction<Array<string>>) => {
      state.groupList= action.payload
    },
    setDiaryList: (state, action: PayloadAction<Array<diaryContentType>>) => {
      state.diaryList = action.payload;
    },
    setDiaryInfo: (state, action: PayloadAction<{ id: string, title: string, content: string }>) => {
      state.diaryInfo = {
        ...action.payload
      };
    },
    setDiaryNew: (state, action: PayloadAction<{ title: string, content: string}>) => {
        state.diaryNew = {
            ...action.payload
        }
    }
  },
  extraReducers: (builder) => {},
});

export const diaryReducer = diarySlice.reducer;
export const diaryAction = diarySlice.actions;
export default diarySlice; 