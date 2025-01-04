"use client";

import { Post, posts } from "#site/content";
import { formatDate, sortPosts } from "@/lib/utils";
import {
  Image,
  Scroll,
  ScrollControls,
  Text,
  useScroll,
} from "@react-three/drei";
import { Canvas, GroupProps, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import * as Three from "three";

export const CardStack = () => (
  <Canvas
    dpr={[1, 1.5]}
    style={{ width: "auto" }}
    className="m-auto mx-4 mb-5 rounded-md border border-border"
  >
    <ScrollControls
      style={{
        left: "15px",
      }}
      infinite
      eps={1}
    >
      <Scene />
    </ScrollControls>
  </Canvas>
);

const Scene = ({ ...props }) => {
  const ref = useRef<Three.Group>(null!);
  const router = useRouter();

  const len = Math.PI / 2;
  const from = -0.25; // could be 0
  const radius = 5.25;

  const latestPosts = sortPosts([...posts].slice(0, 5));
  const length = latestPosts.length;

  const [hovered, setHover] = useState<number | null>(null);
  const [active, setActive] = useState<number>(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const scroll = useScroll();
  const { size } = useThree();

  useEffect(() => {
    // update active on scroll
    const onScrollChange = () => {
      const newActive = Math.round(scroll.offset * (length - 1));
      setActive(Math.abs(newActive));
    };

    // listen to scroll
    scroll.el.addEventListener("scroll", onScrollChange);

    // clean up
    return () => {
      scroll.el.removeEventListener("scroll", onScrollChange);
    };
  }, [scroll, length, size.height]);

  // update camera
  useFrame((state, delta) => {
    state.events.update?.();

    // update camera movement based on pointer position
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9],
      0.3,
      delta,
    );

    //camera looks at the center
    state.camera.lookAt(0, 0, 0);
  });

  // handle click of individual card
  const handleOnClick = useCallback(
    (i: number) => {
      // scroll to position based on index
      const offset = Three.MathUtils.clamp(i / (length - 1), 0.05, 0.95);

      scroll.el.scrollTo({ top: size.height * offset, behavior: "smooth" });

      setScrollOffset(offset);
    },
    [length, scroll.el, size.height],
  );

  return (
    <group ref={ref} {...props} position={[-3, 0, 0]}>
      <Scroll>
        {latestPosts.map((post, i) => {
          const angle = from + (i / length) * -len;

          return (
            <Card
              key={angle}
              onPointerOver={(e) => (e.stopPropagation(), setHover(i))}
              onPointerOut={() => setHover(null)}
              position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
              rotation={[0, Math.PI / 2 + angle, 0]}
              active={active === i}
              hovered={hovered === i}
              url={post.cover.src}
              onDoubleClick={(e) => (
                e.stopPropagation(), router.push(post.slug)
              )}
              onClick={(e) => (e.stopPropagation(), handleOnClick(i))}
            />
          );
        })}
      </Scroll>
      <ActiveCard active={active} />
    </group>
  );
};

const Card = ({
  url,
  active,
  hovered,
  ...props
}: {
  url: string;
  active: boolean;
  hovered: boolean;
} & GroupProps) => {
  const ref = useRef<Three.Mesh>(null!);
  useFrame((_, delta) => {
    const mutilplier = hovered || active ? 1.4 : 1;
    easing.damp3(
      ref.current.scale,
      [1.618 * mutilplier, 1 * mutilplier, 1],
      0.15,
      delta,
    );
    easing.damp3(
      ref.current.position,
      [0, hovered || active ? 0.25 : 0, 0],
      0.1,
      delta,
    );
  });

  return (
    <group {...props}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        ref={ref}
        url={url}
        transparent
        radius={0.075}
        scale={[1.618, 1]}
        side={Three.DoubleSide}
      />
    </group>
  );
};

const ActiveCard = ({
  active,
  ...props
}: {
  active: number;
  post?: Post | null;
}) => {
  const ref = useRef<Three.Mesh>(null!);

  const { theme } = useTheme();

  const router = useRouter();

  const color = theme === "light" ? "hsl(220, 15%, 15%)" : "hsl(255, 99%, 99%)";

  const latestPosts = sortPosts([...posts].slice(0, 5));
  const activePost = latestPosts[active];

  useLayoutEffect(
    () =>
      void ((
        ref.current.material as JSX.IntrinsicElements["imageMaterial"]
      ).zoom = 1.75),
    [active],
  );
  useFrame((state, delta) => {
    easing.damp(ref.current.material, "zoom", 1, 0.25, delta);
  });

  return (
    <group position={[4, 0, 0]} onClick={() => router.push(activePost.slug)}>
      <Text
        position={[0, 5, 0]}
        fontSize={0.4}
        color={color}
        font="/fonts/Raleway-SemiBold.ttf"
      >
        {activePost.title}
      </Text>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        ref={ref}
        transparent
        radius={0.2}
        position={[0, 2, 0]}
        scale={[10, 5]}
        zoom={0.5}
        url={activePost.cover.src}
      />
      <Text
        position={[-2.5, 0, 0.5]}
        fontSize={0.35}
        color={"hsl(255, 99%, 99%)"}
        fillOpacity={1}
        anchorX="right"
        anchorY="bottom-baseline"
        font="/fonts/Raleway-Regular.ttf"
      >
        {formatDate(activePost.date)}
      </Text>

      <Text
        position={[0, -1.5, 0]}
        rotation={[-0.5, 0, 0]}
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="top-baseline"
        font="/fonts/Raleway-Medium.ttf"
        maxWidth={11}
      >
        {activePost.description}
      </Text>
    </group>
  );
};
