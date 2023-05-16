import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 7,
    backgroundColor: '#ffe5cc',
    borderWidth: 1,
    borderColor: '#e60020',
    borderRadius: 10,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    color: 'black',
    margin: 2,
  },
  locations_container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e60020',
    backgroundColor: '#e60020',
    padding: 5,
    alignSelf: 'baseline',
  },
  locations: {
    color: 'white',
    fontWeight: 'bold',
  },
  levels: {
    alignSelf: 'flex-end',
    marginRight: 5,
    color: '#e60020',
    fontWeight: 'bold',
  },
});
