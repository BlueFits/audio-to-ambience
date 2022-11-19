import Link from 'next/link'
import RoadMap from "../assets/RoadMap.svg";
import Image from "next/image";
import Webcam from "react-webcam";
import { useState } from 'react';

import DictaphoneDynamic from "../dynamic/Dictaphone.dynamic";


export default function Home() {

  const [isScanning, setIsScanning] = useState(false);

  function gotResult(error, result) {
    if (error) { console.log(error); return; }
    console.log(result);
  }

  const classify = async () => {
    try {
      // Initialize the Image Classifier method with MobileNet
      const classifier = ml5.imageClassifier('MobileNet',      
      () => {
        console.log('Model Loaded!');
      });
      // Make a prediction with a selected image
      const data = await classifier.classify(document.getElementById('image_roadmap'));
      console.log(data);
    } catch(err) {
      console.error(err)
    }
  };

  return (
    <div>
      <ul>
        <li>
          <Link href="/a" as="/a">
            Test deployment
          </Link>
        </li>
        <li>
          <Link href="/b" as="/b">
            b
          </Link>
        </li>
      </ul>

      <div>
        <DictaphoneDynamic />
        {/* <Webcam id="video_id"/> */}
        {/* <Image id="image_roadmap" alt="roadmap" src={RoadMap}/> */}
        {/* <button 
          onClick={() => {
            setIsScanning(true);
            classify();
          }} 
          disabled={isScanning ? true : false}>
          Scan
        </button> */}
      </div>
    </div>
  )
}