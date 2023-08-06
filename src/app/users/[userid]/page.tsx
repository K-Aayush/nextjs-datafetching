type params = {
    params: {
        userId: string
    }
}

const UserId = ({ params: { userId } }: params) => {
    return (
        <div>UserId</div>
    )
}

export default UserId