import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const schoolUsers = [
  { rank: 1, name: 'Alice', score: 250, image: require('../../assets/profile_images/user1.png') },
  { rank: 2, name: 'Bob', score: 240, image: require('../../assets/profile_images/user2.png') },
  { rank: 3, name: 'Charlie', score: 230, image: require('../../assets/profile_images/user3.png') },
  { rank: 4, name: 'Diana', score: 220, image: require('../../assets/profile_images/user4.png') },
  { rank: 5, name: 'John Doe', score: 210, image: require('../../assets/profile_images/john_doe.png') },
  { rank: 6, name: 'Grace', score: 200, image: require('../../assets/profile_images/user2.png') },
  { rank: 7, name: 'Hannah', score: 195, image: require('../../assets/profile_images/user3.png') },
  { rank: 8, name: 'Ian', score: 190, image: require('../../assets/profile_images/user4.png') },
  { rank: 9, name: 'Jack', score: 185, image: require('../../assets/profile_images/user1.png') },
  { rank: 10, name: 'Kevin', score: 180, image: require('../../assets/profile_images/user2.png') },
];

const classrooms = [
  { rank: 1, name: 'Grade 4-A', score: 500 },
  { rank: 2, name: 'Grade 4-C', score: 480 },
  { rank: 3, name: 'Grade 3-B', score: 470 },
  { rank: 4, name: 'Grade 2-A', score: 460 },
  { rank: 5, name: 'Grade 1-B', score: 450 },
];

const doeFamily = [
  { rank: 1, name: 'Papa Doe', score: 210, image: require('../../assets/profile_images/user1.png') },
  { rank: 2, name: 'Mama Doe', score: 205, image: require('../../assets/profile_images/user2.png') },
  { rank: 3, name: 'John Doe', score: 200, image: require('../../assets/profile_images/john_doe.png') },
  { rank: 4, name: 'Lucy Doe', score: 195, image: require('../../assets/profile_images/user4.png') },
  { rank: 5, name: 'Jane Doe', score: 190, image: require('../../assets/profile_images/user1.png') },
];

export default function GroupLeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Heilbronn Primary School</Text>
      
      <View style={styles.rankingSection}>
        <FlatList
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
          getItemLayout={(data, index) => ({
            length: 52.5,
            offset: 52.5 * index,
            index,
          })}
        />
      </View>

      <Text style={styles.sectionTitle}>Classroom Leaderboard</Text>
      <View style={styles.citySection}>
        <FlatList
          data={classrooms}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View style={[
                styles.cityItem,
                item.name === 'Classroom A' && styles.highlightCity,
              ]}
            >
              <Text style={styles.cityRank}>{item.rank}</Text>
              <Text style={[styles.cityName, item.name === 'Classroom A' && styles.boldText]}>
                {item.name}
              </Text>
              <Text style={styles.cityScore}>{item.score}</Text>
            </View>
          )}
          getItemLayout={(data, index) => ({
            length: 40,
            offset: 40 * index,
            index,
          })}
        />
      </View>

      <Text style={styles.sectionTitle}>The Doe Family Group</Text>
      <View style={styles.rankingSection}>
        <FlatList
          data={doeFamily}
          keyExtractor={(item) => item.rank.toString()}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text style={styles.userRank}>{item.rank}</Text>
              <Image source={item.image} style={styles.profileImage} />
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userScore}>{item.score}</Text>
            </View>
          )}
          getItemLayout={(data, index) => ({
            length: 52.5,
            offset: 52.5 * index,
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
    height: 52.5,
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
