import React from 'react';
import { StyleSheet, View, Image, Platform, Text, ScrollView } from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image 
            style={styles.banner}
            source={require('./assets/img/bg.jpg')} 
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en París</Text>
          <ScrollView
            horizontal
          >
            <View>
              <Image 
                style={styles.ciudad}
                source={require('./assets/img/actividad1.jpg')} 
              />
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={require('./assets/img/actividad2.jpg')} 
              />
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={require('./assets/img/actividad3.jpg')} 
              />
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={require('./assets/img/actividad4.jpg')} 
              />
            </View>
            <View>
              <Image 
                style={styles.ciudad}
                source={require('./assets/img/actividad5.jpg')} 
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Los mejores Alojamientos</Text>
          <View>
              <Image 
                style={styles.mejores}
                source={require('./assets/img/mejores1.jpg')} 
              />
          </View>
          <View>
              <Image 
                style={styles.mejores}
                source={require('./assets/img/mejores2.jpg')} 
              />
          </View>
          <View>
              <Image 
                style={styles.mejores}
                source={require('./assets/img/mejores3.jpg')} 
              />
          </View>
          <Text style={styles.titulo}>Hospedajes en LA</Text>
          <View style={styles.listado}>
            <View style={styles.listadoItem}>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/hospedaje1.jpg')} 
                />
                <Text>Casa 3 Recámaras</Text>
            </View>
            <View style={styles.listadoItem}>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/hospedaje2.jpg')} 
                />
                <Text>Oficina Moderna</Text>
            </View>
            <View style={styles.listadoItem}>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/hospedaje3.jpg')} 
                />
                <Text>Espacio recreativo</Text>
            </View>
            <View style={styles.listadoItem}>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/hospedaje4.jpg')} 
                />
                <Text>Cocina hogareña</Text>
            </View>
          </View>
        </View>  
        {/* <View style={styles.contenedor}>
          <View style={styles.caja1}></View>
          <View style={styles.caja2}></View>
          <View style={styles.caja3}></View>
          <View style={styles.caja4}></View>
        </View> */}        
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: Platform.OS === 'ios' ? 250 : 200,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  }
  // contenedor: {
  //   backgroundColor: 'cornflowerblue',
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center'
  // },
  // caja1: {
  //   padding: 20,
  //   backgroundColor: 'navy'
  // },
  // caja2: {
  //   padding: 20,
  //   backgroundColor: 'yellow'
  // },
  // caja3: {
  //   padding: 20,
  //   backgroundColor: 'green'
  // },
  // caja4: {
  //   padding: 20,
  //   backgroundColor: 'teal'
  // }
});

export default App;
