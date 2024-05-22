import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../contants/Theme';

interface SearchModalProps {
  visible: boolean;
  closeModal: () => void;
}

const ModalSearch: React.FC<SearchModalProps> = ({visible, closeModal}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleClear = () => {
    setInputValue('');
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 50,
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={closeModal}>
            <Icon
              name="chevron-back"
              size={30}
              color={Colors.LIGTH_COLOR.BLACK}
            />
          </TouchableOpacity>
          <Text style={[styles.title]}>Search</Text>
          <Icon
            style={{opacity: 0}}
            name="chevron-back"
            size={30}
            color={Colors.LIGTH_COLOR.BLACK}
          />
        </View>
        <View style={[styles.row]}>
          <View style={{width: '80%'}}>
            <TextInput
              style={styles.input}
              placeholder="Find location"
              placeholderTextColor={Colors.LIGTH_COLOR.GRAY}
              autoFocus={true}
              value={inputValue}
              onChangeText={text => setInputValue(text)}
            />
            {inputValue.length > 0 ? (
              <TouchableOpacity style={[styles.buttonClose]} onPress={handleClear}>
                <Icon name="close" color={Colors.LIGTH_COLOR.BLACK} size={30} />
              </TouchableOpacity>
            ) : null}
          </View>

          <TouchableOpacity style={styles.search}>
            <Icon name="search" color={Colors.LIGTH_COLOR.WHITE} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#fff', // semi-transparent background
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    paddingLeft: 20,
    paddingRight: 50,
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.LIGTH_COLOR.BLACK,
    textAlign: 'center',
    lineHeight: 30,
  },
  buttonClose: {
    position: 'absolute',
    top: 13,
    right: 15,
  },
});

export default ModalSearch;
