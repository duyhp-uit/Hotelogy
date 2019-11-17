import { StyleSheet, Dimensions} from "react-native"
const {height, width} = Dimensions.get('screen');
export default StyleSheet.create({
    flex: {
        flex: 1,
    },
    column: {
        flexDirection: 'column'
    },
    articles : {
    },
    row: {
    flexDirection: 'row'
    },
    recommended : {  
      },
    avatar :{
        width: 36,
        height : 36,
        borderRadius : 18
      },
      rating: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
      },
      destinations : {
        flex: 2,
        justifyContent: 'space-between',
        paddingBottom: 10,
      },
      destination : {
        width : width - (36 * 2),
        height : width * 0.66,
        marginHorizontal : 36,
        paddingHorizontal : 36,
        paddingVertical : 20,
        borderRadius : 12,
      },
      destinationInfo : {
        position : 'absolute',
        borderRadius : 12,
        paddingHorizontal : 36,
        paddingVertical : 16,
        bottom : 20,                       //In iOS platform, bottom : -36
        left : 36,
        right : 36,
        backgroundColor : 'white',
      },
       shadow : {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5,
      },
      dots: {
        width: 10,
        height: 10,
        borderWidth: 2.5,
        borderRadius: 5,
        marginHorizontal: 6,
        backgroundColor: '#DCE0E9',
        borderColor: 'transparent',
      },
      activeDot: {
        width: 12.5,
        height: 12.5,
        borderRadius: 6.25,
        borderColor: '#007BFA',
      },
      recommendation: {
        width: (width - (36 * 2)) / 2,
        marginHorizontal: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 12,
        marginVertical: 36 * 0.5,
      },
      recommendationImage: {
        width: (width - (36* 2)) / 2,
        height: (width - (36 * 2)) / 2,
      },
      recommendationHeader: {
        overflow: 'hidden',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
      },
      recommendationOptions: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 36 / 2,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderColor: 'red',
      },
      recommendationTemp: {
        fontSize: 14 * 1.25,
        color: 'white'
      }

})