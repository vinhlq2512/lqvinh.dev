'use client'

import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { CV } from '../.contentlayer/generated'

interface Props {
  children?: ReactNode
  content: Omit<CV, '_id' | '_raw' | 'body'>
  currentLang?: string
}

const ResumeLayout: React.FC<Props> = ({ children, content, currentLang = 'en' }) => {
  const { name, avatar, title, email, linkedin, github, facebook, twitter } = content

  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      {/* Language Switcher & Download PDF */}
      <div className="mb-4 flex justify-end gap-3 print:hidden">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 rounded-lg border border-gray-300 bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:border-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download PDF
        </button>
        <div className="flex gap-2 rounded-lg border border-gray-300 p-1 dark:border-gray-600">
          <Link
            href="/my-cv?lang=en"
            className={`rounded px-3 py-1 text-sm transition-colors ${
              currentLang === 'en'
                ? 'bg-gray-200 font-semibold dark:bg-gray-700'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            EN
          </Link>
          <Link
            href="/my-cv?lang=vn"
            className={`rounded px-3 py-1 text-sm transition-colors ${
              currentLang === 'vn'
                ? 'bg-gray-200 font-semibold dark:bg-gray-700'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            VN
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          /* Hide everything except CV content */
          body * {
            visibility: hidden;
          }
          #cv-content,
          #cv-content * {
            visibility: visible;
          }
          #cv-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Page setup */
          @page {
            margin: 0.5in;
            size: A4;
          }

          body {
            background: white !important;
            font-family: Arial, sans-serif !important;
          }

          /* Apply Arial font to all elements */
          * {
            font-family: Arial, sans-serif !important;
          }

          /* Hide print button and language switcher */
          .print\\:hidden {
            display: none !important;
          }

          /* Maintain layout */
          .max-w-8xl,
          .max-w-none {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Remove extra spacing */
          .py-8 {
            padding-top: 0 !important;
            padding-bottom: 1rem !important;
          }

          .px-4 {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          /* Reduce header spacing */
          .mb-8 {
            margin-bottom: 1rem !important;
          }

          .pb-8 {
            padding-bottom: 0.5rem !important;
          }

          .space-y-4 > * + * {
            margin-top: 0.5rem !important;
          }

          .md\\:space-x-6 > * + * {
            margin-left: 1rem !important;
          }

          /* Smaller avatar for print */
          .h-32 {
            height: 80px !important;
          }

          .w-32 {
            width: 80px !important;
          }

          /* Smaller headings */
          h1 {
            font-size: 1.75rem !important;
            margin-bottom: 0.5rem !important;
          }

          .text-4xl {
            font-size: 1.75rem !important;
          }

          .text-lg {
            font-size: 0.9rem !important;
          }

          /* Reduce gap in flex items */
          .gap-4 {
            gap: 0.5rem !important;
          }

          /* Keep 2-column grid layout */
          .grid {
            display: grid !important;
            grid-template-columns: 1fr 2fr !important;
            gap: 2rem !important;
          }

          /* Ensure colors are visible */
          * {
            color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Page break control */
          h1,
          h2,
          h3 {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }

          .prose > div {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          /* Preserve typography */
          .prose {
            font-size: 14px !important;
          }

          /* Borders and spacing */
          .border-b {
            border-bottom: 1px solid #e5e7eb !important;
          }

          /* Remove dark mode colors for print */
          .dark\\:text-gray-400,
          .dark\\:text-gray-500,
          .dark\\:border-gray-600,
          .dark\\:border-gray-700 {
            color: #6b7280 !important;
            border-color: #d1d5db !important;
          }

          /* Link colors */
          a {
            color: #2563eb !important;
            text-decoration: underline !important;
          }
        }
      `}</style>

      {/* CV Content Wrapper for Print */}
      <div id="cv-content">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center space-y-4 border-b pb-8 md:flex-row md:items-start md:space-y-0 md:space-x-6">
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              width={128}
              height={128}
              className="h-32 w-32 rounded-full object-contain"
            />
          )}
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-2 text-4xl font-bold">{name}</h1>
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">{title}</p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              {email && <SocialIcon kind="mail" href={`mailto:${email}`} />}
              {linkedin && <SocialIcon kind="linkedin" href={linkedin} />}
              {github && <SocialIcon kind="github" href={github} />}
              {facebook && <SocialIcon kind="facebook" href={facebook} />}
              {twitter && <SocialIcon kind="x" href={twitter} />}
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - About Me & Skills */}
            <div className="lg:col-span-1 [&_.cv-right]:hidden">{children}</div>

            {/* Right Column - Work Experience, Education, Projects, etc. */}
            <div className="lg:col-span-2 [&_.cv-left]:hidden">{children}</div>
          </div>
        </div>
      </div>
      {/* End CV Content Wrapper */}
    </div>
  )
}
export default ResumeLayout
