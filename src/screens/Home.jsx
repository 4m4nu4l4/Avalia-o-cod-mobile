import { Card } from "react-bootstrap";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://www.vans.com.br/quem-somos#1966";
const unsupportedURL = "https://www.vans.com.br/c/classiccarryover?q=:creation-time&page=0";

export const HomeManu = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text>Informações gerais sobre a marca:</Text>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>História da marca</Card.Title>
                <Card.Text>
                   oi
                </Card.Text>
                <OpenURLButton url={supportedURL}></OpenURLButton>

            </Card.Body>
        </Card>
        <Text>Nosso catálogo:</Text>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Catalogo</Card.Title>
                <Card.Text>
                    oii
                </Card.Text>
                <OpenURLButton url={unsupportedURL}></OpenURLButton>
                
            </Card.Body>
        </Card>
    </View>)
}


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};


