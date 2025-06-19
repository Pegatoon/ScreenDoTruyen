import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const HistoryRoute = () => (
  <View style={styles.content}>
    <Text>Lịch sử đọc truyện</Text>
    {/* Thêm nội dung hoặc danh sách truyện đã đọc ở đây */}
  </View>
);

const FollowRoute = () => (
  <View style={styles.content}>
    <Text>Truyện đang theo dõi</Text>
    {/* Thêm danh sách truyện đang theo dõi */}
  </View>
);

const DownloadRoute = () => (
  <View style={styles.content}>
    <Text>Truyện đã tải xuống</Text>
    {/* Thêm danh sách truyện offline */}
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const BookshelfScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'history', title: 'Lịch sử' },
    { key: 'follow', title: 'Theo dõi' },
    { key: 'download', title: 'Tải xuống' },
  ]);

  const renderScene = SceneMap({
    history: HistoryRoute,
    follow: FollowRoute,
    download: DownloadRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#121212' }}
          labelStyle={{ color: 'white', fontWeight: '600' }}
          activeColor="#fff"
          inactiveColor="#888"
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookshelfScreen;
