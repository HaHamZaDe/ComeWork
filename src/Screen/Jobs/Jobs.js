import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import JobsCard from '../../Components/JobsCard/JobsCard';

const Jobs = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.JOBS_API_URL);

  const renderJobsItem = ({item}) => (
    <JobsCard
      name={item.name}
      company={item.company.name}
      locations={item.locations[0].name}
      levels={item.levels[0].name}
      onSelect={() => handleJobsSelect(item)}
    />
  );
  const handleJobsSelect = item => {
    navigation.navigate('Detail', {item});
  };

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <SafeAreaView style={{backgroundColor: '#FFA000'}}>
      <FlatList
        data={data.results}
        renderItem={renderJobsItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Jobs;
