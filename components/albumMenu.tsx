import { useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

export default function AlbumMenu() {
  const router = useRouter();

  return (
    <View style={styles.album}>
        <View style={styles.subArea}>
          <IconButton onPress={() => router.navigate("/")} icon={"menu"} iconColor='black' />
          <View>
            <Text variant='titleMedium' style={styles.texto}>Álbum</Text>
            <Text variant='labelMedium' style={styles.texto}>5 Músicas</Text>
          </View>
        </View>
        <View style={styles.subArea}>
          <IconButton icon={"magnify"} iconColor='black'/>
          <IconButton icon={"dots-vertical"} iconColor='black'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  album: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
    padding: 10
  },
  texto: {
    color: 'white'
  },
  subArea: {
    flexDirection: 'row'
  }
}) 