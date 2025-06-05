import { View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function ApresentadorAlbuns() {
    const router = useRouter();

  return (
    <LinearGradient 
            colors={['#675DA6', '#0E0A73']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
        <View style={styles.album}>
            <View style={styles.musicas}>
                <Pressable onPress={() => router.navigate('/album')}>
                    <ImageBackground style={styles.musica} source={require("@/assets/images/notEnough.jpeg")} />
                </Pressable>
        </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  album: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  musicas: {
    flex: 2,
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    width: '100%'
  },
  musica: {
    width: 100,
    height: 100,
  }
}) 