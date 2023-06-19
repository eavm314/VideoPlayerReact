const types = {
  addRef: "add-ref-to-video",
  addMark: "add-new-mark",
  deleteMark: "delete-mark",
  changeVideo: "change-video"
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.addRef:
      console.log("adding ref...");
      return {
        ...state,
        ref: action.payload,
      }

    case types.changeVideo:
      console.log("changing video");
      return {
        ...state,
        ...action.payload,
      }

    case types.addMark:
      return {
        ...state,
        marks: [
          ...state.marks,
          action.payload,
        ]

      }

    case types.deleteMark:
      console.log("deleting...");
      const newMarks = [...state.marks];
      newMarks.splice(action.payload,1);
      return {
        ...state,
        marks: newMarks,
      }

    default:
      return state;
  }
};

export { types };

export default storeReducer;