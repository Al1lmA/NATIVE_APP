import { View, Text, Image, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../API';
import { resetService, setService } from '../store/serviceSlice';

export default function AboutServiceScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const { service } = useSelector((store) => store.service);
    useEffect(() => {
        async function getOneService() {
            await axiosInstance.get(`/services/${id}`).then((response) => dispatch(setService(response?.data)));
        }
        getOneService();
        return () => {
            dispatch(resetService());
        };
    }, [dispatch]);
    return (
        <View style={styles.container}>
            <Image source={{ uri: service.image }} style={styles.image} />
            <Text style={styles.title}>{service.title}</Text>
            <View style={styles.line1} />
            <View style={styles.line2} />
            <View style={styles.line3} />
            <Text style={styles.text}>{service.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f4f4f4',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        borderRadius: 10,
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
    line1: {
        width: '80%',
        height: 1,
        backgroundColor: 'rgb(0, 100, 215)',
        marginVertical: 3,
    },
    line2: {
        width: '80%',
        height: 1.5,
        backgroundColor: 'rgb(0, 100, 215)',
        marginVertical: 3,
    },
    line3: {
        width: '80%',
        height: 2,
        backgroundColor: 'rgb(0, 100, 215)',
        marginVertical: 3,
    },
});