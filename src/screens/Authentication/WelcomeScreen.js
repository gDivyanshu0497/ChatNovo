import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import ChatLogo from '../../assets/chatlogo1.png';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Chat-Novo</Text>
      <Image source={ChatLogo} style={styles.logoView} />
      <Text style={styles.policyText}>
        Read our <Text style={styles.blueText}>Privacy Policy.</Text> Tap "Agree
        and Continue" to accept the 
        <Text style={styles.blueText}>Terms of Service.</Text>
      </Text>
      <TouchableOpacity style={styles.agreeBtn} onPress={() => navigation.navigate('LoginScreen')} >
        <Text style={styles.btnText}>AGREE AND CONTINUE </Text>
      </TouchableOpacity>
      <Text style={styles.policyText}>from</Text>
      <Text style={styles.binmileText}>BINMILE</Text>
    </View>
  );
}
