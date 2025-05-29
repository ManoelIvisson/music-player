import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

export default function MenuPrincipal() {
  return (
    <View style={styles.album}>
        <View style={styles.subArea}>
          <IconButton icon={"menu"} iconColor='white' />
        </View>
        <View>
          <Text variant='bodyMedium' >Music Player</Text>
        </View>
        <View style={styles.subArea}>
          <IconButton icon={"magnify"} iconColor='white'/>
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
    backgroundColor: "#0E0A73",
    padding: 10,
    minWidth: 400,
  },
  texto: {
    color: 'white'
  },
  subArea: {
    flexDirection: 'row'
  }
}) 