import React from 'react';
import {View, Text, ScrollView, Alert, Dimensions} from 'react-native';
import styles from './DetailCard.style';
import RenderHTML from 'react-native-render-html';

import Button from '../Button';

const DetailCard = ({detail, onClick}) => {
  const width = Dimensions.get('window').width;
  const handleSubmit = () => {
    Alert.alert(
      'ComeWork',
      'Your job application has been successfully submitted!',
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.name}>{detail.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location_text}>Locations: </Text>
          <Text style={styles.location_name}>{detail.locations[0].name}</Text>
        </View>
        <View style={styles.level_container}>
          <Text style={styles.level_text}>Job Level: </Text>
          <Text style={styles.level_name}>{detail.levels[0].name}</Text>
        </View>
        <Text style={styles.header_text}>Job Details</Text>
        <View style={styles.contents}>
          <RenderHTML
            source={{html: `${detail.contents}`}}
            contentWidth={width}
          />
        </View>
        <View style={styles.button}>
          <Button name="Submit" icon="logout" onSelect={handleSubmit} />
          <Button name="Favorite Job" icon="favorite" onSelect={onClick} />
        </View>
      </ScrollView>
    </View>
  );
};
export default DetailCard;
