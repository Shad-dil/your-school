"use client";

import { useEffect, useRef, useState } from "react";
import { NoticeModal } from "./NoticeModal";

type Notice = {
  id: number;
  text: string;
  date: string;
  expiresOn: string;
};

export default function NoticeBoard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<1 | -1>(1);
  const intervalRef = useRef<null>(null);

  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const today = new Date();

  const notices: Notice[] = [
    {
      id: 1,
      text: "New DCA batch starts from 10 Feb 2025",
      date: "2025-12-27",
      expiresOn: "2026-04-01",
    },
    {
      id: 2,
      text: "ADCA admissions open – Limited seats",
      date: "2025-01-28",
      expiresOn: "2026-10-20",
    },
    {
      id: 3,
      text: "Tally with GST batch starting soon",
      date: "2025-01-30",
      expiresOn: "2026-07-25",
    },
    {
      id: 4,
      text: "Digital Marketing weekend batch available",
      date: "2025-01-25",
      expiresOn: "2026-08-10",
    },
  ];

  // 📅 Auto-expire notices
  const activeNotices = notices.filter((n) => new Date(n.expiresOn) >= today);

  // Duplicate for smooth scrolling
  const scrollNotices = [...activeNotices, ...activeNotices];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const startScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!container) return;

        const atBottom =
          container.scrollTop + container.clientHeight >=
          container.scrollHeight - 1;

        const atTop = container.scrollTop <= 0;

        if (atBottom) directionRef.current = -1;
        if (atTop) directionRef.current = 1;

        container.scrollTop += directionRef.current;
      }, 25);
    };

    const stopScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startScroll();
    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      container.removeEventListener("mouseenter", stopScroll);
      container.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <>
      <section className="bg-gray-50 py-20 px-6" id="noticeboard">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Announcements
        </h2>

        <div
          ref={containerRef}
          className="mx-auto h-56 max-w-3xl overflow-hidden rounded-lg border bg-white px-6 py-4 shadow"
        >
          {activeNotices.length === 0 && (
            <p className="text-center text-gray-500">
              No active announcements at the moment.
            </p>
          )}

          <ul className="space-y-4">
            {scrollNotices.map((notice, index) => {
              const isNew =
                (today.getTime() - new Date(notice.date).getTime()) /
                  (1000 * 60 * 60 * 24) <=
                7;

              return (
                <li
                  key={index}
                  onClick={() => setSelectedNotice(notice)}
                  className="
                    cursor-pointer
                    border-l-4 border-blue-700 pl-3
                    text-gray-800
                    transition-opacity
                    duration-500
                    hover:bg-blue-50
                  "
                >
                  <div className="flex items-center gap-2">
                    {isNew && (
                      <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">
                        NEW
                      </span>
                    )}
                    <span>{notice.text}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Posted on {notice.date}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-center text-sm mt-4 text-gray-500">
          Auto-scroll • Hover to pause • Click to view
        </p>
      </section>

      {/* 🖱️ MODAL */}
      {selectedNotice && (
        <NoticeModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}
    </>
  );
}
