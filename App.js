import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Excavators',
      rented: 10,
      available: 5,
    },
    {
      id: 2,
      name: 'Bulldozers',
      rented: 10,
      available: 5,
    },
    {
      id: 3,
      name: 'Dumpers',
      rented: 10,
      available: 5,
    },
    {
      id: 4,
      name: 'Cranes',
      rented: 10,
      available: 5,
    },
    {
      id: 5,
      name: 'Forklifts',
      rented: 10,
      available: 5,
    },
    {
      id: 6,
      name: 'Concrete Mixers',
      rented: 10,
      available: 5,
    },
  ]);

  const increaseRented = id => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === id
          ? {
              id: item.id,
              name: item.name,
              available: item.available - 1,
              rented: item.rented + 1,
            }
          : item,
      );
    });
  };

  const decreaseRented = id => {
    setItems(prevItems => {
      return prevItems.map(item =>
        item.id === id
          ? {
              id: item.id,
              name: item.name,
              available: item.available + 1,
              rented: item.rented - 1,
            }
          : item,
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Equipment List" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            increaseRented={increaseRented}
            decreaseRented={decreaseRented}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
