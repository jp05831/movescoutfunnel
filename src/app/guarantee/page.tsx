'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// End of February 2026 - 11:59:59 PM EST
const TARGET_DATE = new Date('2026-02-28T23:59:59-05:00');

// Countdown Timer Component
function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = TARGET_DATE.getTime();
      const difference = target - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show placeholder until client-side JS runs
  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-6 md:gap-8">
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-red-600 tabular-nums">--</span>
          <span className="text-sm text-gray-500 block">days</span>
        </div>
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-red-600 tabular-nums">--</span>
          <span className="text-sm text-gray-500 block">hours</span>
        </div>
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-red-600 tabular-nums">--</span>
          <span className="text-sm text-gray-500 block">minutes</span>
        </div>
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-red-600 tabular-nums">--</span>
          <span className="text-sm text-gray-500 block">seconds</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-6 md:gap-8">
      <div className="text-center">
        <span className="text-3xl md:text-4xl font-bold text-red-600 tabular-nums">{timeLeft.days}</span>
        <span className="text-sm text-gray-500 block">days</span>
      </div>
      <div className="text-center">
        <span className="text-3xl md:text-4xl font-bold text-red-600 tabular-nums">{timeLeft.hours}</span>
        <span className="text-sm text-gray-500 block">hours</span>
      </div>
      <div className="text-center">
        <span className="text-3xl md:text-4xl font-bold text-red-600 tabular-nums">{timeLeft.minutes}</span>
        <span className="text-sm text-gray-500 block">minutes</span>
      </div>
      <div className="text-center">
        <span className="text-3xl md:text-4xl font-bold text-red-600 tabular-nums">{timeLeft.seconds}</span>
        <span className="text-sm text-gray-500 block">seconds</span>
      </div>
    </div>
  );
}

export default function FunnelPage() {
  // Listen for Calendly booking event and redirect to success page
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Redirect to success page after booking
        window.location.href = '/success';
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, []);

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      
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
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Main Headline */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              30-DAY MONEY BACK GUARANTEE FOR<br />
              <span className="underline decoration-black decoration-2 underline-offset-4">FEBRUARY ONLY!</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-center text-lg text-gray-900 mb-8 max-w-xl mx-auto">
            If MoveScout doesn&apos;t generate qualified moving leads within your first 30 days, 
            you&apos;ll receive a <span className="font-semibold underline">FULL REFUND</span> of our service fee.
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="relative h-10 bg-gray-200 overflow-hidden max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-red-500 to-red-600 flex items-center pl-4">
                <span className="text-white text-sm font-medium">Step 1 of 2...</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer />
          </div>

          {/* Warning Text */}
          <p className="text-center text-red-500 italic font-bold mb-8">
            Please DO NOT book a call unless you are an active moving company.
          </p>

          {/* Calendly Embed */}
          <div style={{ overflow: 'hidden' }}>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/movescout-info/30min?hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '1100px', overflow: 'hidden' }}
            />
          </div>

          {/* Terms Notice */}
          <p className="text-center text-gray-500 text-sm mt-6 mb-12">
            By scheduling, you agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.<br />
            I understand I&apos;ll receive text reminders with instructions for my appointment.
          </p>

          {/* Bottom CTA Section */}
          <div className="py-12 text-center border-t border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let&apos;s Walk You Through the System<br />
              That Changes Everything.
            </h2>
            <a 
              href="#top"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 transition-colors"
            >
              BOOK A FREE CALL NOW!
            </a>
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
    </>
  );
}
