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
    fontWeight: '500',
    color: colors.white,
    marginBottom: 40,
  },

  searchLabel: {
    fontSize: 16,
    color: colors.white,
  },

  searchSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },

  searchInput: {
    color: colors.white,
    borderColor: colors.white,
    borderBottomWidth: 1,
    padding: 0,
    width: 150,
    marginLeft: 15,
  },

  donorListItem: {
    alignItems: 'center',
  },

  donorListItemText: {
    fontSize: 16,
    color: colors.white,
  },

  itemSeparator: {
    height: 10,
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    padding: 20,
  },

  donorCard: {
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 1,
    zIndex: 1,
  },

  cardHeader: {
    padding: 15,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },

  headerText: {
    color: colors.primary,
  },
  cardBody: {
    flexDirection: 'row',
    padding: 20,
  },

  profileImg: {
    height: 120,
    width: 120,
    marginRight: 20,
  },

  phoneNumber: {
    paddingVertical: 10,
  },

  phoneWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
