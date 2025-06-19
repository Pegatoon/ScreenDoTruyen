import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Platform
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';

export default function AccountScreen() {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState(null);
  const [email] = useState('phucvantran098@gmail.com');
  const [birthDate, setBirthDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

const pickImage = async () => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    maxWidth: 512,
    maxHeight: 512,
    quality: 0.7,
    includeBase64: false,
  });

  if (result.didCancel) return;
  if (result.assets && result.assets.length > 0) {
    setAvatar(result.assets[0].uri);
  }
};

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);

  const handleConfirm = (selectedDate) => {
    const dateObj = new Date(selectedDate);
    setBirthDate(dateObj);
    hideDatePicker();
  };

  const formatDate = (date) => {
    try {
      return date.toLocaleDateString('vi-VN');
    } catch {
      return date.toDateString(); // fallback
    }
  };

  const handleSubmit = () => {
    if (!username || !gender || !birthDate) {
      Alert.alert('Thiếu thông tin', 'Vui lòng điền đầy đủ các trường.');
      return;
    }

    const info = {
      avatar,
      username,
      gender,
      email,
      birthDate: formatDate(birthDate),
    };

    console.log('Thông tin tài khoản:', info);
    Alert.alert('Thành công', 'Thông tin đã được lưu!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tài khoản</Text>

      <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
        <Image
          source={
            avatar
              ? { uri: avatar }
              : require('./assets/default-avatar.png')
          }
          style={styles.avatar}
        />
        <View style={styles.editIcon}>
          <Text style={styles.editText}>✏️</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.label}>Tên tài khoản</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        maxLength={20}
        placeholder="Vui lòng nhập tối đa 20 ký tự"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Giới tính</Text>
      <View style={styles.pickerWrapper}>
        <RNPickerSelect
          value={gender}
          onValueChange={(value) => setGender(value)}
          items={[
            { label: 'Nam', value: 'Nam' },
            { label: 'Nữ', value: 'Nữ' },
            { label: 'Khác', value: 'Khác' },
          ]}
          placeholder={{ label: 'Chọn', value: null }}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
        />
      </View>

      <Text style={styles.label}>E-mail của bạn</Text>
      <TextInput
        style={[styles.input, { color: '#888' }]}
        value={email}
        editable={false}
      />

      <Text style={styles.label}>Sinh nhật của bạn</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.input}>
        <Text style={{ color: birthDate ? '#fff' : '#aaa' }}>
          {birthDate ? formatDate(birthDate) : 'Chọn ngày sinh'}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
        locale="vi"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Thoát')} style={styles.button}>
          <Text style={styles.buttonText}>Thoát</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={[styles.button, { backgroundColor: '#4CAF50' }]}>
          <Text style={styles.buttonText}>Đồng ý</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarContainer: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#333',
  },
  editIcon: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
  },
  editText: {
    fontSize: 12,
  },
  label: {
    color: '#fff',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#1f1f1f',
    padding: 12,
    borderRadius: 8,
    color: '#fff',
    marginBottom: 15,
  },
  pickerWrapper: {
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    flex: 1,
    backgroundColor: '#FF5722',
    padding: 14,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    color: '#fff',
    padding: 12,
  },
  inputAndroid: {
    color: '#fff',
    padding: 12,
  },
};
