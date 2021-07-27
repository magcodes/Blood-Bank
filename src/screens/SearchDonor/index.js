import React from 'react';
import {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {DonorItem} from './components';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchDonor = () => {
  const [activeDonor, setActiveDonor] = useState(null);

  return (
    <React.Fragment>
      <FlatList
        ListHeaderComponent={
          <View style={styles.listHeaderStyle}>
            <Text style={styles.title}> Search Donor</Text>
            <View style={styles.searchSection}>
              <Text style={styles.searchLabel}>Blood Group: </Text>
              <TextInput
                style={styles.searchInput}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
        }
        style={styles.container}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <DonorItem donor={item} onPress={() => setActiveDonor(item)} />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />

      {!!activeDonor && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setActiveDonor(null)}>
          <TouchableOpacity
            onPress={() => null}
            activeOpacity={1}
            style={styles.donorCard}>
            <View style={styles.cardHeader}>
              <Text
                style={
                  styles.headerText
                }>{`${activeDonor.name.title} ${activeDonor.name.first} ${activeDonor.name.last}`}</Text>
            </View>
            <View style={styles.cardBody}>
              <Image
                source={require('../../assets/images/loginimage.jpg')}
                style={styles.profileImg}
              />
              <View>
                <Text>Address Line 1</Text>
                <Text>Address Line 1</Text>
                <TouchableOpacity style={styles.phoneWrapper}>
                  {/* <Text>Icon</Text> */}
                  <Icon name="whatsapp" backgroundColor="#3b5998" />
                  <Text style={styles.phoneNumber}>{activeDonor.phone}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
};

export default SearchDonor;

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const data = [
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Cüneyt', last: 'Verberk'},
    phone: '(778)-000-9241',
    nat: 'NL',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Elias', last: 'Karvonen'},
    phone: '06-053-599',
    nat: 'FI',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Benas', last: 'Talberg'},
    phone: '20881487',
    nat: 'NO',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Jayden', last: 'Bélanger'},
    phone: '611-048-0977',
    nat: 'CA',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Hanna', last: 'Hansen'},
    phone: '071-894-3950',
    nat: 'IE',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Caroline', last: 'Allen'},
    phone: '00-8732-1467',
    nat: 'AU',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Kirsten', last: 'Ladwig'},
    phone: '0294-3613102',
    nat: 'DE',
  },
  {
    gender: 'male',
    name: {title: 'Monsieur', first: 'Bryan', last: 'Fleury'},
    phone: '077 074 14 45',
    nat: 'CH',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Leo', last: 'Nieborg'},
    phone: '(175)-640-8158',
    nat: 'NL',
  },
  {
    gender: 'female',
    name: {title: 'Mrs', first: 'Montserrat', last: 'Vicente'},
    phone: '974-867-022',
    nat: 'ES',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Joscha', last: 'Großmann'},
    phone: '0494-7723963',
    nat: 'DE',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Halil', last: 'Schaub'},
    phone: '0270-8106572',
    nat: 'DE',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Marcus', last: 'Wang'},
    phone: '(646)-780-6520',
    nat: 'NZ',
  },
  {
    gender: 'female',
    name: {title: 'Miss', first: 'Lyna', last: 'Deschamps'},
    phone: '02-33-89-01-39',
    nat: 'FR',
  },
  {
    gender: 'female',
    name: {title: 'Miss', first: 'Maia', last: 'Morris'},
    phone: '(131)-344-8877',
    nat: 'NZ',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Carla', last: 'Morrison'},
    phone: '(652)-085-3724',
    nat: 'US',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Ahmet', last: 'Ozansoy'},
    phone: '(869)-791-5654',
    nat: 'TR',
  },
  {
    gender: 'female',
    name: {title: 'Miss', first: 'Ülkü', last: 'Tuğlu'},
    phone: '(516)-614-7262',
    nat: 'TR',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Vidar', last: 'Nicolaisen'},
    phone: '38838621',
    nat: 'NO',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Todd', last: 'Palmer'},
    phone: '09-1351-0648',
    nat: 'AU',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Sissy', last: 'Greuter'},
    phone: '(164)-657-5978',
    nat: 'NL',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Montserrat', last: 'Gutierrez'},
    phone: '959-159-585',
    nat: 'ES',
  },
  {
    gender: 'female',
    name: {title: 'Mrs', first: 'Ceyhan', last: 'Çağıran'},
    phone: '(052)-170-2793',
    nat: 'TR',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Mickel', last: 'Laenen'},
    phone: '(845)-517-7461',
    nat: 'NL',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Emil', last: 'Madsen'},
    phone: '07655721',
    nat: 'DK',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Daniel', last: 'Perala'},
    phone: '05-309-075',
    nat: 'FI',
  },
  {
    gender: 'female',
    name: {title: 'Miss', first: 'Silke', last: 'Nielsen'},
    phone: '10636619',
    nat: 'DK',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Pål', last: 'Wilson'},
    phone: '87863247',
    nat: 'NO',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Dustin', last: 'Jenkins'},
    phone: '071-318-4053',
    nat: 'IE',
  },
  {
    gender: 'female',
    name: {title: 'Mrs', first: 'Nerea', last: 'Sanz'},
    phone: '931-522-019',
    nat: 'ES',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Ece', last: 'Velioğlu'},
    phone: '(589)-221-7804',
    nat: 'TR',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Carla', last: 'Willis'},
    phone: '04-0558-3599',
    nat: 'AU',
  },
  {
    gender: 'female',
    name: {title: 'Miss', first: 'Naja', last: 'Rasmussen'},
    phone: '44215699',
    nat: 'DK',
  },
  {
    gender: 'female',
    name: {title: 'Miss', first: 'Judy', last: 'Johnston'},
    phone: '071-302-5394',
    nat: 'IE',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Alex', last: 'Kolås'},
    phone: '55856941',
    nat: 'NO',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Semih', last: 'Lambrechts'},
    phone: '(482)-318-0774',
    nat: 'NL',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Holly', last: 'Clarke'},
    phone: '(523)-632-4749',
    nat: 'NZ',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Olivia', last: 'Macdonald'},
    phone: '038-453-5947',
    nat: 'CA',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Roope', last: 'Pulli'},
    phone: '02-711-704',
    nat: 'FI',
  },
  {
    gender: 'female',
    name: {title: 'Miss', first: 'Nuran', last: 'Schrauwen'},
    phone: '(544)-062-8598',
    nat: 'NL',
  },
  {
    gender: 'female',
    name: {title: 'Ms', first: 'Daisy', last: 'Clark'},
    phone: '(387)-022-1392',
    nat: 'US',
  },
  {
    gender: 'female',
    name: {title: 'Mrs', first: 'Peppi', last: 'Oja'},
    phone: '02-440-928',
    nat: 'FI',
  },
  {
    gender: 'female',
    name: {title: 'Mrs', first: 'Nicoline', last: 'Jørgensen'},
    phone: '82436725',
    nat: 'DK',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Jesse', last: 'Saarela'},
    phone: '05-945-403',
    nat: 'FI',
  },
  {
    gender: 'female',
    name: {title: 'Miss', first: 'Jo', last: 'Burke'},
    phone: '01-4349-6082',
    nat: 'AU',
  },
  {
    gender: 'female',
    name: {title: 'Mademoiselle', first: 'Hildegard', last: 'Adam'},
    phone: '079 802 76 01',
    nat: 'CH',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Victor', last: 'Kowalski'},
    phone: '111-239-9462',
    nat: 'CA',
  },
  {
    gender: 'female',
    name: {title: 'Mrs', first: 'Ayşe', last: 'Yıldırım'},
    phone: '(272)-700-2324',
    nat: 'TR',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'عباس', last: 'كامياران'},
    phone: '008-36484981',
    nat: 'IR',
  },
  {
    gender: 'male',
    name: {title: 'Mr', first: 'Viljami', last: 'Pollari'},
    phone: '06-286-705',
    nat: 'FI',
  },
];
