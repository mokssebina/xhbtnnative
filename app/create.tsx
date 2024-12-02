import React, { Suspense, useRef, useState } from 'react'
import { View, StyleSheet, Image, Platform } from 'react-native';

/*---------------------------THREE imports--------------------------*/
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber/native'
import MenuHolder from '@/components/SceneInputs/MenuHolder';
import PostModal from '@/components/SceneInputs/PostModal';



function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
    </mesh>
  )
}


const create = () => {

  const refRBSheet = useRef<any>();

  const [type, setType] = useState('')
  const [show, setShow] = useState(false)

  const openMenu = () => {
    console.log("open modal")
    console.log('type: ', type)
    refRBSheet.current.open()
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <View style={styles.screen}>
      <Canvas events={(value: any) => value}>

        <Suspense fallback={null}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Suspense>
      </Canvas>
      <MenuHolder openMenu={openMenu} setType={setType} />
      <PostModal show={show} closeModal={() => refRBSheet.current.close()} refRBSheet={refRBSheet} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#e6c0b5"
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  menuHolder: {
    position: 'absolute',
    width: '90%',
    marginLeft: '5%',
    bottom: 10,
    height: 54,
    backgroundColor: 'rgba(10, 10, 10, 0.4)',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    padding: 5
  },
  menuButton: {
    width: '20%',
    height: '100%'
  }
});

export default create