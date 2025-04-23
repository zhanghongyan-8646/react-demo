// src/components/ThreeScene.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '@/assets/3d.scss';

// 导入dat
import * as dat from "dat.gui";


// 导入轨道控制器
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    // 初始化场景
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 5;

    // 创建渲染器
    // 这里使用了 WebGLRenderer，您也可以使用其他渲染器，如 CanvasRenderer
    const renderer = new THREE.WebGLRenderer({ antialias: true});
    
    // 设置渲染器大小并添加到DOM
    renderer.setPixelRatio(window.devicePixelRatio); // 设置像素比
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);
    
    // 添加立方体(几何+材质)
    // 这里使用了 BoxGeometry，您可以根据需要使用其他几何体，如 SphereGeometry、CylinderGeometry 等
    const geometry = new THREE.BoxGeometry(1, 1, 1);// 1, 1, 1 是立方体的宽高深
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }); // 0x00ff00 是颜色值，您可以根据需要使用其他材质，如 MeshStandardMaterial、MeshPhongMaterial 等
    const cube = new THREE.Mesh(geometry, material);
    // 添加到场景中
    scene.add(cube);

    // 添加网格辅助器
    // 这里使用了 GridHelper，您可以根据需要使用其他辅助器，如 AxesHelper、DirectionalLightHelper 等
    // 网格辅助器是一个3D对象，用于显示网格，它可以帮助您更好地理解场景中的网格
    const size = 10; // 网格的大小
    const divisions = 10; // 网格的数量
    const gridHelper = new THREE.GridHelper(size, divisions, 0xffffff, 0xffffff); // 10表示显示的网格的大小为10个单位(立方体的宽高为1个单位)，10表示显示的网格的数量为10个
    // 为了更方便观察, 设置opacity透明度
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.5;  // 设置透明度为0.5
    scene.add(gridHelper); // 将网格添加到场景中
    
    // 显示坐标轴
    // 这里使用了 AxesHelper，您可以根据需要使用其他辅助器，如 GridHelper、DirectionalLightHelper 等
    // 坐标轴辅助器是一个3D对象，用于显示坐标轴，它可以帮助您更好地理解场景中的坐标
    // x轴是红色，y轴是绿色，z轴是蓝色 （z轴垂直xy轴即屏幕，所以我们看不到z轴的颜色）相当于顶视图
    const axesHelper = new THREE.AxesHelper(10); // 10表示显示的坐标的长度为10个单位(立方体的宽高为1个单位)
    scene.add(axesHelper); // 将坐标轴添加到场景中

    // 创建轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement);

    // 通过调用三维向量的方法控制移动
      // cube.position.set(3, 3, 3);
      // 通过调用三维向量的方法控制缩放
      // cube.scale.set(0.5, 0.5, 0.5);

      // 通过设置三维向量的属性控制旋转
      cube.rotation.x = Math.PI / 4;
      // 通过三维向量的方法控制旋转
      cube.rotation.set(Math.PI / 4, 0, 0);
    // 初始化
    const gui = new dat.GUI();
    gui.add(cube.position, "x").min(-10).max(10).step(1);


    // 动画循环
    const animate = () => {
      // 这里使用了 requestAnimationFrame，您也可以使用其他方法，如 setTimeout、setInterval 等 下一帧渲染回调函数
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01; // 如果需要，可以添加z轴旋转


      // 渲染场景和相机
      renderer.render(scene, camera);
      // 更新轨道控制器
      controls.update();

      // 监听window的resize事件, 在回调中重绘canvas
      window.addEventListener("resize", () => {
        // 设置相机宽高比
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // 设置渲染器
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

    };
    
    animate();

    // 清理函数
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};
