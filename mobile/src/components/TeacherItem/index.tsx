import React from "react";
import styles from "./styles";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars3.githubusercontent.com/u/49356234?s=460&u=7a90cc7df33c841e5ed74fdf93605ef7365cf817&v=4",
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Rafael Santana</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>
             Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
