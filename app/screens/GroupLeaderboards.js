import React, { useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

// Sample data for school-wide users
const schoolUsers = [
  { rank: 1, name: 'Alice', score: 250, image: require('../../assets/profile_images/user1.png') },
  { rank: 2, name: 'Bob', score: 240, image: require('../../assets/profile_images/user2.png') },
  { rank: 3, name: 'Charlie', score: 230, image: require('../../assets/profile_images/user3.png') },
  { rank: 4, name: 'Diana', score: 220, image: require('../../assets/profile_images/user4.png') },
  { rank: 5, name: 'John Doe', score: 210, image: require('../../assets/profile_images/user1.png') }, // Current User
  { rank: 6, name: 'Grace', score: 200, image: require('../../assets/profile_images/user2.png') },
  { rank: 7, name: 'Hannah', score: 195, image: require('../../assets/profile_images/user3.png') },
  { rank: 8, name: 'Ian', score: 190, image: require('../../assets/profile_images/user4.png') },
  { rank: 9, name: 'Jack', score: 185, image: require('../../assets/profile_images/user1.png') },
  { rank: 10, name: 'Kevin', score: 180, image: require('../../assets/profile_images/user2.png') },
];

// Sample data for classrooms
const classrooms = [
  { rank: 1, name: 'Classroom A', score: 500 },
  { rank: 2, name: 'Classroom B', score: 480 },
  { rank: 3, name: 'Classroom C', score: 470 },
  { rank: 4, name: 'Classroom D', score: 460 },
  { rank: 5, name: 'Classroom E', score: 450 },
];

export default function GroupLeaderboardScreen() {
  const schoolListRef = useRef(null);
  const classroomListRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* School-Wide Leaderboard */}
      <Text style={styles.sectionTitle}>School Leaderboard</Text>
      <View style={styles.rankingSection}>
        <FlatList
          ref={schoolListRef}
          data={schoolUsers}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.userItem,
                item.name === 'John Doe' ? styles.highlightUser : styles.normalUser,
              ]}
            >
              <Text style={styles.userRank}>{item.rank}</Text>
              <Image source={item.image} style={styles.profileImage} />
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userScore}>{item.score}</Text>
            </View>
          )}
          initialScrollIndex={4} // Pre-scroll to John Doe
          getItemLayout={(data, index) => ({
            length: 70, // height of each item
            offset: 70 * index, // position of each item
            index,
          })}
        />
      </View>

      {/* Classroom Leaderboard */}
      <Text style={styles.sectionTitle}>Classroom Leaderboard</Text>
      <View style={styles.citySection}>
        <FlatList
          ref={classroomListRef}
          data={classrooms}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.cityItem,
                item.name === 'Classroom A' && styles.highlightCity, // Highlight Classroom A
              ]}
            >
              <Text style={styles.cityRank}>{item.rank}</Text>
              <Text style={[styles.cityName, item.name === 'Classroom A' && styles.boldText]}>
                {item.name}
              </Text>
              <Text style={styles.cityScore}>{item.score}</Text>
            </View>
          )}
          initialScrollIndex={0} // Classroom A is at the top
          getItemLayout={(data, index) => ({
            length: 40, // height of each classroom item
            offset: 40 * index, // position of each classroom item
            index,
          })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  rankingSection: {
    flex: 1,
    paddingHorizontal: 10,
  },
  citySection: {
    flex: 1,
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
  },
  highlightUser: {
    backgroundColor: '#e0e0e0',
    color: '#333',
    fontWeight: 'bold',
  },
  normalUser: {
    backgroundColor: '#f9f9f9',
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
