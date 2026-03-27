import { Button } from '@/components/ui/button'

export function Newsletter() {
  return (
    <section className="bg-red-900 text-white py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sign up for Newsletter</h2>

        <p className="text-green-100 mb-8 text-lg">
          Stay updated with our latest products, insights, and company news.
        </p>

        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 border placeholder-yellow-500"
            required
          />
          <Button className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
