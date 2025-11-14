"use client"

import { useEffect, useState } from "react"
import { BookOpen, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Ebook {
  id: string
  title: string
  description: string
  cover_image_url: string
  category: string
  chapters_count: number
  price: number
  downloads_count: number
}

export function LibrarySection() {
  const [ebooks, setEbooks] = useState<Ebook[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEbooks() {
      try {
        const response = await fetch('/api/ebooks')
        const data = await response.json()
        setEbooks(data.ebooks || [])
      } catch (error) {
        console.error('Erro ao carregar eBooks:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchEbooks()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="bg-slate-800/50 border-slate-700/50 p-6 animate-pulse">
            <div className="aspect-square rounded-lg bg-slate-700 mb-4"></div>
            <div className="h-4 bg-slate-700 rounded mb-2"></div>
            <div className="h-3 bg-slate-700 rounded w-2/3"></div>
          </Card>
        ))}
      </div>
    )
  }

  if (ebooks.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Símbolos Celtas", chapters: "12 capítulos", gradient: "from-emerald-500/20 to-teal-500/20" },
          { title: "Mitologia Nórdica", chapters: "15 capítulos", gradient: "from-blue-500/20 to-indigo-500/20" },
          { title: "Arte Japonesa", chapters: "18 capítulos", gradient: "from-red-500/20 to-pink-500/20" },
          { title: "Geometria Sagrada", chapters: "10 capítulos", gradient: "from-purple-500/20 to-violet-500/20" }
        ].map((item, i) => (
          <Card key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 p-6 hover:scale-105 hover:shadow-xl transition-all duration-500 group cursor-pointer backdrop-blur-sm">
            <div className={`aspect-square rounded-lg bg-gradient-to-br ${item.gradient} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <BookOpen className="w-8 h-8 text-purple-300 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">{item.title}</h4>
            <p className="text-sm text-gray-400 mt-1">{item.chapters}</p>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {ebooks.slice(0, 4).map((ebook) => (
        <Card key={ebook.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 p-6 hover:scale-105 hover:shadow-xl transition-all duration-500 group cursor-pointer backdrop-blur-sm">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <BookOpen className="w-8 h-8 text-purple-300 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
          </div>
          <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">{ebook.title}</h4>
          <p className="text-sm text-gray-400 mt-1">{ebook.chapters_count} capítulos</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-purple-400 font-bold">${ebook.price}</span>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Star className="w-3 h-3" />
              {ebook.downloads_count}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
