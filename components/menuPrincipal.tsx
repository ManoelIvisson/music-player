import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

export default function MenuPrincipal() {
  return (
    <View style={styles.album}>
        <View style={styles.subArea}>
          <IconButton icon={"menu"} iconColor='black' />
        </View>
        <View>
          <Text variant='bodyMedium' style={styles.texto}>Music Player</Text>
        </View>
        <View style={styles.subArea}>
          <IconButton icon={"magnify"} iconColor='black'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  album: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white"
  },
  texto: {
    // color: 'black'
  },
  subArea: {
    flexDirection: 'row'
  }
}) 