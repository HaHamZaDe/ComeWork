import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './FavoritedCard.style';

const FavoritedCard = ({mydata, onSelect}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {mydata.name.length > 30
            ? mydata.name.slice(0, 30) + '..'
            : mydata.name}
        </Text>
        <Text>{mydata.company.name}</Text>
        <View style={styles.inner_container}>
          <Text style={styles.location}>{mydata.locations[0].name}</Text>
        </View>
        <Text style={styles.levels}>{mydata.levels[0].name}</Text>
        <TouchableOpacity style={styles.remove} onPress={onSelect}>
          <Text style={styles.removetxt}>Remove</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FavoritedCard;
