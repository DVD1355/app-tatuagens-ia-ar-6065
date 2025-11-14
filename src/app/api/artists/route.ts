import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location')

    let query = supabase
      .from('tattoo_artists')
      .select('*')
      .order('rating', { ascending: false })

    if (location) {
      query = query.ilike('location', `%${location}%`)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ artists: data })
  } catch (error) {
    console.error('Error fetching artists:', error)
    return NextResponse.json({ error: 'Failed to fetch artists' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { data, error } = await supabase
      .from('tattoo_artists')
      .insert([
        {
          user_id: body.user_id,
          studio_name: body.studio_name,
          bio: body.bio,
          location: body.location,
          specialties: body.specialties || [],
          portfolio_images: body.portfolio_images || []
        }
      ])
      .select()

    if (error) throw error

    return NextResponse.json({ artist: data[0] })
  } catch (error) {
    console.error('Error creating artist profile:', error)
    return NextResponse.json({ error: 'Failed to create artist profile' }, { status: 500 })
  }
}
