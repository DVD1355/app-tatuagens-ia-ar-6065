"use client"

import { useState } from "react"
import { Sparkles, Wand2, Download, Share2, RefreshCw, Sliders, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AICreationInterface() {
  const [prompt, setPrompt] = useState("")
  const [selectedStyle, setSelectedStyle] = useState("tradicional")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const styles = [
    { id: "tradicional", name: "Tradicional", emoji: "🎨", color: "from-red-500 to-orange-500" },
    { id: "realista", name: "Realista", emoji: "📸", color: "from-blue-500 to-cyan-500" },
    { id: "minimalista", name: "Minimalista", emoji: "✨", color: "from-purple-500 to-pink-500" },
    { id: "tribal", name: "Tribal", emoji: "🔥", color: "from-orange-500 to-red-600" },
    { id: "aquarela", name: "Aquarela", emoji: "🎨", color: "from-pink-500 to-purple-500" },
    { id: "geometrico", name: "Geométrico", emoji: "📐", color: "from-cyan-500 to-blue-500" }
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    
    // Simulação de geração (em produção, conectar com API de IA)
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Placeholder de imagem gerada
    setGeneratedImage("https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&h=800&fit=crop")
    setIsGenerating(false)
  }

  return (
    <div className="w-full">
      <Card className="bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-slate-900/95 border-purple-500/40 backdrop-blur-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border-b border-purple-500/30 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Criação com IA</h3>
                <p className="text-sm text-purple-300">Descreva sua tatuagem ideal</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-purple-300 hover:text-white hover:bg-purple-500/20"
            >
              <Sliders className="w-4 h-4 mr-2" />
              {showAdvanced ? "Ocultar" : "Avançado"}
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Prompt Input */}
          <div className="space-y-3">
            <Label htmlFor="prompt" className="text-white font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Descreva sua tatuagem
            </Label>
            <div className="relative">
              <Input
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Um dragão oriental com flores de cerejeira, estilo aquarela..."
                className="bg-slate-800/50 border-purple-500/30 text-white placeholder:text-gray-500 pr-12 h-12 focus:border-purple-400 focus:ring-purple-400/20"
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Palette className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Style Selection */}
          <div className="space-y-3">
            <Label className="text-white font-semibold">Estilo</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    selectedStyle === style.id
                      ? "border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30"
                      : "border-slate-700 bg-slate-800/30 hover:border-purple-500/50"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${style.color} flex items-center justify-center text-xl shadow-lg`}>
                      {style.emoji}
                    </div>
                    <span className="text-sm font-medium text-white">{style.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Options */}
          {showAdvanced && (
            <div className="space-y-4 p-4 rounded-xl bg-slate-800/30 border border-purple-500/20">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-400" />
                Opções Avançadas
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="size" className="text-gray-300 text-sm">Tamanho</Label>
                  <select
                    id="size"
                    className="w-full h-10 px-3 rounded-lg bg-slate-800/50 border border-purple-500/30 text-white focus:border-purple-400 focus:ring-purple-400/20"
                  >
                    <option>Pequeno</option>
                    <option>Médio</option>
                    <option>Grande</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complexity" className="text-gray-300 text-sm">Complexidade</Label>
                  <select
                    id="complexity"
                    className="w-full h-10 px-3 rounded-lg bg-slate-800/50 border border-purple-500/30 text-white focus:border-purple-400 focus:ring-purple-400/20"
                  >
                    <option>Simples</option>
                    <option>Moderada</option>
                    <option>Detalhada</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white text-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-[length:200%_100%] animate-gradient-x"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                Gerando sua tatuagem...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 mr-2" />
                Gerar Tatuagem com IA
              </>
            )}
          </Button>

          {/* Generated Result */}
          {generatedImage && (
            <div className="space-y-4 animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-2xl shadow-purple-500/20 group">
                <img
                  src={generatedImage}
                  alt="Tatuagem gerada"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">Sua Tatuagem</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-purple-500/90 hover:bg-purple-600 text-white"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-pink-500/90 hover:bg-pink-600 text-white"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Gerar Variação
                </Button>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ver em AR
                </Button>
              </div>
            </div>
          )}

          {/* Quick Suggestions */}
          {!generatedImage && (
            <div className="space-y-3">
              <Label className="text-gray-400 text-sm">Sugestões rápidas:</Label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Dragão oriental",
                  "Rosa minimalista",
                  "Lobo tribal",
                  "Mandala geométrica",
                  "Fênix aquarela"
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setPrompt(suggestion)}
                    className="px-4 py-2 rounded-full bg-slate-800/50 border border-purple-500/30 text-purple-300 text-sm hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
