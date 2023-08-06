type Props = {
    promise: Promise<Post[]>
}


const UserPosts = async ({promise}: Props) => {
    const posts = await promise

    const content = posts.map(posts => {
        return (
            <article key={posts.id}>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
            </article>
        )
    })

  return (
    content
  )
}

export default UserPosts