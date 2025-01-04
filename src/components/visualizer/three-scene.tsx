"use client";

import { Post } from "#site/content";
import { wrapText, formatDate } from "@/lib/utils";
import { useHover } from "@/providers/hover";
import {
  useCursor,
  MeshPortalMaterial,
  CameraControls,
  Text,
  Image,
} from "@react-three/drei";
import {
  Canvas,
  extend,
  GroupProps,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { easing, geometry } from "maath";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Group, Mesh, FrontSide, Vector3, PerspectiveCamera } from "three";

extend(geometry);

const Scene = ({ latestPosts }: { latestPosts: Post[] }) => {
  const positionMap = new Map<number, [x: number, y: number, z: number]>([
    [0, [-1.8, 0, 0]],
    [1, [-0.6, 0, 0]],
    [2, [0.6, 0, 0]],
    [3, [1.8, 0, 0]],
  ]);

  const { theme } = useTheme();

  return (
    <Canvas
      className="m-auto mx-4 mb-5 rounded-md border border-border"
      style={{ width: "auto" }}
      flat
      camera={{ fov: 75, position: [0, 0, 20] }}
      // eventPrefix="client"
    >
      <color
        attach="background"
        args={[theme === "dark" ? "#191b18" : "#f0ede6"]}
      />
      <ambientLight intensity={4} />

      {latestPosts.map((post, index) => (
        <Frame
          key={index}
          position={positionMap.get(index)}
          index={index}
          post={post}
        />
      ))}

      <CameraRig />
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default Scene;

const Frame = ({
  position,
  index,
  post: { title, cover, date, slug },
}: { post: Post; index: number } & GroupProps) => {
  //   const [hovered, setHovered] = useState(false);
  const {
    state: { hovered },
    dispatch,
  } = useHover();
  const groupRef = useRef<Group>(null!);
  const imageRef = useRef<Mesh>(null!);

  const wrappedTitle = wrapText(title, 15);

  //   useCursor(hovered);
  const router = useRouter();

  useFrame((state, delta) => {
    easing.damp3(
      groupRef.current?.scale,
      hovered[index] ? [1.1, 1.1, 1] : [1, 1, 1],
      0.1,
      delta,
    );
    easing.dampC(
      (imageRef.current.material as any).color,
      hovered[index] ? "#ffffff" : "#9a9a9a",
      hovered[index] ? 0.3 : 0.15,
      delta,
    );
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={() =>
        dispatch({ type: "set", payload: { [index]: true } })
      }
      onPointerOut={() =>
        dispatch({ type: "set", payload: { [index]: false } })
      }
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/${slug}`);
      }}
    >
      {/* Title */}
      <Text
        color={"#ffffff"}
        fontSize={0.09}
        fontWeight={900}
        anchorY="top"
        anchorX="left"
        lineHeight={1.1}
        position={[-0.45, 0.45, 0.05]}
        material-toneMapped={false}
      >
        {wrappedTitle}
      </Text>
      <Text
        fontSize={0.06}
        fontWeight={900}
        anchorY={"bottom"}
        anchorX={"left"}
        lineHeight={1}
        position={[-0.45, -0.45, 0.03]}
        material-toneMapped={false}
      >
        {formatDate(date)}
      </Text>
      <mesh>
        {/* @ts-ignore */}
        <roundedPlaneGeometry args={[1, 1, 0.05]} />
        <MeshPortalMaterial side={FrontSide}>
          <Image url={cover.src} ref={imageRef} />
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
};

const CameraRig = ({
  position = new Vector3(0, 0, 2),
  focus = new Vector3(0, 0, 0),
}) => {
  const { controls } = useThree();

  useEffect(() => {
    (controls as any)?.setLookAt(
      ...position.toArray(),
      ...focus.toArray(),
      true,
    );
  });

  return (
    <CameraControls
      //   ref={cameraControlsRef}
      makeDefault
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 1.5}
      minAzimuthAngle={-Math.PI / 3}
      maxAzimuthAngle={Math.PI / 3}
      maxDistance={5}
      minDistance={1}
    />
  );
};
