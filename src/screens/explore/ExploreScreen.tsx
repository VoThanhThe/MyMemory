import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  Animated,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import Icon from'react-native-vector-icons/Ionicons';
import { Colors } from '../../contants/Theme';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const imageW = WIDTH * 0.7;
const imageH = HEIGHT * 1.54;
const ExploreScreen = ({navigation}: any) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const data = [
    'https://cdn.dribbble.com/users/9693173/screenshots/17196561/media/10da62ed1e94174b5a5c61329f24bb18.jpeg?resize=1600x1200&vertical=center',
    'https://cdn.dribbble.com/users/1196099/screenshots/17536599/media/70439e1a9fd24a6eb1954211a5c579e6.png?resize=1600x1200&vertical=center',
    'https://cdn.dribbble.com/users/12322309/screenshots/18893294/media/0f64682aa401e2e2a179cea86ae326f6.jpg?resize=1600x1200&vertical=center',
    'https://cdn.dribbble.com/users/12322309/screenshots/19996541/media/a2f8d22bcc030de84fe7de73c769845e.jpg?resize=1600x1200&vertical=center',
    'https://cdn.dribbble.com/userupload/9833423/file/original-e0185b520ef90651b95ca4319e76ab66.png?resize=752x564',
    'https://cdn.dribbble.com/users/44324/screenshots/10486077/media/aacec07283a425e68bd10d5cd07e0776.jpg?resize=1600x1200&vertical=center',
    'https://cdn.dribbble.com/userupload/9402995/file/original-df9ada6f3edaa3b4c2b173070ee41638.jpg?resize=1504x1128',
    'https://cdn.dribbble.com/userupload/13883530/file/original-a032e691bfbdb4b04e48c1e3350e6aec.jpeg?resize=1024x1024',
    'https://cdn.dribbble.com/users/546004/screenshots/13677474/media/98b4f84f270aa3ada098ab932975e8eb.jpg?resize=800x600&vertical=center',
    'https://cdn.dribbble.com/userupload/11796469/file/original-a7e2a64cbc031fe7f0676ef4365daf20.jpg?resize=1504x1504',
    'https://cdn.dribbble.com/userupload/14321307/file/original-1b517f95dcd884b634d3ca48b26873fd.jpg?resize=752x1337',
    'https://cdn.dribbble.com/userupload/10397368/file/original-26e3e8026cd11cdc1d25acbebda451b1.png?resize=600x600',
    'https://cdn.dribbble.com/userupload/3264504/file/original-8c8bc52f7a6774d092bdc92406ac4aea.jpg?resize=2048x1536',
  ];
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * WIDTH,
            index * WIDTH,
            (index + 1) * WIDTH,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              source={{uri: image}}
              key={`image-${index}`}
              style={[StyleSheet.absoluteFillObject, {opacity}]}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={index => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              width: WIDTH,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 5,
            }}>
            <Image source={{uri: item}} style={styles.image} />
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('NoteScreen')}
        style={[styles.btnNext]}>
        <Icon name="arrow-forward" size={24} color={Colors.LIGTH_COLOR.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },btnNext: {
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
});
