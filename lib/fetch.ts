import fetch from 'node-fetch'

export const getAllPostsData = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/get-blogs`)
  )
  const posts = await res.json()
  return posts
}

export const getAllPostIds = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/get-blogs/`)
  )
  const posts = await res.json()
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}