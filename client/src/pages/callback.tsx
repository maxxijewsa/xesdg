export default function Callback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center px-6 py-12 max-w-md">
        {/* Success Icon with Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center animate-[scale-in_0.5s_ease-out]">
            <svg 
              className="w-12 h-12 text-green-600 animate-[check-draw_0.8s_ease-out_0.3s_forwards]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7"
                className="origin-center"
              />
            </svg>
          </div>
          {/* Ripple Effect */}
          <div className="absolute inset-0 w-24 h-24 mx-auto bg-green-200 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-4xl font-bold text-gray-900 mb-4 animate-[fade-in-up_0.6s_ease-out_0.2s_both]"
          data-testid="text-authorization-success"
        >
          Authorization Success
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8 animate-[fade-in-up_0.6s_ease-out_0.4s_both]">
          You've been successfully authenticated. Redirecting you now...
        </p>

        {/* Loading Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden animate-[fade-in-up_0.6s_ease-out_0.6s_both]">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-[progress_2s_ease-out_forwards]"></div>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 animate-[fade-in-up_0.6s_ease-out_0.8s_both]">
          <svg 
            className="w-4 h-4 animate-spin" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            />
          </svg>
          <span>Please wait while we complete the setup</span>
        </div>

        {/* Security Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 animate-[fade-in-up_0.6s_ease-out_1s_both]">
          <svg 
            className="w-4 h-4" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>Secure connection established</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes check-draw {
          from {
            stroke-dasharray: 0, 100;
          }
          to {
            stroke-dasharray: 100, 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
