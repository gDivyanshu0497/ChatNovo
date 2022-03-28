import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import styles from './style';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
            <Text style={styles.loginTitle}>Enter your phone number</Text>
            <Text style={styles.loginVerifyText}>
              Chat Novo will need to verify you phone number
            </Text>
            <Text style={styles.loginVerifyNum}>What's my number?</Text>
            <TextInput
              placeholder="(+91)  phone number"
              placeholderTextColor="white"
              keyboardType="numeric"
              style={styles.loginInputBox}
            />
            <TouchableOpacity style={styles.loginNextBtn} >
              <Text style={styles.btnText}>NEXT</Text>
            </TouchableOpacity>
          </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
