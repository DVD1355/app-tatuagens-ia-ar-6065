"use client"

import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"
import { Card } from "@/components/ui/card"

interface MarketplaceItem {
  id: string
  title: string
  description: string
  price: number
  images: string[]
  category: string
  sales_count: number
  rating: number
}

export function MarketplaceSection() {
  const [items, setItems] = useState<MarketplaceItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('/api/marketplace')
        const data = await response.json()
        setItems(data.items || [])
      } catch (error) {
        console.error('Erro ao carregar marketplace:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchItems()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="bg-slate-800/50 border-slate-700/50 p-4 animate-pulse">
            <div className="aspect-square rounded-lg bg-slate-700 mb-3"></div>
            <div className="h-3 bg-slate-700 rounded mb-2"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2"></div>
          </Card>
        ))}
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Dragon Pack", price: "$29", sales: "2.4k vendas", gradient: "from-red-500/20 to-orange-500/20" },
          { name: "Floral Set", price: "$19", sales: "3.1k vendas", gradient: "from-pink-500/20 to-rose-500/20" },
          { name: "Tribal Collection", price: "$39", sales: "1.8k vendas", gradient: "from-purple-500/20 to-indigo-500/20" },
          { name: "Minimalist Bundle", price: "$24", sales: "4.2k vendas", gradient: "from-cyan-500/20 to-blue-500/20" }
        ].map((item, i) => (
          <Card key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 p-4 hover:scale-105 hover:shadow-xl transition-all duration-500 group cursor-pointer backdrop-blur-sm">
            <div className={`aspect-square rounded-lg bg-gradient-to-br ${item.gradient} mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ShoppingBag className="w-8 h-8 text-purple-300 relative z-10" />
            </div>
            <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-300 transition-colors duration-300">{item.name}</h4>
            <div className="flex items-center justify-between">
              <span className="text-purple-400 font-bold group-hover:text-purple-300 transition-colors duration-300">{item.price}</span>
              <span className="text-xs text-gray-500">{item.sales}</span>
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.slice(0, 4).map((item) => (
        <Card key={item.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 p-4 hover:scale-105 hover:shadow-xl transition-all duration-500 group cursor-pointer backdrop-blur-sm">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ShoppingBag className="w-8 h-8 text-purple-300 relative z-10" />
          </div>
          <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-300 transition-colors duration-300">{item.title}</h4>
          <div className="flex items-center justify-between">
            <span className="text-purple-400 font-bold group-hover:text-purple-300 transition-colors duration-300">${item.price}</span>
            <span className="text-xs text-gray-500">{item.sales_count} vendas</span>
          </div>
        </Card>
      ))}
    </div>
  )
}
