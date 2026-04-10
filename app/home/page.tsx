import { PostCard, Post } from './post-card'
import { CreatePost } from './create-post'

export const metadata = { title: 'Home · NextLevel' }

// ─── mock data ────────────────────────────────────────────────────────────────

const currentUser = { name: 'Alex Morgan', initials: 'AM', color: 'from-violet-500 to-purple-600' }

const stories = [
  { id: 1, user: 'Sarah K.',  initials: 'SK', bg: 'from-pink-400   to-rose-500'    },
  { id: 2, user: 'Mike R.',   initials: 'MR', bg: 'from-blue-400   to-indigo-500'  },
  { id: 3, user: 'Emma L.',   initials: 'EL', bg: 'from-emerald-400 to-teal-500'   },
  { id: 4, user: 'James T.',  initials: 'JT', bg: 'from-orange-400 to-amber-500'   },
  { id: 5, user: 'Lisa P.',   initials: 'LP', bg: 'from-purple-400 to-violet-500'  },
]

const posts: Post[] = [
  {
    id: 1,
    author: { name: 'Sarah Johnson', initials: 'SJ', color: 'from-pink-500 to-rose-500' },
    time: '2 hours ago', privacy: 'public',
    content: 'Just got back from an amazing hike at Blue Mountain! The views were absolutely breathtaking. Every step was worth it! 🌄✨',
    likes: 142, likeTypes: ['👍', '❤️', '😮'], comments: 23, shares: 8,
    topComment: { author: 'Mike R.', initials: 'MR', color: 'from-blue-400 to-indigo-500', text: 'Wow, that sounds incredible! I need to go there sometime! 😍' },
  },
  {
    id: 2,
    author: { name: 'David Chen', initials: 'DC', color: 'from-blue-500 to-indigo-500' },
    time: '4 hours ago', privacy: 'friends',
    content: 'Finally finished reading "The Midnight Library" — what an emotional rollercoaster! Has anyone else read this? Would love to discuss! 📚',
    feeling: '📚 reading',
    likes: 89, likeTypes: ['👍', '❤️'], comments: 31, shares: 5,
    topComment: { author: 'Emma L.', initials: 'EL', color: 'from-emerald-400 to-teal-500', text: 'YES! I sobbed at the end. One of my favorite reads this year!' },
  },
  {
    id: 3,
    author: { name: 'Emma Liu', initials: 'EL', color: 'from-emerald-500 to-teal-500' },
    time: '6 hours ago', privacy: 'public',
    content: 'Homemade ramen from scratch — took 6 hours but absolutely worth it! 🍜🔥 Drop a 🍜 in the comments if you want the recipe!',
    hasImage: true, imageBg: 'from-orange-100 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/20', imageEmoji: '🍜', imageCaption: 'Homemade Tonkotsu Ramen',
    likes: 327, likeTypes: ['👍', '❤️', '😋'], comments: 67, shares: 44,
    topComment: { author: 'James T.', initials: 'JT', color: 'from-orange-400 to-amber-500', text: 'RECIPE PLEASE!! This looks absolutely incredible 🍜😍' },
  },
  {
    id: 4,
    author: { name: 'James Torres', initials: 'JT', color: 'from-orange-500 to-amber-500' },
    time: 'Yesterday at 9:30 AM', privacy: 'public',
    content: 'Big announcement! After 3 years of hard work, our startup just closed a $2M seed round! 🚀 So grateful for everyone who believed in us from day one. This is just the beginning! 💪',
    feeling: '🎉 celebrating',
    likes: 891, likeTypes: ['👍', '❤️', '🎉'], comments: 156, shares: 72,
    topComment: { author: 'Sarah J.', initials: 'SJ', color: 'from-pink-500 to-rose-500', text: 'Congratulations!! You deserve this so much! 🎉🥂' },
  },
]

const contacts = [
  { name: 'Sarah Johnson', initials: 'SJ', color: 'from-pink-500 to-rose-500',     online: true  },
  { name: 'David Chen',    initials: 'DC', color: 'from-blue-500 to-indigo-500',   online: true  },
  { name: 'Emma Liu',      initials: 'EL', color: 'from-emerald-500 to-teal-500',  online: true  },
  { name: 'James Torres',  initials: 'JT', color: 'from-orange-500 to-amber-500',  online: false },
  { name: 'Mike Reynolds', initials: 'MR', color: 'from-blue-400 to-cyan-500',     online: true  },
  { name: 'Lisa Park',     initials: 'LP', color: 'from-purple-500 to-violet-500', online: false },
  { name: 'Chris Walker',  initials: 'CW', color: 'from-red-500 to-rose-600',      online: true  },
  { name: 'Nina Patel',    initials: 'NP', color: 'from-yellow-500 to-orange-500', online: false },
]

const leftNav = [
  { emoji: '👥', label: 'Find friends'  },
  { emoji: '💭', label: 'Memories'      },
  { emoji: '🔖', label: 'Saved'         },
  { emoji: '👥', label: 'Groups'        },
  { emoji: '🎬', label: 'Watch'         },
  { emoji: '📅', label: 'Events'        },
  { emoji: '🛒', label: 'Marketplace'   },
]

// ─── sub-components (server) ─────────────────────────────────────────────────

function Avatar({ initials, color, size = 'md' }: { initials: string; color: string; size?: 'xs' | 'sm' | 'md' | 'lg' }) {
  const sz = { xs: 'h-7 w-7 text-[10px]', sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-11 w-11 text-sm' }[size]
  return (
    <div className={`${sz} rounded-full bg-gradient-to-br ${color} flex items-center justify-center font-bold text-white shrink-0 select-none`}>
      {initials}
    </div>
  )
}

function NavIcon({ children, active = false, label }: { children: React.ReactNode; active?: boolean; label: string }) {
  return (
    <button
      title={label}
      className={`relative flex h-12 w-12 md:w-20 xl:w-24 items-center justify-center rounded-xl transition-colors ${
        active
          ? 'text-[#1877F2] after:absolute after:bottom-0 after:inset-x-2 after:h-[3px] after:bg-[#1877F2] after:rounded-full'
          : 'text-[#65676B] dark:text-[#B0B3B8] hover:bg-[#F0F2F5] dark:hover:bg-[#3A3B3C]'
      }`}
    >
      {children}
    </button>
  )
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#18191A]">

      {/* ── Navbar ── */}
      <nav className="fixed inset-x-0 top-0 z-50 h-14 bg-white dark:bg-[#242526] shadow-sm flex items-center justify-between px-3 gap-2">

        {/* Left: logo + search */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1877F2]">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div className="relative hidden sm:block">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-[#65676B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search NextLevel"
              className="rounded-full bg-[#F0F2F5] dark:bg-[#3A3B3C] py-2 pl-9 pr-4 text-sm text-[#1C1E21] dark:text-[#E4E6EB] placeholder-[#65676B] outline-none focus:ring-2 focus:ring-[#1877F2]/30 w-52 transition-all"
            />
          </div>
        </div>

        {/* Center: nav tabs */}
        <div className="flex items-center">
          <NavIcon label="Home" active>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </NavIcon>
          <NavIcon label="Friends">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          </NavIcon>
          <NavIcon label="Watch">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" />
            </svg>
          </NavIcon>
          <NavIcon label="Marketplace">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6H17.82C17.4 4.84 16.3 4 15 4H9C7.7 4 6.6 4.84 6.18 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM9 6H15V8H9V6ZM12 17C10.34 17 9 15.66 9 14C9 12.34 10.34 11 12 11C13.66 11 15 12.34 15 14C15 15.66 13.66 17 12 17Z" />
            </svg>
          </NavIcon>
          <NavIcon label="Groups">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1C4.76 14.04 4.39 14 4 14c-1.1 0-2.1.35-2.92.94C.41 15.42 0 16.21 0 17v1h4.5v-1c0-.8.3-1.54.79-2.11zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 4c0-.79-.41-1.58-1.08-2.06C22.1 14.35 21.1 14 20 14c-.39 0-.76.04-1.13.1.49.57.79 1.31.79 2.11v1H24v-1zm-2-4c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-8 4c0-.79-.41-1.58-1.08-2.06C11.9 14.35 10.9 14 10 14c-.39 0-.76.04-1.13.1.49.57.79 1.31.79 2.11v1H22v-1zM12 17c0-.79-.41-1.58-1.08-2.06C10.1 14.35 9.1 14 8 14s-2.1.35-2.92.94C4.41 15.42 4 16.21 4 17v1h16v-1h-8z" />
            </svg>
          </NavIcon>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button className="h-9 w-9 rounded-full bg-[#E4E6EB] dark:bg-[#3A3B3C] flex items-center justify-center hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] transition-colors">
            <svg className="h-5 w-5 text-[#1C1E21] dark:text-[#E4E6EB]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
          <button className="h-9 w-9 rounded-full bg-[#E4E6EB] dark:bg-[#3A3B3C] flex items-center justify-center hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] transition-colors">
            <svg className="h-5 w-5 text-[#1C1E21] dark:text-[#E4E6EB]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
          <button className="relative h-9 w-9 rounded-full bg-[#E4E6EB] dark:bg-[#3A3B3C] flex items-center justify-center hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] transition-colors">
            <svg className="h-5 w-5 text-[#1C1E21] dark:text-[#E4E6EB]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-red-500 text-[9px] font-bold text-white flex items-center justify-center">3</span>
          </button>
          <button className="flex items-center gap-2 rounded-full hover:bg-[#F0F2F5] dark:hover:bg-[#3A3B3C] px-2 py-1 transition-colors">
            <Avatar initials={currentUser.initials} color={currentUser.color} size="xs" />
            <span className="hidden xl:block text-sm font-medium text-[#1C1E21] dark:text-[#E4E6EB]">Alex</span>
          </button>
        </div>
      </nav>

      {/* ── Body ── */}
      <div className="flex pt-14">

        {/* ── Left sidebar ── */}
        <aside className="fixed left-0 top-14 bottom-0 w-[280px] overflow-y-auto scrollbar-hide hidden lg:block p-2">
          {/* Profile link */}
          <a href="#" className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#E4E6EB] dark:hover:bg-[#3A3B3C] transition-colors mb-1">
            <Avatar initials={currentUser.initials} color={currentUser.color} size="md" />
            <span className="text-sm font-semibold text-[#1C1E21] dark:text-[#E4E6EB]">{currentUser.name}</span>
          </a>

          {leftNav.map(({ emoji, label }) => (
            <a key={label} href="#" className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#E4E6EB] dark:hover:bg-[#3A3B3C] transition-colors">
              <span className="h-9 w-9 rounded-full bg-[#E4E6EB] dark:bg-[#3A3B3C] flex items-center justify-center text-lg">{emoji}</span>
              <span className="text-sm font-medium text-[#1C1E21] dark:text-[#E4E6EB]">{label}</span>
            </a>
          ))}

          <div className="h-px bg-[#CED0D4] dark:bg-[#3A3B3C] my-3" />

          <p className="px-2 text-[15px] font-bold text-[#65676B] dark:text-[#B0B3B8] mb-2">Your shortcuts</p>
          {[
            { emoji: '💻', name: 'Web Developers Hub' },
            { emoji: '📷', name: 'Photography Lovers' },
            { emoji: '🎮', name: 'Gaming Community' },
          ].map(({ emoji, name }) => (
            <a key={name} href="#" className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#E4E6EB] dark:hover:bg-[#3A3B3C] transition-colors">
              <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-lg">{emoji}</span>
              <span className="text-sm font-medium text-[#1C1E21] dark:text-[#E4E6EB] leading-tight">{name}</span>
            </a>
          ))}

          <p className="mt-4 px-2 text-xs text-[#65676B] dark:text-[#B0B3B8] leading-relaxed">
            Privacy · Terms · Advertising · Cookies · More · NextLevel © 2026
          </p>
        </aside>

        {/* ── Center feed ── */}
        <main className="flex-1 lg:ml-[280px] xl:mr-[280px] flex justify-center py-5 px-2 sm:px-4 min-h-[calc(100vh-56px)]">
          <div className="w-full max-w-[590px] space-y-4">

            {/* Create post */}
            <CreatePost />

            {/* Stories */}
            <div className="bg-white dark:bg-[#242526] rounded-xl shadow-sm p-3">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-[#1C1E21] dark:text-[#E4E6EB]">Stories</h2>
                <button className="text-sm font-semibold text-[#1877F2] hover:bg-blue-50 dark:hover:bg-blue-950/30 px-2 py-1 rounded-md transition-colors">See all</button>
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {/* Create story card */}
                <div className="flex flex-col items-center shrink-0 w-24 rounded-xl overflow-hidden shadow-sm border border-[#CED0D4] dark:border-[#3A3B3C] cursor-pointer group">
                  <div className="w-full h-28 bg-[#F0F2F5] dark:bg-[#3A3B3C] flex items-center justify-center relative overflow-hidden">
                    <Avatar initials={currentUser.initials} color={currentUser.color} size="lg" />
                    <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-[#1877F2] flex items-center justify-center shadow-md ring-2 ring-white dark:ring-[#3A3B3C]">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                    </div>
                  </div>
                  <div className="w-full bg-white dark:bg-[#242526] py-2 text-center">
                    <p className="text-[11px] font-semibold text-[#1C1E21] dark:text-[#E4E6EB] leading-tight">Create story</p>
                  </div>
                </div>

                {/* Friend stories */}
                {stories.map(story => (
                  <div key={story.id} className="shrink-0 w-24 rounded-xl overflow-hidden shadow-sm cursor-pointer relative group">
                    <div className={`w-full h-36 bg-gradient-to-b ${story.bg} flex items-end justify-start p-2`}>
                      <div className="h-9 w-9 rounded-full bg-white dark:bg-[#242526] p-0.5 ring-4 ring-[#1877F2] absolute top-2 left-2">
                        <div className={`h-full w-full rounded-full bg-gradient-to-br ${story.bg} flex items-center justify-center text-xs font-bold text-white`}>
                          {story.initials}
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-white drop-shadow-sm leading-tight mt-auto">{story.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sort bar */}
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#1C1E21] dark:text-[#E4E6EB]">Posts</h2>
              <button className="flex items-center gap-1.5 text-sm font-semibold text-[#1877F2] bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-950/50 px-3 py-1.5 rounded-lg transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg>
                Top posts
              </button>
            </div>

            {/* Posts */}
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}

            {/* Load more */}
            <div className="flex justify-center pb-6">
              <button className="flex items-center gap-2 text-sm font-semibold text-[#65676B] dark:text-[#B0B3B8] bg-white dark:bg-[#242526] hover:bg-[#F0F2F5] dark:hover:bg-[#3A3B3C] px-6 py-2.5 rounded-xl shadow-sm transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                See more posts
              </button>
            </div>
          </div>
        </main>

        {/* ── Right sidebar ── */}
        <aside className="fixed right-0 top-14 bottom-0 w-[280px] overflow-y-auto scrollbar-hide hidden xl:block p-4 space-y-5">

          {/* Birthday */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎂</span>
            <p className="text-sm text-[#1C1E21] dark:text-[#E4E6EB]">
              <span className="font-semibold">Sarah Johnson</span> and{' '}
              <span className="font-semibold">2 others</span> have birthdays today.
            </p>
          </div>

          <div className="h-px bg-[#CED0D4] dark:bg-[#3A3B3C]" />

          {/* Sponsored */}
          <div>
            <p className="text-base font-bold text-[#65676B] dark:text-[#B0B3B8] mb-3">Sponsored</p>
            <div className="flex items-start gap-3 group cursor-pointer">
              <div className="h-[120px] w-[120px] rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 shrink-0 flex items-center justify-center text-4xl shadow-sm">
                ☁️
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1C1E21] dark:text-[#E4E6EB] group-hover:underline">CloudDeploy Pro</p>
                <p className="text-xs text-[#65676B] dark:text-[#B0B3B8]">clouddeploypro.io</p>
                <p className="text-xs text-[#65676B] dark:text-[#B0B3B8] mt-1 leading-relaxed">Deploy your Next.js apps in seconds with zero config.</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#CED0D4] dark:bg-[#3A3B3C]" />

          {/* Contacts */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-base font-bold text-[#65676B] dark:text-[#B0B3B8]">Contacts</p>
              <div className="flex gap-1">
                {[
                  <path key="search" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />,
                  <path key="more" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />,
                ].map((path, i) => (
                  <button key={i} className="h-8 w-8 rounded-full hover:bg-[#E4E6EB] dark:hover:bg-[#3A3B3C] flex items-center justify-center transition-colors">
                    <svg className="h-4 w-4 text-[#65676B] dark:text-[#B0B3B8]" fill={i === 1 ? 'currentColor' : 'none'} stroke={i === 0 ? 'currentColor' : 'none'} strokeWidth={2} viewBox="0 0 24 24">{path}</svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              {contacts.map(c => (
                <button key={c.name} className="w-full flex items-center gap-3 px-2 py-1.5 rounded-xl hover:bg-[#E4E6EB] dark:hover:bg-[#3A3B3C] transition-colors group">
                  <div className="relative shrink-0">
                    <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-xs font-bold text-white select-none`}>
                      {c.initials}
                    </div>
                    {c.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-[#18191A]" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-[#1C1E21] dark:text-[#E4E6EB] text-left">{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
