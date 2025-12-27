type Props = {
  notice: {
    text: string;
    date: string;
  };
  onClose: () => void;
};

export function NoticeModal({ notice, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-2">Announcement</h3>
        <p className="text-gray-700 mb-4">{notice.text}</p>
        <p className="text-sm text-gray-500">Posted on {notice.date}</p>
      </div>
    </div>
  );
}
