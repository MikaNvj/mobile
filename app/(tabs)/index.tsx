import React, { useState } from "react";
import { View, TextInput, Button, Image, Alert, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from 'react-native';

const FormulaireMateriel = () => {
  const [materiel, setMateriel] = useState("");
  const [description, setDescription] = useState("");
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission refusée", "Vous devez autoriser l'accès à la caméra.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      base64: true,
      quality: 0.7,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageBase64(result.assets[0].base64 || null);
    }
  };
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#1466b8",
      padding: 15,
      borderRadius: 15,
      width: "100%",
      alignSelf: "center",
      marginTop: 20,
    },
    buttonText: {
      color: "#ffff",
      fontSize: 16,
      textAlign: "center",
    },
  });

  return (
    <View style={{ padding: 20 ,paddingTop: 80, flex:1}}>
      <Text style={{ 
        fontSize: 26, 
        fontWeight: "bold", 
        textAlign:"center", 
        marginBottom: 40, 
        color:"#1466b8"
        }}>Bienvenue sur l'accueil !</Text>
      <TextInput
        placeholder="Matériel"
        value={materiel}
        onChangeText={setMateriel}
        style={{
          borderWidth: 1,
          borderColor: "#cccc",
          padding: 15,
          marginBottom: 20,
          borderRadius: 15,
          fontSize: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{
          borderWidth: 1,
          borderColor: "#cccc",
          padding: 15,
          marginBottom: 22,
          borderRadius: 15,
          fontSize: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
        multiline
      />
      {imageBase64 && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${imageBase64}` }}
          style={{ width: "50%", height: 200, alignSelf: "center", borderRadius:15, resizeMode: "cover" }}
        />
      )}
      
      <TouchableOpacity onPress={handleTakePhoto} style={styles.button}>
        <Text style={styles.buttonText}>Prendre une photo</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default FormulaireMateriel;
