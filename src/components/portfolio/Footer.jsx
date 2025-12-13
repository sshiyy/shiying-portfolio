"use client";
import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-rose-500 fill-current" /> by Tam Shi Ying
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}