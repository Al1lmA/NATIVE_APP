import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ServiceCard({ navigation, ...service }) {
    const handlePress = () => {
        navigation.navigate('AboutService', { id: service.id });
    };

    return (
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
      backgroundColor: 'white', /* Добавляем белый фон для карточки */
    },
    backgroundImage: {
      width: '100%',
      height: 230,
      resizeMode: 'cover', /* Изменяем свойство resizeMode на 'cover' для изображения */
    },
    content: {
      position: 'absolute', /* Изменяем расположение контента на абсолютное */
      bottom: 0, /* Размещаем контент в нижней части карточки */
      paddingHorizontal: 10, /* Меняем padding на paddingHorizontal */
      paddingVertical: 5, /* Добавляем вертикальный padding для контента */
      backgroundColor: 'rgba(0, 70, 160, 0.5)',
      width: '100%', /* Задаем ширину 100% для контента */
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5, /* Добавляем отступ вниз для заголовка */
    },
    buttonText: {
      color: 'white',
      fontSize: 14, /* Увеличиваем размер текста для кнопки */
    },
  });