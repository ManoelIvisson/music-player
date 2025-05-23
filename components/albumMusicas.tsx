import { View, StyleSheet, Image } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import Musica from './musica';
import MusicaSelecionada from './musicaSelecionada';

export default function AlbumMusicas() {
  return (
    <View style={styles.album}>
        <View style={styles.musicas}>
          <Musica img={require('@/assets/images/notEnough.jpeg')} nome="It's Not Enough" autor="Dustin Kensrue" tempo="4:15"/>
          <Musica img={require('@/assets/images/boogie.jpeg')} nome="Blame It On The Boogie" autor="The Jackson 5" tempo="4:38"/>
          <Musica img={require('@/assets/images/moon.jpeg')} nome="Talking To The Moon" autor="Bruno Mars" tempo="8:14"/>
          <Musica img={require('@/assets/images/liar.jpeg')} nome="Bad Liar" autor="Imagine Dragons" tempo="4:00"/>
          <Musica img={require('@/assets/images/escape.jpeg')} nome="Escape" autor="Rupert Holmes" tempo="4:09"/>
        </View>
        <View >
          <MusicaSelecionada img={require('@/assets/images/notEnough.jpeg')} nome="It's Not Enough"  autor="Dustin Kensrue"/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  album: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#0E0A73",
  },
  texto: {
    color: 'white'
  },
  musica: {
    
  },
  musicas: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: "#675DA6"
  },
  musicaSelecionada: {
    flex: 1 / 3,
    flexDirection: 'row'
  }
}) 