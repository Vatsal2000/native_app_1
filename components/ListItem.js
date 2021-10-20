import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, increaseRented, decreaseRented}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-icons.flaticon.com/png/512/807/premium/807303.png?token=exp=1634720820~hmac=6488707cc87a07cff77b16d2873cae16',
          }}
        />
        <View style={styles.info}>
          <View style={{textAlign: 'center'}}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={styles.numbers}>
            <Text>Available: {item.available}</Text>
          </View>
          <View style={styles.numbers}>
            <Text>Rented: {item.rented}</Text>
          </View>
          <View style={styles.action}>
            <Icon name="plus" onPress={() => increaseRented(item.id)} />
            <Text caption> {item.rented} </Text>
            <Icon name="minus" onPress={() => decreaseRented(item.id)} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },

  image: {
    borderRadius: 20,
    flex: 1,
    height: 100,
  },
  info: {
    flex: 2,
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  numbers: {
    marginLeft: 16,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ListItem;
