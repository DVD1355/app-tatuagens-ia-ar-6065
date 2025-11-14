export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tattoo_designs: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          image_url: string
          style: string
          tags: string[]
          is_public: boolean
          likes_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          image_url: string
          style: string
          tags?: string[]
          is_public?: boolean
          likes_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          image_url?: string
          style?: string
          tags?: string[]
          is_public?: boolean
          likes_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      tattoo_artists: {
        Row: {
          id: string
          user_id: string
          studio_name: string
          bio: string | null
          location: string
          specialties: string[]
          portfolio_images: string[]
          rating: number
          reviews_count: number
          verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          studio_name: string
          bio?: string | null
          location: string
          specialties?: string[]
          portfolio_images?: string[]
          rating?: number
          reviews_count?: number
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          studio_name?: string
          bio?: string | null
          location?: string
          specialties?: string[]
          portfolio_images?: string[]
          rating?: number
          reviews_count?: number
          verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      ebooks: {
        Row: {
          id: string
          title: string
          description: string
          cover_image_url: string
          category: string
          chapters_count: number
          price: number
          author_id: string
          downloads_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          cover_image_url: string
          category: string
          chapters_count: number
          price: number
          author_id: string
          downloads_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          cover_image_url?: string
          category?: string
          chapters_count?: number
          price?: number
          author_id?: string
          downloads_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      marketplace_items: {
        Row: {
          id: string
          seller_id: string
          title: string
          description: string
          price: number
          images: string[]
          category: string
          sales_count: number
          rating: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          seller_id: string
          title: string
          description: string
          price: number
          images?: string[]
          category: string
          sales_count?: number
          rating?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          seller_id?: string
          title?: string
          description?: string
          price?: number
          images?: string[]
          category?: string
          sales_count?: number
          rating?: number
          created_at?: string
          updated_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          user_id: string
          content: string
          image_url: string | null
          likes_count: number
          comments_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          content: string
          image_url?: string | null
          likes_count?: number
          comments_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          content?: string
          image_url?: string | null
          likes_count?: number
          comments_count?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
