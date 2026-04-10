'use client'

import { useState } from 'react'

function Avatar({ initials, color, size = 'md' }: { initials: string; color: string; size?: 'sm' | 'md' }) {
  const sz = size === 'sm' ? 'h-9 w-9 text-xs' : 'h-10 w-10 text-sm'
  return (
    <div className={`${sz} rounded-full bg-gradient-to-br ${color} flex items-center justify-center font-bold text-white shrink-0 select-none`}>
      {initials}
    </div>
  )
}

export function CreatePost() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  return (
    <div className="bg-white dark:bg-[#242526] rounded-xl shadow-sm">
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <Avatar initials="AM" color="from-violet-500 to-purple-600" />
        {open ? (
          <textarea
            autoFocus
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="What's on your mind, Alex?"
            rows={3}
            className="flex-1 resize-none rounded-xl bg-[#F0F2F5] dark:bg-[#3A3B3C] px-4 py-2.5 text-sm text-[#1C1E21] dark:text-[#E4E6EB] placeholder-[#65676B] dark:placeholder-[#B0B3B8] outline-none focus:ring-1 focus:ring-[#1877F2]/40"
          />
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="flex-1 text-left rounded-full bg-[#F0F2F5] dark:bg-[#3A3B3C] px-4 py-2.5 text-sm text-[#65676B] dark:text-[#B0B3B8] hover:bg-[#E4E6E9] dark:hover:bg-[#4E4F50] transition-colors"
          >
            What&apos;s on your mind, Alex?
          </button>
        )}
      </div>

      {open && (
        <div className="px-4 pb-3 flex justify-end">
          <button
            onClick={() => { setOpen(false); setText('') }}
            className="mr-2 px-4 py-1.5 rounded-lg text-sm font-semibold text-[#65676B] dark:text-[#B0B3B8] hover:bg-[#F0F2F5] dark:hover:bg-[#3A3B3C] transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={!text.trim()}
            className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-[#1877F2] text-white hover:bg-[#166fe5] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Post
          </button>
        </div>
      )}

      <div className="h-px bg-[#CED0D4] dark:bg-[#3A3B3C] mx-4" />

      <div className="flex items-center px-2 py-1">
        <button className="flex flex-1 items-center justify-center gap-2 py-2 rounded-lg hover:bg-[#F0F2F5] dark:hover:bg-[#3A3B3C] transition-colors">
          <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          <span className="hidden sm:block text-xs font-semibold text-[#65676B] dark:text-[#B0B3B8]">Live video</span>
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 py-2 rounded-lg hover:bg-[#F0F2F5] dark:hover:bg-[#3A3B3C] transition-colors">
          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
          <span className="hidden sm:block text-xs font-semibold text-[#65676B] dark:text-[#B0B3B8]">Photo/video</span>
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 py-2 rounded-lg hover:bg-[#F0F2F5] dark:hover:bg-[#3A3B3C] transition-colors">
          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
          </svg>
          <span className="hidden sm:block text-xs font-semibold text-[#65676B] dark:text-[#B0B3B8]">Feeling/activity</span>
        </button>
      </div>
    </div>
  )
}
