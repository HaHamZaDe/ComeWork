import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobsCard.style';

const JobsCard = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onSelect}>
      <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.company}>{props.company}</Text>
        <View style={styles.locations_container}>
          <Text style={styles.locations}>{props.locations}</Text>
        </View>
        <Text style={styles.levels}>{props.levels}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobsCard;
