import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    // backgroundColor: '#ffcccc',
  },

  logoImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 50,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    color: 'red',
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
    color: 'red',
  },

  form: {
    paddingTop: 20,
    opacity: 5,
  },

  createSection: {
    flexDirection: 'row',
  },

  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },

  infoText: {
    fontSize: 17,
  },
});
