const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITED':
      const {data} = action.payload;
      const added = [...state.JobDetail, data];
      return {...state, JobDetail: added};
    case 'DELETE_FAVORITED':
      const exData = action.payload.item;
      const newData = state.JobDetail.filter(data => data.id !== exData.id);
      return {...state, JobDetail: newData};
    default:
      return state;
  }
};
export default reducers;
