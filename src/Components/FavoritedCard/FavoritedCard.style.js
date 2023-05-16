import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e60020',
    backgroundColor: '#ffe5cc',
  },
  inner_container: {
    borderRadius: 13,
    backgroundColor: '#e60020',
    alignSelf: 'baseline',
    paddingLeft: 7,
    paddingRight: 7,
    marginTop: 5,
  },
  location: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  levels: {
    flex: 1,
    marginTop: 5,
    marginRight: 10,
    alignItems: 'flex-end',
    color: '#e60020',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  remove: {
    margin: 10,
    backgroundColor: '#e60020',
    padding: 8,
    borderRadius: 7,
    alignItems: 'center',
  },
  removetxt: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
