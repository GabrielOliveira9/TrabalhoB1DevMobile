import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Image, Button} from 'react-native';
import styles from './style';

export default function Filmes({filmes}){
    const baseUrlImg = "https://api.otaviolube.com";
    
    return(
        <View style={styles.container}>
        {filmes.length > 0 ? filmes.map(filme => (
        <View style={styles.innerContainer}key={filme.id}>
            <View style = {styles.viewIMG}>
            <Image source={{uri: `${baseUrlImg}${filme.attributes.poster.data.attributes.url}`}} style={styles.img}/>
        </View>  
        <View style={styles.viewData}>
            <Text style={styles.titulo}>{filme.attributes.titulo} </Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse} </Text>
            <Button style={styles.btn} color='#be29ec'title='Comprar Ingresso'></Button>
        </View>
        </View>
      )
      )
        : <Text>Carregando...</Text>
      }
      <StatusBar style="auto" />
    </View>
    )
}