import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, StatusBar } from 'react-native';

const users = [
  { rank: 1, name: 'Bob', score: 82, change: +9, image: require('../../assets/profile_images/user1.png') },
  { rank: 2, name: 'Alice', score: 82, change: +6, image: require('../../assets/profile_images/user2.png') },
  { rank: 3, name: 'John Doe', score: 82, change: +3, image: require('../../assets/profile_images/john_doe.png') },
  { rank: 4, name: 'Diana', score: 82, change: +1, image: require('../../assets/profile_images/user4.png') },
  { rank: 5, name: 'Eve', score: 82, change: 0, image: require('../../assets/profile_images/user1.png') },
  { rank: 6, name: 'Charlie', score: 82, change: -2, image: require('../../assets/profile_images/user3.png') },
  { rank: 7, name: 'Grace', score: 82, change: -5, image: require('../../assets/profile_images/user2.png') },
  { rank: 8, name: 'Marion', score: 82, change: -7, image: require('../../assets/profile_images/user4.png') },
  { rank: 9, name: 'Dave', score: 82, change: -7, image: require('../../assets/profile_images/user3.png') },
];

const cities = [
  { rank: 1, name: 'Berlin', score: 245 },
  { rank: 2, name: 'Hamburg', score: 240 },
  { rank: 3, name: 'Heilbronn', score: 235 },
  { rank: 4, name: 'Cologne', score: 230 },
  { rank: 5, name: 'Munich', score: 180 },
  { rank: 6, name: 'Stuttgart', score: 160 },
  { rank: 7, name: 'Aachen', score: 150 },
  { rank: 8, name: 'Dresden', score: 148 },
];

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your Ranking</Text>
      <View style={styles.rankingSection}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.userItem,
                item.rank <= 3 ? styles.topUserItem : null,
                item.rank >= users.length - 2 ? styles.bottomUserItem : null,
                item.name === 'John Doe' ? styles.johnDoeItem : null,
              ]}
            >
              <Text style={[styles.userRank, item.name === 'John Doe' && styles.johnDoeText]}>{item.rank}</Text>
              <Image source={item.image} style={styles.profileImage} />
              <Text style={[styles.userName, item.name === 'John Doe' && styles.johnDoeText]}>{item.name}</Text>
              <Text style={[styles.userScore, item.name === 'John Doe' && styles.johnDoeText]}>{item.score}</Text>
              <Text
                style={[
                  styles.userChange,
                  item.change > 0 ? styles.positiveChange : styles.negativeChange,
                  item.name === 'John Doe' && styles.johnDoeText,
                ]}
              >
                {item.change > 0 ? `+${item.change}` : item.change}
              </Text>
            </View>
          )}
        />
      </View>

      <Text style={styles.sectionTitle}>Top Cities</Text>
      <View style={styles.citySection}>
        <FlatList
          data={cities}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.cityItem,
                item.name === 'Heilbronn' ? styles.highlightedItem : null,
              ]}
            >
              <Text style={[
                styles.cityRank,
                item.name === 'Heilbronn' && styles.heilbronnText,
              ]}>{item.rank}</Text>
              <Text style={[
                styles.cityName,
                item.name === 'Heilbronn' && styles.heilbronnText,
              ]}>{item.name}</Text>
              <Text style={[
                styles.cityScore,
                item.name === 'Heilbronn' && styles.heilbronnText,
              ]}>{item.score}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight + 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#407691',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#d2eaf0',
    marginBottom: 10,
    marginTop: 20,
  },
  rankingSection: {
    flex: 1,
    marginBottom: 20,
  },
  citySection: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d2eaf0',
  },
  userRank: {
    width: 40,
    textAlign: 'center',
    fontSize: 18,
    color: '#8ac829',
    fontWeight: '700',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginHorizontal: 10,
  },
  userName: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  userScore: {
    width: 60,
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: '700',
    textAlign: 'center',
  },
  userChange: {
    width: 60,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  positiveChange: {
    color: '#006400',
  },
  negativeChange: {
    color: '#8B0000',
  },
  topUserItem: {
    backgroundColor: '#e6ffe6',
  },
  bottomUserItem: {
    backgroundColor: '#ffe6e6',
  },
  johnDoeItem: {
    backgroundColor: '#006400',
  },
  johnDoeText: {
    color: '#FFFFFF',
  },
  cityItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f2f7f9',
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d2eaf0',
  },
  cityRank: {
    width: 40,
    textAlign: 'center',
    fontSize: 18,
    color: '#8ac829',
    fontWeight: '700',
  },
  cityName: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  cityScore: {
    fontSize: 18,
    color: '#407691',
    fontWeight: '600',
  },
  highlightedItem: {
    backgroundColor: '#407691',
    borderColor: '#2f5773',
  },
  heilbronnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
