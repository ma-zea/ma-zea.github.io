export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight leading-tight py-2">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-300">Fall 2025</p>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>

        <p className="text-gray-400 text-sm md:text-base">Stay tuned for updates</p>

        <div className="pt-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full animate-pulse">
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
