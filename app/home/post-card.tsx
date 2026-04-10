'use client'

import { useState } from 'react'

export type Post = {
  id: number
  author: { name: string; initials: string; color: string }
  time: string
  privacy: 'public' | 'friends'
  content: string
  hasImage?: boolean
  imageBg?: string
  imageEmoji?: string
  imageCaption?: string
  feeling?: string | null
  likes: number
  likeTypes: string[]
  comments: number
  shares: number
  topComment?: { author: string; initials: string; color: string; text: string }
}

function Avatar({ initials, color, size = 'md' }: { initials: string; color: string; size?: 'sm' | 'md' | 'lg' }) {
  const sz = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-11 w-11 text-sm' }[size]
  return (
    <div className={`${sz} rounded-full bg-gradient-to-br ${color} flex items-center justify-center font-bold text-white shrink-0 select-none`}>
      {initials}
    </div>
  )
}

export function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const toggleLike = () => {
    setLiked(v => !v)
    setLikeCount(c => liked ? c - 1 : c + 1)
  }

  return (
    <div className="bg-white dark:bg-[#242526] rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between px-4 pt-4 pb-2">
        <div className="flex items-center gap-3">
          <Avatar initials={post.author.initials} color={post.author.color} size="lg" />
          <div>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
              <span className="text-sm font-semibold text-[#1C1E21] dark:text-[#E4E6EB] hover:underline cursor-pointer leading-tight">
                {post.author.name}
              </span>
              {post.feeling && (
                <>
                  <span className="text-xs text-[#65676B] dark:text-[#B0B3B8]">is feeling</span>
                  <span className="text-xs font-medium text-[#1C1E21] dark:text-[#E4E6EB]">{post.feeling}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs text-[#65676B] dark:text-[#B0B3B8] hover:underline cursor-pointer">{post.time}</span>
              <span className="text-[#65676B] dark:text-[#B0B3B8] text-xs">·</span>
              {post.privacy === 'public' ? (
                <svg className="h-3 w-3 text-[#65676B] dark:text-[#B0B3B8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              ) : (
                <svg className="h-3 w-3 text-[#65676B] dark:text-[#B0B3B8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <button className="h-9 w-9 rounded-full hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] flex items-center justify-center transition-colors shrink-0">
          <svg className="h-5 w-5 text-[#65676B] dark:text-[#B0B3B8]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-sm text-[#1C1E21] dark:text-[#E4E6EB] leading-relaxed">{post.content}</p>
      </div>

      {/* Image */}
      {post.hasImage && (
        <div className={`w-full aspect-video bg-gradient-to-br ${post.imageBg} flex flex-col items-center justify-center gap-3`}>
          <span className="text-8xl">{post.imageEmoji}</span>
          {post.imageCaption && (
            <span className="text-sm font-medium text-gray-500">{post.imageCaption}</span>
          )}
        </div>
      )}

      {/* Reaction bar */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-[#CED0D4] dark:border-[#3A3B3C]">
        <button className="flex items-center gap-1 group">
          <div className="flex -space-x-1">
            {post.likeTypes.map((emoji, i) => (
              <span key={i} className="h-[18px] w-[18px] rounded-full bg-white dark:bg-[#242526] flex items-center justify-center text-[10px] shadow ring-1 ring-white dark:ring-[#242526]">{emoji}</span>
            ))}
          </div>
          <span className="text-xs text-[#65676B] dark:text-[#B0B3B8] ml-1 group-hover:underline">
            {likeCount.toLocaleString()}
          </span>
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowComments(v => !v)}
            className="text-xs text-[#65676B] dark:text-[#B0B3B8] hover:underline"
          >
            {post.comments} comments
          </button>
          <span className="text-xs text-[#65676B] dark:text-[#B0B3B8] hover:underline cursor-pointer">{post.shares} shares</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center px-2 py-1 border-b border-[#CED0D4] dark:border-[#3A3B3C]">
        <button
          onClick={toggleLike}
          className={`flex flex-1 items-center justify-center gap-2 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
            liked
              ? 'text-[#1877F2] hover:bg-blue-50 dark:hover:bg-blue-950/30'
              : 'text-[#65676B] dark:text-[#B0B3B8] hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C]'
          }`}
        >
          <svg className="h-5 w-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={liked ? 0 : 2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
          </svg>
          Like
        </button>
        <button
          onClick={() => setShowComments(v => !v)}
          className="flex flex-1 items-center justify-center gap-2 py-1.5 rounded-lg text-sm font-semibold text-[#65676B] dark:text-[#B0B3B8] hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
          </svg>
          Comment
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 py-1.5 rounded-lg text-sm font-semibold text-[#65676B] dark:text-[#B0B3B8] hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] transition-colors">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
          Share
        </button>
      </div>

      {/* Comments */}
      {showComments && (
        <div className="px-4 py-3 space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0">AM</div>
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 rounded-full bg-[#F0F2F5] dark:bg-[#3A3B3C] px-4 py-2 text-xs text-[#1C1E21] dark:text-[#E4E6EB] placeholder-[#65676B] dark:placeholder-[#B0B3B8] outline-none focus:ring-1 focus:ring-[#1877F2]/30"
            />
          </div>
          {post.topComment && (
            <div className="flex items-start gap-2">
              <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${post.topComment.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                {post.topComment.initials}
              </div>
              <div>
                <div className="rounded-2xl bg-[#F0F2F5] dark:bg-[#3A3B3C] px-3 py-2 inline-block">
                  <p className="text-xs font-semibold text-[#1C1E21] dark:text-[#E4E6EB]">{post.topComment.author}</p>
                  <p className="text-xs text-[#1C1E21] dark:text-[#E4E6EB] mt-0.5">{post.topComment.text}</p>
                </div>
                <div className="flex items-center gap-3 mt-1 px-2">
                  <button className="text-xs font-semibold text-[#65676B] dark:text-[#B0B3B8] hover:underline">Like</button>
                  <button className="text-xs font-semibold text-[#65676B] dark:text-[#B0B3B8] hover:underline">Reply</button>
                  <span className="text-xs text-[#65676B] dark:text-[#B0B3B8]">1h</span>
                </div>
              </div>
            </div>
          )}
          {post.comments > 1 && (
            <button className="text-xs font-semibold text-[#65676B] dark:text-[#B0B3B8] hover:underline ml-10">
              View {post.comments - 1} more comment{post.comments - 1 !== 1 ? 's' : ''}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
