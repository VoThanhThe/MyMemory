import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../contants/Theme';

const SearchScreen = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.row]}>
        <TextInput style={styles.input} placeholder="Find location" placeholderTextColor={Colors.LIGTH_COLOR.GRAY} />
        <View style={styles.search}>
          <Icon name="search" color={Colors.LIGTH_COLOR.WHITE} size={30} />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25
  },
  input: {
    width: '80%',
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 20,
    backgroundColor: Colors.LIGTH_COLOR.WHITE,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,

    elevation: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.BLACK,
  },
  textInput: {},
  search: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: Colors.LIGTH_COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
});
