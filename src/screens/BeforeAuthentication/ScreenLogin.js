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
import localization from '../../assets/localization/localization';
import styles from './style';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.loginTitle}>{localization.enterMobile}</Text>
          <Text style={styles.loginVerifyText}>
            {localization.needToVerifyText}
          </Text>
          <Text style={styles.loginVerifyNum}>{localization.whatMyNum}</Text>
          <TextInput
            placeholder="(+91)  phone number"
            placeholderTextColor="white"
            keyboardType="numeric"
            style={styles.loginInputBox}
          />
          <TouchableOpacity style={styles.loginNextBtn}>
            <Text style={styles.btnText}>{localization.nextBtn}</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
