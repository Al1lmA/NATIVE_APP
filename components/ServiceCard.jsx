import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ServiceCard({ navigation, ...service }) {
    const handlePress = () => {
        navigation.navigate('AboutService', { id: service.id });
    };

    return (
        // <View style={styles.card}>
        //     <Image
        //         style={styles.image}
        //         source={{ uri: service.image }}
        //         resizeMode='contain'
        //     />
        //     <View style={styles.container}>
        //         <Text style={styles.brandTitle}>{service.title}</Text>
        //         <View style={styles.row}>
        //             <Text style={styles.text}>{service.title}</Text>
        //             <Text style={styles.text}>{props.price} р.</Text>
        //         </View>
        //     </View>
        //     <Button title='View details' onPress={handlePress} />
        // </View>
        <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{ uri: service.image }} style={styles.backgroundImage} />
        <View style={styles.content}>
          <Text style={styles.title}>{service.title}</Text>
          <Text style={styles.buttonText}>Подробнее</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
}

// const styles = StyleSheet.create({
//     card: {
//         display: 'flex',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         flexDirection: 'column',
//         width: 320,
//         backgroundColor: '#303030',
//         borderRadius: 12,
//         padding: 24,
//         gap: 12,
//         margin: 8,
//     },
//     image: { height: 320, alignSelf: 'stretch' },
//     container: { display: 'flex', width: '100%', margin: 8 },
//     row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
//     brandTitle: { color: '#4287f5', fontSize: 16 },
//     text: { color: '#f0f0f0', fontSize: 16 },
// });

const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      overflow: 'hidden',
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
    },
    backgroundImage: {
      width: '100%',
      height: 200,
    },
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonText: {
      color: 'white',
    },
  });