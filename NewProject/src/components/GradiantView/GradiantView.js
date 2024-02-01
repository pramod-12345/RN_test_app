import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const GradiantView = () => {
    return (
        <View style={{ height: '100%' }}>

            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FE81A0', '#D649B1', '#9254BA']} style={styles.linearGradient}>
                <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 20, color: 'white' }}>Earn $20 Cash for Every Brand You Refer to Collabstr</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        marginTop: 200,
        height: '30%',
        width: '100%',

    },

})

export default GradiantView