import type { Metadata } from 'next'
import SideNav from '../ui/dashboard/sidenav'
import { Suspense } from 'react'

interface IDashboardLayout {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Setting page description',
}

const DashboardLayout = ({ children }: IDashboardLayout) => {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  )
}

export default DashboardLayout
