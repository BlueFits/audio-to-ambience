import Link from 'next/link'
import RoadMap from "../assets/RoadMap.svg";
import Image from "next/image";
import Webcam from "react-webcam";
import { useState } from 'react';

export default function Home() {

  const [isScanning, setIsScanning] = useState(false);

  function gotResult(error, result) {
    if (error) { console.log(error); return; }
    console.log(result);
  }

  const classify = async () => {
    try {
      const classifier = await ml5.soundClassifier('SpeechCommands18w', { probabilityThreshold: 0.9 });
      classifier.classify(gotResult);
      setIsScanning(false);
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
        {/* <Image id="image_roadmap" alt="roadmap" src={RoadMap}/> */}
        {/* <Webcam id="video_id"/> */}
        <button 
          onClick={() => {
            setIsScanning(true);
            classify();
          }} 
          disabled={isScanning ? true : false}>
          Scan
        </button>
      </div>
    </div>
  )
}