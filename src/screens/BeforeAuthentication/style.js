import {StyleSheet} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F20',
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
  logoView: {
    width: 320,
    height: 320,
    alignSelf: 'center',
    marginVertical: 50,
  },
  policyText: {
    color: '#A9A9A9',
    marginHorizontal: 15,
    fontSize: 14,
    textAlign: 'center',
  },
  blueText: {
    color: '#0BA8E6',
  },
  agreeBtn: {
    backgroundColor: '#0BA8E6',
    marginHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 25,
    marginBottom: 50,
  },
  btnText: {
    fontSize: 17,
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
  },
  binmileText: {
    textAlign: 'center',
    letterSpacing: 2,
    marginVertical: 5,
    color: 'white',
    fontWeight: '600',
  },
  // LoginScreen styling
  loginTitle: {
    color: '#0BA8E6',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 10,
  },
  loginVerifyText: {
    marginTop: 30,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },

  loginVerifyNum: {
    color: '#0BA8E6',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  loginInputBox: {
    borderTopWidth: 1,
    borderTopColor: '#0BA8E6',
    borderBottomColor: '#0BA8E6',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  loginNextBtn: {
    backgroundColor: '#0BA8E6',
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 240,
  },
});

export default styles;
