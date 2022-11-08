import { Card } from "react-bootstrap";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";
import 'bootstrap/dist/css/bootstrap.min.css';


export const HomeManu = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text>Informações gerais sobre a marca:</Text>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>História da marca</Card.Title>
                <Card.Text>
                   oi
                </Card.Text>
                <Button href="https://www.vans.com.br/quem-somos#1966">clique aqui para mais</Button>

            </Card.Body>
        </Card>
        <Text>Nosso catálogo:</Text>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Catalogo</Card.Title>
                <Card.Text>
                    oii
                </Card.Text>
                <Button href="https://www.vans.com.br/c/classiccarryover?q=:creation-time&page=0">Catalogo</Button>
                
            </Card.Body>
        </Card>
    </View>)
}