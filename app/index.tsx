import { Text, View } from "react-native";
import { PaperProvider, Button } from 'react-native-paper';
import AlbumMenu from '@/components/albumMenu'
import AlbumMusicas from "@/components/albumMusicas";

export default function Index() {
  return (
    <PaperProvider>
      <View
        style={{
          // flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AlbumMenu />
        <AlbumMusicas />
      </View>
    </PaperProvider>
  );
}
