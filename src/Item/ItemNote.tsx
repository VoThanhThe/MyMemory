import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemNote = ({item}: any) => {
  return (
    <View style={[styles.container, {backgroundColor: item.bgColor}]}>
      <Text style={[styles.title]}>{item.title}</Text>
      <Text style={[styles.content]}>{item.content}</Text>
    </View>
  );
};

export default ItemNote;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 200,
    backgroundColor: 'red',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: '1%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
