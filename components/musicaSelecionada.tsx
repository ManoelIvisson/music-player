import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

type Props = {
  img: ImageSourcePropType;
  nome: String;
  autor: String;
}

export default function MusicaSelecionada({img, nome, autor}: Props) {
  return (
    <View style={styles.painel}>
        <View style={styles.musicaInfo}>
            <Image style={styles.musica} source={img} />
            <View>
                <Text style={styles.texto}>{nome}</Text>
                <Text variant='labelSmall' style={styles.texto}>{autor}</Text>
            </View>
        </View>
        <View style={styles.musicaSelecionada}>
            <IconButton icon={"skip-previous"} iconColor='white'/>
            <IconButton icon={"play"} iconColor='white'/>
            <IconButton icon={"skip-next"} iconColor='white'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  painel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderTopWidth: 2,
    borderColor: "#675DA6"
  },
  texto: {
    color: 'white'
  },
  musica: {
    width: 50,
    height: 50
  },
  musicaInfo: {
    flexDirection: 'row',
    gap: 10
  },
  musicaSelecionada: {
    flexDirection: 'row'
  }
}) 