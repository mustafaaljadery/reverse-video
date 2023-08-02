import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
const ffmpeg = createFFmpeg({ log: true });
import toast from 'react-hot-toast';

interface Props {
  video: any;
  setVideo: Dispatch<SetStateAction<any>>;
  newVideo: any;
  setNewVideo: Dispatch<SetStateAction<any>>;
  ready: boolean;
  setReady: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar({
  video,
  setVideo,
  newVideo,
  setNewVideo,
  ready,
  setReady,
}: Props) {
  const [rendering, setRendering] = useState(false);

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async () => {
    setRendering(true);
    toast.loading('rendering...', {
      className: 'text-sm font-medium text-gray-900',
    });
    // Write the file to memory
    ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

    // Run the FFMpeg command
    await ffmpeg.run(
      '-i',
      'test.mp4',
      '-vf',
      'reverse',
      '-af',
      'areverse',
      'out.mp4'
    );

    // Read the result
    const data = ffmpeg.FS('readFile', 'out.mp4');

    // Create a URL
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: 'image/mp4' })
    );
    toast.remove();
    toast.success('Rendered!', {
      className: 'text-sm font-medium text-gray-900',
    });
    setNewVideo(url);
    setRendering(false);
  };

  return (
    <div
      className={
        'min-w-[400px] p-4 flex flex-col justify-between items-between h-full ' +
        (!video ? 'opacity-50' : '')
      }
    >
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-xl font-semibold text-gray-900">
          Render a Video
        </h2>
        <p className="text-sm font-regular text-gray-400">
          Select a video to continue!
        </p>
      </div>
      <button
        onClick={() => {}}
        disabled={!video || rendering}
        className="w-full py-1.5 font-medium text-white text-sm hover:opacity-90 rounded bg-[#FF623D]"
      >
        Render Video
      </button>
    </div>
  );
}
