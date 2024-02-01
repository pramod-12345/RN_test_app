import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'



const Button = (props) => {
    const [isLoading, setIsloading] = useState(false);

    return (

        <TouchableOpacity style={{ backgroundColor: 'black', width: '90%', alignSelf: 'center', height: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} onPress={() => { setIsloading(!isLoading) }}>
            {!isLoading ? <Text style={{ color: 'white', width: 'auto', fontWeight: '700', fontSize: 16 }}>{props.text}{" "}</Text>
                : <ActivityIndicator size="small" color="white" />}
        </TouchableOpacity>

    )
}

export default Button