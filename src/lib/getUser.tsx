const getUser = async (userId: string) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
} catch (error: any) {
    console.error('An error occurred:', error.message);
    throw error; 
}
};


export default getUser