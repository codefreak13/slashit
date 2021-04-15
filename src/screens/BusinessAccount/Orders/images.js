import React, { useState, useEffect, useCallback, useRef } from 'react'
import { View, Image, FlatList, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native'
import { Wrapper, Text } from '../../../components'
import NavHeader from '../../../components/NavHeader/NavHeader.screen' 
import Carousel from 'react-native-snap-carousel';


import axios from 'axios'
const IMAGE_SIZE = 280
const data = [1,2,3,4,5,6,7,8,9]
const imagesList = ({navigation}) => { 
  const [images, setImages] = useState([])
  const getImages = async () => {
    try {
      const images = await axios.get('https://picsum.photos/v2/list')
      setImages(images.data)
    } catch {
      e => console.log(e)
    }
  }
  useEffect(() => {
    getImages()
  }, [])
  const renderItem = ({ item, idx }) => { 
    return ( 
			<View style={{alignItems: 'center', justifyContent: 'center'}} >
				 <Image
            // style={{width: '100%', height: '100%'}}
            source={require('../../../assets/images/profile.jpeg')}
            resizeMode="contain"
          />
	  </View>
     
    )
  }
 
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ backgroundColor: 'transparent', flex: 1 }}>
			<NavHeader
        close
        navigation={navigation} 
      />
      <View style={{flex:1,}}> 
      <Carousel
              // ref={(c) => { this._carousel = c; }}
              data={data}
              renderItem={renderItem}
              sliderWidth={500}
              itemWidth={500} 
              contentContainerCustomStyle={{ alignSelf: 'center',}} 
            /> 
        </View>
      </View>
    </SafeAreaView>
  )
}

export default imagesList
