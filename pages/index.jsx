import Head from 'next/head'

const posts = [
  {
    title: 'React Testing',
    excerpt: 'Learn React Testing',
  },

  {
    title: 'React With Tailwind',
    excerpt: 'Learn React With Tailwind',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <div key={post.title}>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">30:44</div>
        </div>
      </div>
    </div>
  )
}
