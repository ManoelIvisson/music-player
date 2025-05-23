import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

type Props = {
  img: ImageSourcePropType;
  nome: string;
  tempo: string;
  autor: string;
  onTouch: (nome: string, img: ImageSourcePropType, autor: string) => void;
}

export default function Musica({img, nome, tempo, autor, onTouch}: Props) {
  return (
    <View style={styles.painel} onTouchStart={() => onTouch(nome, img, autor)}>
        <View style={styles.musicaInfo}>
          <Image style={styles.musica} source={img} />
          <View>
            <Text style={styles.texto}>{nome}</Text>
            <Text variant='labelSmall' style={styles.texto}>{autor}</Text>
          </View>
        </View>
        <Text style={styles.texto}>{tempo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  painel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#3D3E40",
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
  }
}) 