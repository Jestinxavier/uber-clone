import { StyleSheet, Text, View, TouchableOpacity,FlatList, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:'MapScreen'
    },
    {
        id:"1234",
        title:"Get a ride",
        image:"https://links.papareact.com/28w",
        screen:'EatsScreen'

    },
]

const NavOptions = () => {
    const navigation = useNavigation();

  return (
   
    <FlatList 
    keyExtractor={(item)=>item.id}
    data={data}
    horizontal

    renderItem={({item})=>(
        <TouchableOpacity style={[tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`]} onPress={()=>navigation.navigate('MapScreen')}>
            <View>
                <Image 
                style={{width:120,height:120,resizeMode:'contain'}}
                source={{
                    uri:item.image
                }}
                />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color='white' type='antdesign'/>
            </View>
        </TouchableOpacity>
    )}
    />
  
  )
}

export default NavOptions

const styles = StyleSheet.create({})