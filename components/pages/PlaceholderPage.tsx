export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <main>
      <section className="bg-green-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          <div className="bg-gray-50 rounded-lg p-12 border border-gray-200">
            <p className="text-gray-500">Content coming soon</p>
          </div>
        </div>
      </section>
    </main>
  )
}
