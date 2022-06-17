// Exercice 2 Faire un composant contenant une image et un texte de votre choix.Appeler ce composant sur l’écran d’accueil

import { StyleSheet, View, Image, Text } from "react-native";

////////////////
// ** View ** //
////////////////

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DisplayImage
        img={require("./assets/baby-yoda-is-being-added-to-minecraft_bjqc.jpg")}
        text="Photo de Baby Yoda"
      ></DisplayImage> */}
      <DisplayImage
        img={{
          uri: "https://mfiles.alphacoders.com/844/thumb-1920-844508.jpg",
        }}
        text="Photo du Mandalorian"
      ></DisplayImage>
    </View>
  );
}

//////////////////
// ** Styles ** //
//////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 10,
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
});

//////////////////////
// ** Components ** //
//////////////////////

const DisplayImage = (props) => {
  const { img } = props;
  const { text } = props;

  return (
    <View>
      <Image
        style={styles.img}
        // Lien web
        // source={{ uri: img }}

        // Local
        source={img}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
