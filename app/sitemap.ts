import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Cuando tengas tu dominio final, lo pondremos aquí
  const baseUrl = 'https://www.costaricamedicaltrip.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, // Prioridad máxima para la página de inicio
    },
    {
      url: `${baseUrl}/turismo-dental`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tratamientos/implantes-dentales`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/casos-clinicos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}