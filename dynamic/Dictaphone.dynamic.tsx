import dynamic from 'next/dynamic'


export default dynamic(import("../components/Dictaphone/Dictaphone"), { ssr: false });
