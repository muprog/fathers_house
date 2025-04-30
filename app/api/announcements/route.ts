import { NextResponse } from 'next/server'

export async function GET() {
  // Mock data for announcements
  const mockAnnouncements = [
    {
      id: 1,
      title: 'Sunday Service Times Update',
      details: 'Join us for our Sunday services at 8:00 AM and 10:00 AM.',
      priority: 1,
      image: '/assets/images/about/vision.webp',
      createdBy: 'Admin',
      updatedBy: 'Admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Weekly Bible Study',
      details: 'Join us every Wednesday at 6:00 PM for our weekly Bible study.',
      priority: 2,
      image: '/assets/images/about/vision.webp',
      createdBy: 'Admin',
      updatedBy: 'Admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]

  return NextResponse.json({
    status: 'success',
    data: mockAnnouncements,
  })
}
