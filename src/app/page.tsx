"use client"

import { Sparkles, Camera, BookOpen, Users, ShoppingBag, MapPin, Palette, Wand2, Globe, Star, ArrowRight, Zap, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { LibrarySection } from "@/components/custom/LibrarySection"
import { MarketplaceSection } from "@/components/custom/MarketplaceSection"
import { DesignsSection } from "@/components/custom/DesignsSection"
import { AICreationInterface } from "@/components/custom/AICreationInterface"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 overflow-x-hidden">
      {/* Header/Navbar - Melhorado */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10" 
          : "bg-slate-950/60 backdrop-blur-md border-b border-purple-500/10"
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all duration-300 group-hover:scale-110">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              InkVision AI
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("features")} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Recursos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("library")} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Biblioteca
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("community")} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Comunidade
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("marketplace")} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Marketplace
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300">
              Começar Agora
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-purple-500/20 rounded-lg transition-all duration-300"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen 
            ? "max-h-96 opacity-100 border-t border-purple-500/20" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-3 bg-slate-950/95 backdrop-blur-xl">
            <button onClick={() => scrollToSection("features")} className="block w-full text-left text-gray-300 hover:text-white hover:bg-purple-500/10 px-4 py-3 rounded-lg transition-all duration-300">
              Recursos
            </button>
            <button onClick={() => scrollToSection("library")} className="block w-full text-left text-gray-300 hover:text-white hover:bg-purple-500/10 px-4 py-3 rounded-lg transition-all duration-300">
              Biblioteca
            </button>
            <button onClick={() => scrollToSection("community")} className="block w-full text-left text-gray-300 hover:text-white hover:bg-purple-500/10 px-4 py-3 rounded-lg transition-all duration-300">
              Comunidade
            </button>
            <button onClick={() => scrollToSection("marketplace")} className="block w-full text-left text-gray-300 hover:text-white hover:bg-purple-500/10 px-4 py-3 rounded-lg transition-all duration-300">
              Marketplace
            </button>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Melhorado */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            <Globe className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-sm text-purple-300 font-medium">Lançamento Global em Breve</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Crie Tatuagens
            </span>
            <br />
            <span className="text-white">com Inteligência Artificial</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Gere designs únicos em tempo real, visualize em AR no seu corpo, explore uma biblioteca premium 
            e conecte-se com os melhores tatuadores do mundo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-delay-2">
            <Button size="lg" onClick={() => scrollToSection("ai-creator")} className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white text-lg px-8 py-7 rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-500 group bg-[length:200%_100%] hover:bg-right animate-gradient-x">
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Criar Minha Tatuagem
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 text-lg px-8 py-7 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
              <Camera className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Ver em AR
            </Button>
          </div>

          {/* AI Creation Interface - NOVO */}
          <div id="ai-creator" className="relative max-w-4xl mx-auto">
            <AICreationInterface />
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-float-delay"></div>
            <div className="absolute top-1/2 -right-8 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
            <p className="text-gray-400 text-sm">Explore mais</p>
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Features Section - Melhorado */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-slate-900/50 backdrop-blur-sm relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 hover:bg-cyan-500/20 transition-all duration-300">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">Tecnologia de Ponta</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Inovação que Transforma
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">IA Generativa + Realidade Aumentada em perfeita harmonia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IA Generator - Melhorado */}
            <Card className="bg-gradient-to-br from-purple-900/40 via-purple-900/30 to-slate-900/40 border-purple-500/40 p-8 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 group-hover:scale-110 transition-all duration-500">
                  <Sparkles className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Geração com IA</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Crie tatuagens únicas em qualquer estilo instantaneamente. Ajuste cores, traços, 
                  composição e combine elementos em tempo real com precisão cirúrgica.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: "🎨", text: "Estilos: Tradicional, Realista, Minimalista, Tribal", color: "purple" },
                    { icon: "✨", text: "Ajustes em tempo real de cor e traço", color: "pink" },
                    { icon: "🔮", text: "Combinação inteligente de elementos", color: "cyan" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                        <span className="text-sm">{item.icon}</span>
                      </div>
                      <span className="group-hover/item:text-white transition-colors duration-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* AR Preview - Melhorado */}
            <Card className="bg-gradient-to-br from-pink-900/40 via-pink-900/30 to-slate-900/40 border-pink-500/40 p-8 hover:scale-[1.03] hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/50 group-hover:shadow-pink-500/80 group-hover:scale-110 transition-all duration-500">
                  <Camera className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">Visualização em AR</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Veja como a tatuagem ficará no seu corpo antes de fazer. Use a câmera para 
                  posicionar e visualizar em tempo real com precisão fotorrealista.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: "📍", text: "Posicionamento preciso no corpo", color: "pink" },
                    { icon: "📐", text: "Ajuste de tamanho e rotação", color: "cyan" },
                    { icon: "📤", text: "Compartilhe com amigos e tatuadores", color: "purple" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                        <span className="text-sm">{item.icon}</span>
                      </div>
                      <span className="group-hover/item:text-white transition-colors duration-300">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Library Section - INTEGRADO COM SUPABASE */}
      <section id="library" className="py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 hover:bg-cyan-500/20 transition-all duration-300">
                <Star className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-sm text-cyan-300 font-medium">Conteúdo Premium</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Biblioteca <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Exclusiva</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Acesse eBooks ilustrados, histórias de símbolos, significados ancestrais e coleções 
                criadas por IA organizadas por temas e períodos históricos.
              </p>
              <div className="space-y-4">
                {[
                  { icon: BookOpen, title: "eBooks Ilustrados", desc: "Capítulos sobre símbolos, origens e curiosidades", gradient: "from-cyan-500 to-blue-500" },
                  { icon: Palette, title: "Packs de Tatuagens", desc: "Coleções temáticas criadas pela IA", gradient: "from-purple-500 to-pink-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <LibrarySection />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section - INTEGRADO COM SUPABASE */}
      <section id="community" className="py-20 px-4 sm:px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 hover:bg-purple-500/20 transition-all duration-300">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Comunidade Global</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Conecte-se com o <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mundo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">Inspire-se, compartilhe e cresça junto com milhões de entusiastas</p>
          </div>

          <DesignsSection />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Users, title: "Feed Social", desc: "Compartilhe suas criações, curta e comente designs de outros usuários e tatuadores.", gradient: "from-purple-500 to-pink-500" },
              { icon: Star, title: "Inspiração Diária", desc: "Descubra tendências, estilos populares e designs que estão bombando na comunidade.", gradient: "from-pink-500 to-cyan-500" },
              { icon: Globe, title: "Alcance Global", desc: "Conecte-se com milhões de entusiastas e profissionais de tatuagem ao redor do mundo.", gradient: "from-cyan-500 to-blue-500" }
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 group cursor-pointer backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                    <item.icon className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section - INTEGRADO COM SUPABASE */}
      <section id="marketplace" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <MarketplaceSection />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6 hover:bg-pink-500/20 transition-all duration-300">
                <ShoppingBag className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-pink-300 font-medium">Marketplace</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Venda Seus <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Designs</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Monetize sua criatividade. Venda designs, packs exclusivos e eBooks para 
                uma audiência global de entusiastas de tatuagem.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Star, text: "Comissões justas para criadores", color: "purple" },
                  { icon: Globe, text: "Alcance milhões de usuários", color: "pink" },
                  { icon: Zap, text: "Pagamentos rápidos e seguros", color: "cyan" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 group hover:translate-x-2 transition-transform duration-300">
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tattoo Artists Section - Melhorado */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 hover:bg-cyan-500/20 transition-all duration-300">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">Rede de Tatuadores</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Encontre <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tatuadores</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Conecte-se com profissionais verificados próximos a você</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: MapPin, title: "Busca por Localização", desc: "Encontre tatuadores qualificados na sua região com avaliações verificadas.", gradient: "from-purple-500 to-pink-500" },
              { icon: Star, title: "Portfólios Verificados", desc: "Veja trabalhos anteriores, especialidades e avaliações de clientes reais.", gradient: "from-pink-500 to-cyan-500" },
              { icon: Zap, title: "Agendamento Direto", desc: "Agende sua sessão diretamente pelo app com confirmação instantânea.", gradient: "from-cyan-500 to-blue-500" }
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-500 group cursor-pointer backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                    <item.icon className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-purple-900/40 border border-purple-500/40 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">É Tatuador?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Cadastre-se gratuitamente e conecte-se com milhares de clientes em potencial
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-7 rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-500 group/btn">
                Cadastrar Meu Estúdio
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Melhorado */}
      <section className="py-20 px-4 sm:px-6 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Pronto para Criar Sua
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Tatuagem Perfeita?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de usuários que já estão criando designs únicos com IA
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("ai-creator")} className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-500 group bg-[length:200%_100%] animate-gradient-x">
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Começar Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 text-lg px-10 py-7 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300">
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Melhorado */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">InkVision AI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Criação inteligente de tatuagens com IA e AR
              </p>
            </div>
            {[
              { title: "Produto", links: ["Gerador de IA", "Visualização AR", "Biblioteca", "Preços"] },
              { title: "Comunidade", links: ["Feed", "Marketplace", "Tatuadores", "Blog"] },
              { title: "Empresa", links: ["Sobre", "Carreiras", "Contato", "Suporte"] }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© 2024 InkVision AI. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              {["Privacidade", "Termos", "Cookies"].map((item, i) => (
                <a key={i} href="#" className="hover:text-white transition-all duration-300 hover:scale-105">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
