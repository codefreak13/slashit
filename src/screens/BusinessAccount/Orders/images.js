import React, { useState, useEffect } from 'react'
import { View, Image, FlatList, TouchableOpacity} from 'react-native'
import { Wrapper, Text } from '../../../components'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
// import FastImage from 'react-native-fast-image'
// import { ImageGallery } from '@nlabs/react-native-image-gallery'
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
    console.log(item, 'ii')
    return ( 
			<TouchableOpacity style={{width: '100%',height: IMAGE_SIZE}}>
				 <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../../assets/images/profile.jpeg')}
            resizeMode="contain"
          />
			</TouchableOpacity>
     
    )
  }
  return (
    <Wrapper>
      <View style={{ backgroundColor: 'transparent', flex: 1 }}>
			<NavHeader
        close
        navigation={navigation} 
      />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => Math.random().toString()}
        />
      </View>
    </Wrapper>
  )
}

export default imagesList
