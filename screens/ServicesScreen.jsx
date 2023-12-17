import { useDispatch, useSelector } from "react-redux";
import React, {useEffect , useState} from "react";
import { axiosInstance } from "../API";
import axios from "axios";
import { StyleSheet, TextInput, View, Keyboard, Pressable , ScrollView, Text} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { setServices, setTitle, resetTitle} from "../store/serviceSlice";
import ServiceCard from "../components/ServiceCard";


export default function ServicesScreen({ navigation }) {

    const dispatch = useDispatch();
    const { services } = useSelector((store) => store.service);
    const { title } = useSelector((store) => store.service);

    const[input, setInput] = useState("");
    const[clicked, setClicked] = useState(false);


    useEffect(()=>{
        async function getAllServices(){
             console.log("in use effect, searching for")
             axiosInstance.get("services/search/?title="+title)
             .then((response)=>{
                  console.log("got data");
                  dispatch(setServices(response?.data.services))})
             .catch(function(err){
                  console.log("got error", err)
             });
        }
        getAllServices();
   }, [dispatch, title]);

   const SubmitFunc = ()=>{
    console.log ("SUBMITTED!")
    dispatch(setTitle(input))};


    return (
        <ScrollView style={styles.background}>

        <View style={styles.container}>
               <View
               style={
                    clicked
                    ? styles.searchBar__clicked
                    : styles.searchBar__unclicked
               }
               >
               {/* search Icon */}
               <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 5 }}
               />
               {/* Input field */}
               <TextInput
                    style={styles.input}
                    placeholder="..."
                    value={input}
                    onChangeText={setInput}
                    onFocus={() => {
                    setClicked(true);
                    }}
               />
               {/* cross Icon, depending on whether the search bar is clicked or not */}
               {clicked && (
                    <Entypo name="cross" size={25} color="black" style={{ padding: 1 , marginLeft: -20 }} onPress={() => {
                         setInput("");
                         dispatch(resetTitle())
                         setClicked(false);
                         // Keyboard.dismiss();
                         
                    }}/>
               )}
               </View>
               {/* cancel button, depending on whether the search bar is clicked or not */}
               {clicked && (
               <View>
                    <Pressable style = {styles.button} title='View details' onPress={SubmitFunc}> 
                         <Text style = {styles.buttonText}>Найти</Text> 
                    </Pressable>
               </View>
               )}
          </View>

            <View>
                {!!services &&
                    services.map((service) => <ServiceCard key={service.id} {...service} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // page: {
    //     display: 'flex',
    //     width: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    background: {
         backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },

    button: {
         backgroundColor: 'rgb(0, 100, 215)',
         padding: 14.7,
         borderRadius: 10,
         marginLeft: 10,
         width: 85
       },
     
       buttonText: {
         color: 'white',
         textAlign: 'center',
         fontSize: 15,
         fontWeight: 'bold'
       },

    container: {
         margin: 10,
         justifyContent: "flex-start",
         alignItems: "center",
         flexDirection: "row",
     //     width: "90%",
         
       },
       searchBar__unclicked: {
         padding: 10,
     //     marginLeft: 10,
         flexDirection: "row",
         width: "100%",
         backgroundColor: "white",
         borderRadius: 10,
         alignItems: "center",
         borderColor: 'rgb(0, 100, 215)',
         borderWidth: 1
       },
       searchBar__clicked: {
         padding: 10,
         flexDirection: "row",
         width: "75.7%",
     //     marginLeft: 10,
         backgroundColor: "#white",
         borderRadius: 10,
         alignItems: "center",
         justifyContent: "space-evenly",
         borderColor: 'rgb(0, 100, 215)',
         borderWidth: 1
       },
       input: {
         fontSize: 20,
         marginLeft: 20,
         width: "90%",
       },
});