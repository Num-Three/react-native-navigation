import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100
  },
  imageContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  },
  header: {
    fontSize: 24,
  },
  item: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 10
  },
  itemName: {
    fontSize: 16,
    fontWeight: 600,
  }
});