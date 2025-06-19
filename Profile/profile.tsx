import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image
             source={{ uri: 'https://i.imgur.com/your-avatar.png' }}
              style={styles.avatar}
            />
            <View style={styles.avatarBadge}>
              <Text style={styles.plus}>＋</Text>
            </View>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userId}>ID123456</Text>
            <Text style={styles.userSubId}>
              User ID: <Text style={styles.userIdHighlight}>682d4020b3872500407ac8e5</Text>
            </Text>
            <Text style={styles.joinDate}>Tham gia từ: 21 May 2025</Text>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editIcon}>✏️</Text>
          </TouchableOpacity>
        </View>

      

        {/* Menu */}
        <View style={styles.menuSection}>
          {[
            'Lịch sử giao dịch',
            'Yêu thích',
            'Cài đặt chung',
            'Góp ý',
            'Về chúng tôi',
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  scrollContainer: { padding: 16, paddingBottom: 100 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  avatarContainer: {
    marginRight: 12,
    position: 'relative',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#444',
  },
  avatarBadge: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    backgroundColor: '#00d100',
    borderRadius: 10,
    paddingHorizontal: 4,
  },
  plus: {
    color: '#fff',
    fontSize: 12,
  },
  userInfo: {
    flex: 1,
  },
  userId: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userSubId: {
    color: '#999',
    fontSize: 12,
    marginTop: 2,
  },
  userIdHighlight: {
    color: '#f60',
  },
  joinDate: {
    color: '#777',
    fontSize: 12,
    marginTop: 2,
  },
  editBtn: {
    padding: 8,
  },
  editIcon: {
    fontSize: 16,
    color: '#aaa',
  },

  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  starsLeft: {
    flex: 1,
  },
  noStars: {
    color: '#ffa500',
    fontWeight: 'bold',
  },
  rechargeBtn: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  rechargeText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  voucherContainer: {
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  voucherText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  subNote: {
    color: '#999',
    fontSize: 12,
  },

  menuSection: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  menuText: {
    color: '#fff',
    fontSize: 15,
  },

  logoutBtn: {
    backgroundColor: '#222',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#111',
    flexDirection: 'row',
    borderTopColor: '#222',
    borderTopWidth: 1,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  navText: {
    color: '#aaa',
    fontSize: 13,
  },
  activeNav: {
    color: 'orange',
    fontWeight: 'bold',
  },
});
