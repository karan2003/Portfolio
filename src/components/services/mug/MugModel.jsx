

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function MugModel(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/mugModel.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
          <group name="9df54687869a4ebbb52303d214c6c0c6fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_9" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_11" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_13" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_16" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_18" position={[0, 614.545, -139.448]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_21" position={[0, 843.366, -188.872]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Head" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Body" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Secondary_L" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Circle001" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object001" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object002" position={[0, 614.545, -139.448]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object003" position={[0, 843.366, -188.872]} rotation={[-Math.PI / 2, 0, 0]} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Head} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Body} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Secondary} skeleton={nodes.Object_12.skeleton} />
                  <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Head} skeleton={nodes.Object_14.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Glow} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.Secondary} skeleton={nodes.Object_17.skeleton} />
                  <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.Head} skeleton={nodes.Object_19.skeleton} />
                  <skinnedMesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Secondary} skeleton={nodes.Object_20.skeleton} />
                  <skinnedMesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Secondary} skeleton={nodes.Object_22.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mugModel.glb')
