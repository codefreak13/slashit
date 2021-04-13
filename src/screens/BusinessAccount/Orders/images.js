import React from 'react'
import { Text } from 'react-native'
import { ImageGallery } from '@nlabs/react-native-image-gallery'
import axios from 'axios'
class Images extends React.PureComponent {
  state = {
    images: []
  }
  getImages = async () => {
    try {
      const images = await axios
        .get('https://picsum.photos/v2/list')
       console.log(images.data, 'hh')
    this.setState({images: images.data})
    //   console.log(images, 'gg')
    } catch {
      e => console.log(e)
    }
  }
  componentDidMount() {
    console.log('hiiii')
    this.getImages()
  }

  render() {
    console.log(this.state.images, 'jjj')
    const { images } = this.props
    const imageUrls = this.state.images.map((img) => ({
        url: img.url,
        id: img.id,
        title: img.author,
        description: img.download_url
      })
    );
    return <ImageGallery images={imageUrls} />;
    // return <Text>Hiii</Text>
  }
}
export default Images
