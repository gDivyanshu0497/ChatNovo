import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import ChatLogo from '../../assets/images/chatlogo1.png';
import localization from '../../assets/localization/localization';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{localization.welcomeTitle}</Text>
      <Image source={ChatLogo} style={styles.logoView} />
      <Text style={styles.policyText}>
        {localization.readOur}
        <Text style={styles.blueText}>{localization.privacyPolicy}</Text>{' '}
        {localization.agreeAndContinue}
        <Text style={styles.blueText}>{localization.termAndService}</Text>
      </Text>
      <TouchableOpacity
        style={styles.agreeBtn}
        onPress={() => navigation.navigate('ScreenLogin')}>
        <Text style={styles.btnText}>{localization.agreeBtn} </Text>
      </TouchableOpacity>
      <Text style={styles.policyText}>{localization.from}</Text>
      <Text style={styles.binmileText}>{localization.company}</Text>
    </View>
  );
}
