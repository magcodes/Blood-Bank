import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bb0a1e',
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
  },

  myDetails: {
    padding: 10,
    justifyContent: 'center',
  },

  detailsLabel: {
    color: colors.black,
    textAlign: 'right',
    fontSize: 15,
    flex: 1,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },

  fillInput: {
    color: colors.white,
    borderColor: colors.white,
    borderBottomWidth: 1,
    padding: 0,
    marginLeft: 15,
    marginRight: 15,
    flex: 2,
    fontSize: 20,
  },

  requestButton: {
    color: colors.black,
    width: 200,
    marginTop: 50,
    alignItems: 'center',
  },

  confirm: {
    color: colors.white,
    fontSize: 15,
  },

  checkDonor: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'green',
    marginRight: 5,
  },
});
