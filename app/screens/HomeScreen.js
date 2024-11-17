import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, FlatList, ScrollView } from 'react-native';

const friends = [
  { name: 'Bob', ecoScore: 90, image: require('../../assets/profile_images/user1.png') },
  { name: 'Alice', ecoScore: 85, image: require('../../assets/profile_images/user2.png') },
  { name: 'Charlie', ecoScore: 80, image: require('../../assets/profile_images/user3.png') },
  { name: 'Mary', ecoScore: 95, image: require('../../assets/profile_images/user4.png') },
  { name: 'Emma', ecoScore: 88, image: require('../../assets/profile_images/user2.png') },
];

const achievements = [
  { title: 'No Car November', image: require('../../assets/no_car.png') },
  { title: '10 Day Walking Streak', image: require('../../assets/walk_10.png') },
];

export default function HomeScreen() {
  const userName = 'John Doe';
  const ecoScore = 82;
  const cityName = 'Heilbronn';

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/emission_impossible_header.png')}
        style={styles.bannerImage}
      />
      <View style={styles.userInfo}>
        <Image
          source={require('../../assets/profile_images/john_doe.png')}
          style={styles.avatar}
        />
        <View style={styles.textInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userScore}>Eco Score: {ecoScore}</Text>
          <Text style={styles.cityName}>City: {cityName}</Text>
        </View>
      </View>

      <View style={styles.friendsSection}>
        <Text style={styles.sectionTitle}>Friends</Text>
        <FlatList
          horizontal
          data={friends}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.friendItem}>
              <Image source={item.image} style={styles.friendAvatar} />
              <Text style={styles.friendName}>{item.name}</Text>
              <Text style={styles.friendEcoScore}>Eco Score: {item.ecoScore}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.achievementsSection}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsRow}>
          {achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementItemContainer}>
              <Image source={achievement.image} style={styles.achievementImage} />
              <Text style={styles.achievementItem}>{achievement.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight + 10,
  },
  bannerImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 2.5,
    resizeMode: 'cover',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#407691',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  textInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  userScore: {
    fontSize: 20,
    marginTop: 10,
    color: '#8ac829',
  },
  cityName: {
    fontSize: 20,
    marginTop: 5,
    color: '#fff',
  },


  friendsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#407691',
  },
  friendItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  friendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendName: {
    marginTop: 5,
    fontSize: 16,
    color: '#407691',
  },
  friendEcoScore: {
    marginTop: 5,
    fontSize: 14,
    color: '#8ac829',
  },


  achievementsSection: {
    padding: 20,
  },
  achievementsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  achievementItemContainer: {
    alignItems: 'center',
    width: '48%',
  },
  achievementImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  achievementItem: {
    fontSize: 18,
    textAlign: 'center',
    color: '#407691',
  },
});
