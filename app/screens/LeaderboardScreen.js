import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

// Sample data for users and cities
const users = [
  { rank: 1, name: 'Alice', score: 96, image: require('../../assets/profile_images/user1.png') },
  { rank: 2, name: 'Bob', score: 90, image: require('../../assets/profile_images/user2.png') },
  { rank: 3, name: 'Charlie', score: 89, image: require('../../assets/profile_images/user3.png') },
  { rank: 4, name: 'Diana', score: 87, image: require('../../assets/profile_images/user4.png') },
  { rank: 5, name: 'Eve', score: 85, image: require('../../assets/profile_images/user1.png') },
  { rank: 6, name: 'John Doe', score: 82, image: require('../../assets/profile_images/user2.png') },  // Current User
  { rank: 7, name: 'Grace', score: 80, image: require('../../assets/profile_images/user3.png') },
  { rank: 8, name: 'Hannah', score: 78, image: require('../../assets/profile_images/user4.png') },
  { rank: 9, name: 'Ian', score: 77, image: require('../../assets/profile_images/user1.png') },
  { rank: 10, name: 'Jack', score: 75, image: require('../../assets/profile_images/user2.png') },
  { rank: 11, name: 'Kevin', score: 70, image: require('../../assets/profile_images/user3.png') },
  { rank: 12, name: 'Linda', score: 68, image: require('../../assets/profile_images/user4.png') },
  { rank: 13, name: 'Mona', score: 65, image: require('../../assets/profile_images/user1.png') },
  { rank: 14, name: 'Nick', score: 63, image: require('../../assets/profile_images/user2.png') },
  { rank: 15, name: 'Oscar', score: 60, image: require('../../assets/profile_images/user3.png') },
];

const cities = [
  { rank: 1, name: 'Berlin', score: 245 },
  { rank: 2, name: 'Hamburg', score: 240 },
  { rank: 3, name: 'Munich', score: 235 },
  { rank: 4, name: 'Cologne', score: 230 },
  { rank: 5, name: 'Frankfurt', score: 220 },
  { rank: 6, name: 'Stuttgart', score: 210 },
  { rank: 7, name: 'Heilbronn', score: 180 }, // Heilbronn moved to position 7
  { rank: 8, name: 'Dusseldorf', score: 205 },
  { rank: 9, name: 'Dortmund', score: 200 },
  { rank: 10, name: 'Essen', score: 195 },
  { rank: 11, name: 'Leipzig', score: 190 },
  { rank: 12, name: 'Bremen', score: 185 },
  { rank: 13, name: 'Dresden', score: 180 },
  { rank: 14, name: 'Nuremberg', score: 175 },
  { rank: 15, name: 'Hanover', score: 170 },
  { rank: 16, name: 'Aachen', score: 165 },
  { rank: 17, name: 'Bonn', score: 160 },
  { rank: 18, name: 'Mannheim', score: 155 },
  { rank: 19, name: 'Karlsruhe', score: 150 },
  { rank: 20, name: 'Wurzburg', score: 145 },
  { rank: 21, name: 'Freiburg', score: 140 },
  { rank: 22, name: 'Heidelberg', score: 135 },
  { rank: 23, name: 'Munster', score: 130 },
  { rank: 24, name: 'Regensburg', score: 125 },
  // Add more cities as needed
];

export default function LeaderboardScreen() {
  const rankingListRef = useRef(null);
  const cityListRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* Your Ranking Section */}
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
                item.name === 'John Doe' ? styles.highlightUser : styles.normalUser,
              ]}
            >
              <Text style={[styles.userRank, item.name === 'John Doe' && styles.highlightUser]}>
                {item.rank}
              </Text>
              <Image source={item.image} style={styles.profileImage} />
              <Text style={[styles.userName, item.name === 'John Doe' && styles.highlightUser]}>
                {item.name}
              </Text>
              <Text style={[styles.userScore, item.name === 'John Doe' && styles.highlightUser]}>
                {item.score}
              </Text>
            </View>
          )}
          initialScrollIndex={5} // Pre-scroll to John Doe
          getItemLayout={(data, index) => ({
            length: 70, // height of each item
            offset: 70 * index, // position of each item
            index,
          })}
        />
      </View>

      {/* Your City Section */}
      <Text style={styles.sectionTitle}>Your City</Text>
      <View style={styles.citySection}>
        <FlatList
          ref={cityListRef}
          data={cities}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.cityItem,
                item.name === 'Heilbronn' && styles.highlightCity,
              ]}
            >
              <Text style={styles.cityRank}>{item.rank}</Text>
              <Text style={[styles.cityName, item.name === 'Heilbronn' && styles.boldText]}>
                {item.name}
              </Text>
              <Text style={styles.cityScore}>{item.score}</Text>
            </View>
          )}
          initialScrollIndex={6} // Pre-scroll to Heilbronn (now at position 7)
          getItemLayout={(data, index) => ({
            length: 40, // height of each city item
            offset: 40 * index, // position of each city item
            index,
          })}
        />
      </View>
    </View>
  );
}

// Helper function to render each zone (not used anymore as we're using FlatList)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 20, // Increased padding for "Your Ranking" title
    paddingHorizontal: 10,
  },
  rankingSection: {
    flex: 1, // Takes up 50% of the screen
    paddingHorizontal: 10,
  },
  citySection: {
    flex: 1, // Takes up 50% of the screen
    paddingHorizontal: 10,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  userRank: {
    width: 30,
    textAlign: 'center',
    fontSize: 18,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  userName: {
    flex: 1,
    fontSize: 18,
  },
  userScore: {
    fontSize: 18,
    color: '#4caf50',
    paddingRight: 15, // 15px padding on the right side of score
  },
  highlightUser: {
    backgroundColor: '#333', // Dark background for John Doe
    color: 'white', // White text for John Doe
    fontWeight: 'bold',
  },
  normalUser: {
    backgroundColor: '#e6f7ff', // Light background for other users
  },
  cityItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  cityRank: {
    width: 40,
    textAlign: 'center',
  },
  cityName: {
    flex: 1,
  },
  cityScore: {
    width: 60,
    textAlign: 'right',
  },
  highlightCity: {
    backgroundColor: '#e6ffe6',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
