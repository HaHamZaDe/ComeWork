import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailCard from '../../Components/DetailCard/DetailCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

const Detail = ({route, navigation}) => {
  const jobsDetailId = useSelector(state => state.JobDetail);
  const {item} = route.params;
  const {loading, data, error} = useFetch(Config.DETAIL_API_URL + item.id);
  const dispatch = useDispatch();

  const handleJobsDetailSelect = () => {
    if (jobsDetailId.some(job => job.id === item.id)) {
      Alert.alert('Error', 'Job has already been added to favorites');
    } else {
      dispatch({type: 'ADD_FAVORITED', payload: {data}});
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <DetailCard
      detail={data}
      onClick={() => {
        handleJobsDetailSelect();
      }}
    />
  );
};

export default Detail;
