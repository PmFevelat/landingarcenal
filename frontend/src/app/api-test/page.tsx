import { ApiTest } from '@/components/api-test'

export default function ApiTestPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Test de Communication API
          </h1>
          <p className="text-lg text-gray-600">
            Vérification de la connexion entre le frontend Next.js et le backend FastAPI
          </p>
        </div>
        
        <ApiTest />
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Cette page permet de vérifier que la communication entre le frontend et le backend fonctionne parfaitement.
          </p>
        </div>
      </div>
    </div>
  )
} 