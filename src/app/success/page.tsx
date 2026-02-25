'use client';

import { useEffect } from 'react';

export default function SuccessPage() {
  useEffect(() => {
    // Fire Meta Pixel Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-5 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <span className="text-2xl font-bold">
            <span className="text-blue-600">Move</span><span className="text-gray-900">Scout</span>
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-900 tracking-wide">
            <span className="font-bold">DIGITAL MARKETING</span> FOR MOVING COMPANIES
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-20">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            You&apos;re All Set!
          </h1>
          
          <p className="text-xl text-gray-900 mb-8 max-w-xl mx-auto">
            Your call has been scheduled. Check your email for confirmation and calendar invite.
          </p>
        </div>

        {/* What to Expect */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Happens Next?
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Check Your Email</h3>
                <p className="text-gray-700">You&apos;ll receive a confirmation email with your call details and a calendar invite.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900">We&apos;ll Do Our Homework</h3>
                <p className="text-gray-700">Our team will research your market and prepare a customized strategy for your moving company.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Join the Call</h3>
                <p className="text-gray-700">We&apos;ll walk you through exactly how MoveScout can generate qualified leads for your business.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reminder */}
        <p className="text-center text-gray-600 italic mb-12">
          Remember: You&apos;re protected by our <span className="font-bold text-red-500">30-day money back guarantee</span>. 
          If we don&apos;t deliver results, you get a full refund.
        </p>

        {/* What You'll Receive */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Here&apos;s What You&apos;ll Receive:
          </h2>
          
          <div className="flex flex-col gap-10">
            {/* Text Example - First */}
            <div className="text-center max-w-sm mx-auto">
              <p className="font-bold text-gray-900 mb-4">📱 Text Confirmation</p>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <img 
                  src="/text-example.png" 
                  alt="Example text message confirmation" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Reply &quot;YES&quot; to confirm</p>
            </div>
            
            {/* Email Example - Second, Bigger - breaks out of container */}
            <div className="text-center -mx-4 md:-mx-20 lg:-mx-40">
              <p className="font-bold text-gray-900 mb-4">📧 Calendar Invite Email</p>
              <div className="overflow-hidden">
                <img 
                  src="/email-example.png" 
                  alt="Example calendar invite email" 
                  className="w-full h-auto max-w-5xl mx-auto"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Click &quot;Yes&quot; to confirm your attendance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span className="text-blue-600">Move</span><span className="text-gray-900">Scout</span>
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-900">
              <span className="font-bold">DIGITAL MARKETING</span> FOR MOVING COMPANIES
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              Copyright 2025 MoveScout.co - All Rights Reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 text-xs text-gray-400 mt-1">
              <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
