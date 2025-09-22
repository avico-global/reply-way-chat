import { useEffect } from 'react'

export default function SignIn() {
  useEffect(() => {
    // Redirect to app.replyway.com
    window.location.href = 'https://app.replyway.com'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-950/20 flex items-center justify-center transition-colors duration-300">
      <div className="text-center bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-12 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-6"></div>
        <h2 className="text-heading-4 text-gray-900 dark:text-white mb-2">Redirecting to ReplyWay</h2>
        <p className="text-body text-gray-600 dark:text-gray-300">Please wait while we redirect you to the app...</p>
      </div>
    </div>
  )
}
