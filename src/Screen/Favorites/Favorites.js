import React from 'react';
import {FlatList} from 'react-native';

import FavoritedCard from '../../Components/FavoritedCard';

import {useDispatch, useSelector} from 'react-redux';

const Favorites = () => {
  const data = useSelector(state => state.JobDetail);

  const dispatch = useDispatch();

  const renderFavorites = ({item}) => (
    <FavoritedCard
      mydata={item}
      onSelect={() => {
        dispatch({type: 'DELETE_FAVORITED', payload: {item}});
      }}
    />
  );

  return (
    <FlatList
      style={{backgroundColor: '#FFA000'}}
      keyExtractor={item => item.id}
      data={data}
      renderItem={renderFavorites}
    />
  );
};

export default Favorites;
