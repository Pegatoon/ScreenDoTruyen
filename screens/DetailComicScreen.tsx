import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

export default function DetailComicScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailComic'>>();
  const { user, comic } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleReadNow = () => {
    if (!comic || !comic.id || !comic.title) {
      Alert.alert('Lỗi', 'Thiếu thông tin truyện!');
      return;
    }
    navigation.navigate('ReadChapter', {
      comicId: comic.id,
      comicTitle: comic.title,
    });
  };

  return (  
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Image source={comic.image} style={styles.banner} />
        <TouchableOpacity
          style={styles.readButton}
          onPress={handleReadNow}
        >
          <Text style={styles.readButtonText}>ĐỌC NGAY</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{comic.title}</Text>
        <View style={styles.statsRow}>
          <Icon name="book-open-outline" size={18} color="#ccc" />
          <Text style={styles.statText}>24.8K lượt xem</Text>
        </View>

        <Text style={styles.label}>
          Tác giả: <Text style={styles.highlight}>Jaha</Text>
        </Text>
        <Text style={styles.label}>
          👤 Người đăng nhập: <Text style={styles.highlight}>{user.username}</Text>
        </Text>
        <Text style={styles.label}>
          📖 Mã truyện: <Text style={styles.highlight}>{comic.id}</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#000', flex: 1 },
  header: { position: 'relative' },
  banner: { width: width, height: (width * 9) / 16, resizeMode: 'cover' },
  readButton: {
    position: 'absolute',
    bottom: 12,
    right: 20,
    backgroundColor: '#ff5b2d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  readButtonText: { color: '#fff', fontWeight: 'bold' },
  content: { padding: 16 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  statsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  statText: { color: '#ccc', fontSize: 12, marginLeft: 4 },
  label: { color: '#ccc', fontSize: 14, marginBottom: 6 },
  highlight: { color: '#ff7a00' },
});
