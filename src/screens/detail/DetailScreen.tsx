import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../contants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailScreen = ({route, navigation}: any) => {
  const {item} = route.params;
  return (
    <View style={[styles.container]}>
      <View style={[styles.row, styles.header]}>
        <TouchableOpacity style={[styles.buttonHeader]} onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back"
            size={40}
            color={Colors.LIGTH_COLOR.WHITE}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonHeader]}>
          <Icon
            name="bookmark-outline"
            size={30}
            color={Colors.LIGTH_COLOR.WHITE}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.card]}>
        <View style={[styles.cardBox]}>
          <Image
            style={[styles.image]}
            source={{
              uri: item.imageURL,
            }}
          />
          <View style={{paddingVertical: 20}}>
            <Text style={[styles.title]}>{item.name}</Text>
            <View style={[styles.row, {marginTop: 25}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="star" color={Colors.LIGTH_COLOR.YELLOW} size={30} />
                <Text
                  style={[
                    styles.information,
                    {color: Colors.LIGTH_COLOR.YELLOW},
                  ]}>
                  4.5
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="cloud" color={Colors.LIGTH_COLOR.GRAY} size={30} />
                <Text style={[styles.information]}>30oC</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="location-outline"
                  color={Colors.LIGTH_COLOR.GRAY}
                  size={30}
                />
                <Text style={[styles.information]}>{item.country}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.row]}>
          <Text style={[styles.title, {color: Colors.LIGTH_COLOR.PRIMARY}]}>
            Overview
          </Text>
          <Text style={[styles.title, {color: Colors.LIGTH_COLOR.GRAY}]}>
            Photos
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{position: 'relative', marginTop: 30}}>
          <Text style={[styles.description]}>{item.description}</Text>
        </ScrollView>
      </View>
      <TouchableOpacity style={[styles.button]}>
        <Icon name="chevron-forward" size={20} color={Colors.LIGTH_COLOR.GRAY} />
        <Icon
          name="chevron-forward"
          size={20}
          color={Colors.LIGTH_COLOR.GRAY_LIGTH}
        />
        <Icon name="chevron-forward" size={20} color={Colors.LIGTH_COLOR.WHITE} />
        <Text
          style={[
            styles.title,
            {color: Colors.LIGTH_COLOR.WHITE, paddingHorizontal: 5},
          ]}>
          Book Now
        </Text>
        <Icon name="chevron-back" size={20} color={Colors.LIGTH_COLOR.WHITE} />
        <Icon
          name="chevron-back"
          size={20}
          color={Colors.LIGTH_COLOR.GRAY_LIGTH}
        />
        <Icon name="chevron-back" size={20} color={Colors.LIGTH_COLOR.GRAY} />
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGTH_COLOR.PRIMARY,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'stretch',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.BLACK,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    height: '90%',
    borderRadius: 25,
    backgroundColor: Colors.LIGTH_COLOR.GRAY_LIGTH,
    overflow: 'hidden',
  },
  cardBox: {
    width: '100%',
    borderRadius: 25,
    backgroundColor: Colors.LIGTH_COLOR.WHITE,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  information: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.LIGTH_COLOR.GRAY,
    marginLeft: 4,
  },
  description: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.LIGTH_COLOR.GRAY,
    textAlign: 'center',
    lineHeight: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    width: '100%',
    height: '10%',
    backgroundColor: Colors.LIGTH_COLOR.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttonHeader: {
    width: 60,
    height: 60,
    backgroundColor: Colors.LIGTH_COLOR.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    right: 25,
    left: 25,
    zIndex: 100,
  },
});
