import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('ebooks')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ ebooks: data })
  } catch (error) {
    console.error('Error fetching ebooks:', error)
    return NextResponse.json({ error: 'Failed to fetch ebooks' }, { status: 500 })
  }
}
