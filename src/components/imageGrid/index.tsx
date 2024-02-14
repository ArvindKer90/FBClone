import React, {useEffect, useState} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface ImageGridProps {
  images?: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({images = []}) => {
  const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0});
  const fullWidth = Dimensions.get('window').width;

  useEffect(() => {
    // Get image dimensions asynchronously
    if (images.length === 1 || images.length === 3) {
      var imgHeight = 0;
      Image.getSize(images[0], (width, height) => {
        imgHeight = (fullWidth * height) / width;
        setImageDimensions({width: fullWidth, height: imgHeight});
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const renderRow = (start: number, end: number, rowNo: number) => {
    return images.slice(start, end).map((item, index) => (
      <View>
        <FastImage
          key={index}
          style={
            (rowNo === 1 && images.length === 1) ||
            (rowNo === 1 && images.length === 3)
              ? {width: imageDimensions.width, height: imageDimensions.height}
              : (rowNo === 1 && images.length !== 1) ||
                (rowNo === 2 && images.length === 4) ||
                (rowNo === 2 && images.length === 3)
              ? styles.firstRowImages
              : styles.image
          }
          source={{
            uri: item,
            priority: FastImage.priority.normal,
          }}
        />
        {rowNo === 2 && index === 2 && images.length > 5 ? (
          <View style={styles.remaining}>
            <Text style={styles.remainingText}>+{images.length - 5} more</Text>
          </View>
        ) : null}
      </View>
    ));
  };

  return (
    <View
      style={
        images.length !== 1 && images.length !== 3 ? styles.container : null
      }>
      <View style={styles.row}>
        {images.length === 3 ? renderRow(0, 1, 1) : renderRow(0, 2, 1)}
      </View>
      <View style={styles.row}>
        {images.length === 3 ? renderRow(1, 5, 2) : renderRow(2, 5, 2)}
      </View>
    </View>
  );
};

export default ImageGrid;
