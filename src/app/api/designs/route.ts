import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('tattoo_designs')
      .select('*')
      .eq('is_public', true)
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) throw error

    return NextResponse.json({ designs: data })
  } catch (error) {
    console.error('Error fetching designs:', error)
    return NextResponse.json({ error: 'Failed to fetch designs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { data, error } = await supabase
      .from('tattoo_designs')
      .insert([
        {
          user_id: body.user_id,
          title: body.title,
          description: body.description,
          image_url: body.image_url,
          style: body.style,
          tags: body.tags || [],
          is_public: body.is_public ?? true
        }
      ])
      .select()

    if (error) throw error

    return NextResponse.json({ design: data[0] })
  } catch (error) {
    console.error('Error creating design:', error)
    return NextResponse.json({ error: 'Failed to create design' }, { status: 500 })
  }
}
