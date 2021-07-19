import React from "react";
import { combineReducers } from "redux";

const allSongsReducer = () => {
  return [
    {
      name: "macarena",
      duration: "2:06",
    },
    {
      name: "ibiza",
      duration: "2:56",
    },
    {
      name: "trumpets",
      duration: "9:06",
    },
    {
      name: "la la la",
      duration: "5:46",
    },
  ];
};

const selectedSongsReducer = (selectedSong = {}, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  allSongs: allSongsReducer,
  selectedSongs: selectedSongsReducer,
});
