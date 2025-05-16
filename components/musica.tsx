import { View, StyleSheet, Image } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

export default function Musica() {
  return (
    <View style={styles.album}>
        <Image source={} />
        <Text>Back in Black</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  album: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#0E0A73",
    width: 300,
    padding: 10
  },
  texto: {
    color: 'white'
  },
  subArea: {
    flexDirection: 'row'
  }
}) 