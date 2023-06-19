const types = {
  addRef: "add-ref-to-video",
  addMark: "add-new-mark",
  deleteMark: "delete-mark",
  changeVideo: "change-video"
};

const initialValues = {
  url: "https://www.youtube.com/watch?v=oCqIr1v7t7Q",
  marks: [
    500,
    2,
    98,
    23,
  ],
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
      return {
        ...state,
      }

    default:
      return state;
  }
};

export { initialValues, types };

export default storeReducer;