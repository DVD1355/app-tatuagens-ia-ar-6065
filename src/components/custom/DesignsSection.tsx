"use client"

import { useEffect, useState } from "react"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Design {
  id: string
  title: string
  description: string | null
  image_url: string
  style: string
  tags: string[]
  likes_count: number
  created_at: string
}

export function DesignsSection() {
  const [designs, setDesigns] = useState<Design[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDesigns() {
      try {
        const response = await fetch('/api/designs')
        const data = await response.json()
        setDesigns(data.designs || [])
      } catch (error) {
        console.error('Erro ao carregar designs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchDesigns()
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-slate-800/50 border-slate-700/50 p-6 animate-pulse">
            <div className="aspect-square rounded-lg bg-slate-700 mb-4"></div>
            <div className="h-4 bg-slate-700 rounded mb-2"></div>
            <div className="h-3 bg-slate-700 rounded w-2/3"></div>
          </Card>
        ))}
      </div>
    )
  }

  if (designs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">Nenhum design público disponível ainda.</p>
        <p className="text-gray-500 text-sm mt-2">Seja o primeiro a criar e compartilhar!</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {designs.slice(0, 6).map((design) => (
        <Card key={design.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 group cursor-pointer backdrop-blur-sm">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500">
            <div className="text-4xl">🎨</div>
          </div>
          <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">{design.title}</h4>
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">{design.description || "Design criado com IA"}</p>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {design.style}
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
              <Heart className="w-4 h-4" />
              <span>{design.likes_count}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
              <MessageCircle className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 hover:text-purple-400 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </Card>
      ))}
    </div>
  )
}
