import { StyleSheet, View, Image, ImageBackground} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider, Button, Text, Icon } from 'react-native-paper';
import MenuPrincipal from "@/components/menuPrincipal";
import ApresentadorMusicas from "@/components/apresentadorMusicas";
import ApresentadorAlbuns from "@/components/apresentadorAlbuns";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider>
          <View>
            <MenuPrincipal />
          </View>
          <Text variant="bodyLarge" style={styles.tituloDestaque}>Nova Música</Text>
          <View style={styles.destaque}>
            <ImageBackground 
            source={require("@/assets/images/dustin-kensrue.jpg")}
            resizeMode="cover"
            style={styles.novaMusica}>
              <Button 
                icon={() => <Icon source="headphones" size={20} color="#675DA6" />}
                mode="contained" 
                buttonColor="white"
                labelStyle={{color: "black"}}
                style={styles.button}>
                  Escutar
              </Button>
            </ImageBackground>
            <View style={styles.bar}></View>
          </View>
          <View style={styles.opcoes}>
            <Icon source={"music"} size={20} color="#675DA6" />
            <Text variant="bodyLarge">Mais Tocadas</Text>
          </View>
            <ApresentadorMusicas />
          <View style={styles.opcoes}>
            <Icon source={"music-box-multiple"} size={20} color="#675DA6" />
            <Text variant="bodyLarge">Seus Álbuns</Text>
          </View>
          <ApresentadorAlbuns />
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%'
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    width: 120,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#675DA6",
    elevation: 4,
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  novaMusica: {
    width: 375,
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  tituloDestaque: {
    margin: 10
  },
  opcoes: {
    flexDirection: 'row',
    gap: 10,
    margin: 10
  },
  bar: {
    width: 70,
    height: 6,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#675DA6"
  },
  destaque: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
});