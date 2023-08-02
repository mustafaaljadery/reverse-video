import { Content } from '@/components/Content';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [video, setVideo] = useState<any>(null);
  const [newVideo, setNewVideo] = useState<any>(null);
  const [ready, setReady] = useState(false);

  return (
    <>
      <Head>
        <title>Reverse Video</title>
      </Head>
      <div className="flex flex-col divide-y h-[100vh] w-[100vw]">
        <Header />
        <div className="flex-1 h-full w-full flex flex-row divide-x">
          <Content
            newVideo={newVideo}
            setNewVideo={setNewVideo}
            video={video}
            setVideo={setVideo}
          />
          <Sidebar
            newVideo={newVideo}
            setNewVideo={setNewVideo}
            video={video}
            setVideo={setVideo}
            ready={ready}
            setReady={setReady}
          />
        </div>
      </div>
    </>
  );
}
