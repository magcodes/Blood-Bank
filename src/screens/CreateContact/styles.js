import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson',
  },

  listHeaderStyle: {
    marginBottom: 50,
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: 'bold',
    color: colors.white,
    // marginBottom: 20,
  },

  bloodBank: {
    padding: 20,
    // margin: 30,
  },

  availableBloodType: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
    marginRight: 10,
  },

  availableBloodQuantity: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },

  searchSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },

  searchLabel: {
    color: colors.white,
    fontSize: 20,
  },

  searchInput: {
    color: colors.white,
    borderColor: colors.white,
    borderBottomWidth: 1,
    padding: 0,
    width: 150,
    marginLeft: 15,
  },

  requestButton: {
    color: colors.black,
    width: 200,
    marginTop: 50,
    alignItems: 'center',
  },
});
