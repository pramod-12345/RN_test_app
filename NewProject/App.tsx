import React from 'react'
// import Button from './src/components/Button/Button'

import { View } from 'react-native'
import GradiantView from './src/components/GradiantView/GradiantView'
const App = () => {
  return (
    <View style={{ backgroundColor: 'white', height: '100%', justifyContent: 'center' }}>
      <GradiantView />
      {/* <Button text={"Save"} /> */}
    </View>
  )
}

export default App