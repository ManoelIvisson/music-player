import { StyleSheet, View, Image} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider, Button, Text, Card } from 'react-native-paper';
import MenuPrincipal from "@/components/menuPrincipal";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider>
          <View>
            <MenuPrincipal />
          </View>
          <View>
            <Text variant="bodyLarge" >Nova Música</Text>
            <View>
              <Button icon="music-box-multiple-outline"  mode="contained" style={styles.button}>Opa</Button> 
            </View>
          </View>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    width: 100
  },
  novamusica: {
    maxWidth: 400
  }
});