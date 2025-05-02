    import * as THREE from 'three'
    import { WEBGL } from './webgl'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


    export funtion createFloor(){
    //바닥 추가
        const floorGeometry = new THREE.PlaneGeometry(100,100);
        const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xd3d3d3, side: THREE.DoubleSide });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI/2;
        floor.receiveShadow = true;
        return floor;
    }


