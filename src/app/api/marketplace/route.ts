import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('marketplace_items')
      .select('*')
      .order('sales_count', { ascending: false })

    if (error) throw error

    return NextResponse.json({ items: data })
  } catch (error) {
    console.error('Error fetching marketplace items:', error)
    return NextResponse.json({ error: 'Failed to fetch marketplace items' }, { status: 500 })
  }
}
