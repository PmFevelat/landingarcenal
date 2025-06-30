'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const API_BASE_URL = 'http://localhost:8000'

interface ApiResponse {
  success: boolean
  message: string
  timestamp?: string
}

interface ContactFormData {
  name: string
  email: string
  message: string
}

export function ApiTest() {
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle')
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null)
  const [blogPosts, setBlogPosts] = useState<Array<{id: number, title: string, excerpt: string, author: string, date: string}>>([])
  const [isLoading, setIsLoading] = useState(false)

  // Test de connexion avec le backend
  const testConnection = async () => {
    setConnectionStatus('testing')
    setIsLoading(true)
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/test`)
      const data = await response.json()
      
      if (response.ok) {
        setApiResponse(data)
        setConnectionStatus('success')
      } else {
        setConnectionStatus('error')
      }
    } catch (error) {
      console.error('Erreur de connexion:', error)
      setConnectionStatus('error')
      setApiResponse({
        success: false,
        message: 'Erreur de connexion au backend'
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Récupérer les articles de blog
  const fetchBlogPosts = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/api/blog`)
      const data = await response.json()
      setBlogPosts(data.posts || [])
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Test du formulaire de contact
  const testContactForm = async () => {
    setIsLoading(true)
    const testData: ContactFormData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Ceci est un message de test pour vérifier la communication backend-frontend.'
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      })
      
      const result = await response.json()
      console.log('Réponse du formulaire de contact:', result)
      alert(`Succès ! ${result.message}`)
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error)
      alert('Erreur lors de l\'envoi du formulaire')
    } finally {
      setIsLoading(false)
    }
  }

  // Vérification automatique au chargement
  useEffect(() => {
    testConnection()
    fetchBlogPosts()
  }, [])

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'success': return 'text-green-600'
      case 'error': return 'text-red-600'
      case 'testing': return 'text-yellow-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusText = () => {
    switch (connectionStatus) {
      case 'success': return '✅ Connexion établie'
      case 'error': return '❌ Erreur de connexion'
      case 'testing': return '🔄 Test en cours...'
      default: return '⏳ Non testé'
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>🚀 Test de Communication Backend-Frontend</CardTitle>
          <CardDescription>
            Vérification de la connexion entre Next.js et FastAPI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Statut de connexion */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Statut de connexion :</span>
            <span className={`font-bold ${getStatusColor()}`}>
              {getStatusText()}
            </span>
          </div>

          {/* Réponse de l'API */}
          {apiResponse && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Réponse du backend :</h4>
              <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>
          )}

          {/* Boutons de test */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={testConnection} 
              disabled={isLoading}
              variant="outline"
            >
              {isLoading ? 'Test...' : 'Retester la connexion'}
            </Button>
            
            <Button 
              onClick={fetchBlogPosts} 
              disabled={isLoading}
              variant="outline"
            >
              {isLoading ? 'Chargement...' : 'Charger les articles'}
            </Button>
            
            <Button 
              onClick={testContactForm} 
              disabled={isLoading}
              variant="outline"
            >
              {isLoading ? 'Envoi...' : 'Tester le formulaire'}
            </Button>
          </div>

          {/* Articles de blog */}
          {blogPosts.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium">📝 Articles de blog récupérés :</h4>
              {blogPosts.map((post) => (
                <div key={post.id} className="p-3 bg-white border rounded-lg">
                  <h5 className="font-semibold">{post.title}</h5>
                  <p className="text-sm text-gray-600">{post.excerpt}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Par {post.author} - {post.date}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Informations techniques */}
          <div className="text-sm text-gray-600 space-y-1 border-t pt-4">
            <p><strong>Backend URL :</strong> {API_BASE_URL}</p>
            <p><strong>Documentation API :</strong> <a href={`${API_BASE_URL}/docs`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{API_BASE_URL}/docs</a></p>
            <p><strong>Frontend :</strong> Next.js 15 + React 19</p>
            <p><strong>Backend :</strong> FastAPI + Python</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 