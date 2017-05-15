import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Card, Button } from 'react-native-elements';

const Confirm = ({ title, visible, onAccept, onDecline }) => {

   return (
      <Modal
         visible={visible}
         transparent
         animationType="slide"
         onRequestClose={() => { }}
      >
         <View style={styles.containerStyle} titleStyl={{fontSize:15}}>
            <Card title={title} containerStyle={{borderRadius:5}}>
               <View style={{ flexDirection: 'row' }}>
                  <Button
                     style={{ flex: 1 }}
                     title='是'
                     borderRadius={5}
                     fontSize={18}
                     backgroundColor='#75cb00'
                     onPress={onAccept}
                  />
                  <Button
                     style={{ flex: 1 }}
                     title='否'
                     borderRadius={5}
                     fontSize={18}
                     backgroundColor='#D10036'
                     onPress={onDecline}
                  />
               </View>
            </Card>
         </View>
      </Modal>
   );
};

const styles = {
   containerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
   }
};

export default Confirm;