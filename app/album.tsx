import AlbumMenu from "@/components/albumMenu";
import AlbumMusicas from "@/components/albumMusicas";
import { View, StyleSheet, Text } from "react-native";

export default function Album() {
  return (
    <View style={styles.album}>
        <AlbumMenu />
        <AlbumMusicas />
    </View>
  );
}

const styles = StyleSheet.create({
    album: {
        flex: 1,
    }
})
