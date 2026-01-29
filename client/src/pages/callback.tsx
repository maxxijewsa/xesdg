'use client';

import { useEffect, useState } from 'react';

export default function Callback() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center px-6 py-12 max-w-md">
        {/* Icon with Animation */}
        <div className="mb-8 relative">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-colors duration-500 ${
            showSuccess ? 'bg-green-100' : 'bg-blue-100'
          }`}>
            {!showSuccess ? (
              // Loading Dots
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            ) : (
              // Success Checkmark
              <svg 
                className="w-12 h-12 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7"
                  style={{
                    strokeDasharray: 100,
                    strokeDashoffset: 100,
                    animation: 'check-draw 0.8s ease-out forwards'
                  }}
                />
              </svg>
            )}
          </div>
          {/* Ripple Effect */}
          {showSuccess && (
            <div className="absolute inset-0 w-24 h-24 mx-auto bg-green-200 rounded-full animate-ping opacity-20"></div>
          )}
        </div>

        {/* Main Heading */}
        <h1 
          className={`text-4xl font-bold mb-4 transition-all duration-500 ${
            showSuccess ? 'text-gray-900 opacity-100' : 'text-gray-600 opacity-70'
          }`}
          data-testid="text-authorization-success"
        >
          {showSuccess ? 'Authorization Success' : 'Authorizing...'}
        </h1>

        {/* Subtitle */}
        <p className={`text-lg mb-8 transition-all duration-500 ${
          showSuccess ? 'text-gray-600 opacity-100' : 'text-gray-500 opacity-70'
        }`}>
          {showSuccess 
            ? "You've been successfully authenticated. Redirecting you now..." 
            : "Verifying your credentials..."}
        </p>

        {/* Loading Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              showSuccess 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600'
            }`}
            style={{
              width: showSuccess ? '100%' : '0%',
              animation: showSuccess ? 'none' : 'progress 2s ease-out forwards'
            }}
          ></div>
        </div>

        {/* Security Badge */}
        <div className={`mt-8 flex items-center justify-center gap-2 text-xs transition-all duration-500 ${
          showSuccess ? 'text-green-600' : 'text-gray-400'
        }`}>
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
          <span>{showSuccess ? 'Secure connection established' : 'Establishing secure connection...'}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes check-draw {
          to {
            stroke-dashoffset: 0;
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
