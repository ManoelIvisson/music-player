import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import Musica from './musica';

export default function AlbumMusicas() {
  return (
    <View style={styles.album}>
        <View style={styles.subArea}>
          <Musica />
          <View>
            <Text variant='titleMedium' style={styles.texto}>Álbum</Text>
            <Text variant='labelMedium' style={styles.texto}>22 Músicas</Text>
          </View>
        </View>
        <View style={styles.subArea}>
          <IconButton icon={"skip-previous"} iconColor='white'/>
          <IconButton icon={"play"} iconColor='white'/>
          <IconButton icon={"skip-next"} iconColor='white'/>
        </View>
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