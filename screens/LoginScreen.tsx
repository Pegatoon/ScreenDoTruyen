import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../Navigation/types';
import auth from '@react-native-firebase/auth';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ email và mật khẩu');
      return;
    }
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        Alert.alert('Thành công', 'Đăng nhập thành công!');
        navigation.replace('Main');
      })
      .catch((error) => {
        Alert.alert('Lỗi đăng nhập', error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Đăng nhập tài khoản Pegatoon</Text>

      <View style={styles.socialContainer}>
        <FontAwesome name="facebook" size={32} color="#3b5998" />
        <FontAwesome name="google" size={32} color="#DB4437" />
      </View>

      <Text style={styles.orText}>hoặc tiếp tục với</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => { /* chuyển focus sang mật khẩu nếu muốn */ }}
      />
      <TextInput
        placeholder="Mật khẩu"
        style={styles.input}
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        returnKeyType="done"
        onSubmitEditing={handleLogin}
      />

      <TouchableOpacity
        style={[styles.loginButton, loading && { opacity: 0.6 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.loginText}>{loading ? 'Đang đăng nhập...' : 'ĐĂNG NHẬP'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        Bằng cách đăng nhập, bạn đồng ý với{' '}
        <Text style={styles.linkText}>Điều khoản</Text> và{' '}
        <Text style={styles.linkText}>Chính sách riêng tư</Text>.
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginTexts}>
          Chưa có tài khoản? <Text style={{ color: 'red' }}>Đăng ký</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 14,
    color: '#555',
  },
  socialContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#888',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#f5533d',
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginTexts: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
  forgotText: {
    color: '#f5533d',
    textAlign: 'center',
    marginVertical: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#007AFF',
  },
});
