import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../../context/AppContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SaveListCoinRate from '../../component/SaveListCoinRate';
import {MyTabs} from '../../navigation/MyTab';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../contants/Theme';
import {DATA_CATEGORIES} from '../../contants/DataCategories';
import {DATA_LOCATION} from '../../contants/DataLocations';
import ItemCategories from '../../Item/ItemCategories';
import ItemLocation from '../../Item/ItemLocation';
import ModalSearch from '../modal/ModalSearch';

export interface CoinRate {
  name: string;
  usd: number;
  usd_24h_change: number;
}

const HomeScreen = ({navigation}: any) => {
  const {balance, setBalance, tokenInfo} = useContext(AppContext)!;
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleSearchModal = () => {
    setModalVisible(true);
  };
  async function fetchData() {
    try {
      const response = await axios.get(
        'https://661908fe9a41b1b3dfbead32.mockapi.io/users',
      );
      if (response.status === 200) {
        const data = response.data;
        setData(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Icon name="menu" color={Colors.LIGTH_COLOR.PRIMARY} size={30} />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://cdn.dribbble.com/userupload/9513834/file/original-fd608320bdfc9fdad9dd2fd8dcd616ee.jpeg?resize=2048x1535',
            }}
          />
        </View>
        <Text style={[styles.title, {marginTop: 10}]}>Halo, Tony</Text>
        <Text style={[styles.title, {color: Colors.LIGTH_COLOR.BLACK}]}>
          Where you would like to go?
        </Text>
        <TouchableOpacity style={{marginTop: 20}} onPress={handleSearchModal}>
          <View style={[styles.row]}>
            <View style={styles.input}>
              <Text style={styles.textInput}>Find Your Location</Text>
            </View>
            <View style={styles.search}>
              <Icon name="search" color={Colors.LIGTH_COLOR.WHITE} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <FlatList
            contentContainerStyle={{paddingVertical: 10}}
            data={DATA_CATEGORIES}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item}) => <ItemCategories item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={[styles.row]}>
          <Text style={[styles.title, {color: Colors.LIGTH_COLOR.BLACK}]}>
            New Location
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.title,
                {color: Colors.LIGTH_COLOR.GRAY, fontSize: 16},
              ]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{paddingVertical: 10}}
          data={DATA_LOCATION}
          renderItem={({item}: any) => (
            <ItemLocation item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          // horizontal = {true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
        />

        <View style={[styles.row]}>
          <Text style={[styles.title, {color: Colors.LIGTH_COLOR.BLACK}]}>
            Top location
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.title,
                {color: Colors.LIGTH_COLOR.GRAY, fontSize: 16},
              ]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{paddingVertical: 10}}
          data={DATA_LOCATION}
          renderItem={({item}: any) => (
            <ItemLocation item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          // horizontal = {true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('NoteScreen')}
        style={[styles.btnNext]}>
        <Icon name="arrow-forward" size={24} color={Colors.LIGTH_COLOR.WHITE} />
      </TouchableOpacity>
      <ModalSearch visible={modalVisible} closeModal={handleCloseModal} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFBF6',
    paddingHorizontal: 25,
    position: 'relative',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.PRIMARY,
    textAlign: 'left',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7BC9FF',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
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
  },
  textInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.GRAY,
  },
  search: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: Colors.LIGTH_COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNext: {
    width: 60,
    height: 60,
    backgroundColor: Colors.LIGTH_COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 40,
    right: 25,
    zIndex: 100,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
