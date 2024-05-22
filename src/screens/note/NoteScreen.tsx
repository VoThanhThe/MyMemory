import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../contants/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemNote from '../../Item/ItemNote';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NoteScreen = () => {
  const DATA = [
    {
      id: '1',
      title: 'Title 1',
      content: 'Content 1',
      image: '',
      bgColor: 'red',
    },
    {
      id: '2',
      title: 'Title 2',
      content: 'Content 1',
      image: '',
      bgColor: 'yellow',
    },
    {
      id: '3',
      title: 'Title 3',
      content: 'Content 1',
      image: '',
      bgColor: 'blue',
    },
    {
      id: '4',
      title: 'Title 4',
      content: 'Content 1',
      image: '',
      bgColor: 'green',
    },
    {
      id: '5',
      title: 'Title 5',
      content: 'Content 1',
      image: '',
      bgColor: 'pink',
    },
  ];
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
      style={[styles.container]}
      contentContainerStyle={{paddingTop: 50}}>
      <View style={[styles.row]}>
        <Text style={[styles.header]}>Note</Text>
        <Ionicons name="menu" size={30} color={Colors.LIGTH_COLOR.BLACK} />
      </View>
      <View style={{height: 1500}}>
        <FlatList
          contentContainerStyle={{gap: 8, marginTop: 20}}
          data={DATA}
          numColumns={2}
          renderItem={({item}) => <ItemNote item={item} />}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGTH_COLOR.BACKGROUND,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.BLACK,
  },
});
