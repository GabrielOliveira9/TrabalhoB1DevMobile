import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
   
    },
    innerContainer:{
        flexDirection: 'row',
        widht: '100%',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'flex-start',
        
    },
    viewData:{
        width: '70%',
        height: '90%',
        padding: 10,
        backgroundColor: 'white'
    },
    viewIMG:{
    backgroundColor: 'purple',
    width: '30%',    
    height: '100%'
    },
    titulo:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5
    },
    sinopse:{
        fontSize: 14,
        color: 'black',
        marginBottom: 5
    },
    img:{
        width: '100%',
        height: '100%',
        padding: 10
    },
    btn:{
        padding: 10,
        color: 'black'
    }
})
export default styles;