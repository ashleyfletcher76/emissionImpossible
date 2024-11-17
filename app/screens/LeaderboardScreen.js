import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, FlatList, StatusBar } from 'react-native';

const users = [
  { rank: 1, name: 'Bob', score: 96, image: require('../../assets/profile_images/user1.png') },
  { rank: 2, name: 'Alice', score: 90, image: require('../../assets/profile_images/user2.png') },
  { rank: 3, name: 'John Doe', score: 82, image: require('../../assets/profile_images/john_doe.png') },
  { rank: 4, name: 'Diana', score: 87, image: require('../../assets/profile_images/user4.png') },
  { rank: 5, name: 'Eve', score: 85, image: require('../../assets/profile_images/user1.png') },
  { rank: 6, name: 'Charlie', score: 89, image: require('../../assets/profile_images/user3.png') },
  { rank: 7, name: 'Grace', score: 80, image: require('../../assets/profile_images/user2.png') },
  { rank: 8, name: 'Barry', score: 80, image: require('../../assets/profile_images/user4.png') },
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
  const rankingListRef = useRef(null);
  const cityListRef = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your Ranking</Text>
      <View style={styles.rankingSection}>
        <FlatList
          ref={rankingListRef}
          data={users}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.userItem,
                item.name === 'John Doe' ? styles.highlightedItem : null,
              ]}
            >
              <Text style={[styles.userRank, item.name === 'John Doe' && styles.highlightedText]}>
                {item.rank}
              </Text>
              <Image source={item.image} style={styles.profileImage} />
              <Text style={[styles.userName, item.name === 'John Doe' && styles.highlightedText]}>
                {item.name}
              </Text>
              <Text style={[styles.userScore, item.name === 'John Doe' && styles.highlightedText]}>
                {item.score}
              </Text>
            </View>
          )}
          initialScrollIndex={5}
        />
      </View>

      <Text style={styles.sectionTitle}>Top Cities</Text>
      <View style={styles.citySection}>
        <FlatList
          ref={cityListRef}
          data={cities}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.cityItem,
                item.name === 'Heilbronn' ? styles.highlightedItem : null,
              ]}
            >
              <Text style={[styles.cityRank, item.name === 'Heilbronn' && styles.highlightedText]}>
                {item.rank}
              </Text>
              <Text style={[styles.cityName, item.name === 'Heilbronn' && styles.highlightedText]}>
                {item.name}
              </Text>
              <Text style={[styles.cityScore, item.name === 'Heilbronn' && styles.highlightedText]}>
                {item.score}
              </Text>
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
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: '700',
  },
  highlightedItem: {
    backgroundColor: '#407691',
    borderColor: '#2f5773',
  },
  highlightedText: {
    color: '#ffffff',
    fontWeight: '700',
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
});
