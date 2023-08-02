import toast from 'react-hot-toast';

export function Header() {
  return (
    <header className="flex flex-row justify-between bg-[#F2F2F2] items-between py-2.5 px-4">
      <p className="font-semibold text-gray-900 text-lg my-auto">
        Reverse Video
      </p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            'https://reverse.maxaljadery.com'
          );
          toast.success('Copied Link!', {
            className: 'text-sm font-medium text-gray-900',
          });
        }}
        className="px-4 py-1.5 rounded text-sm text-white bg-[#FF623D] hover:opacity-90"
      >
        Share
      </button>
    </header>
  );
}
