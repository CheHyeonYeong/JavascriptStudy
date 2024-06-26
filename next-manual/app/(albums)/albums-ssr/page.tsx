
export const metadata = {
    title: 'Albums'
}

async function getAlbums() {
    // 기다릴 필요가 없다 (loading x) => 알아서 처리해줌!
    
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // await 는 promise 타입을 받는다.
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const url = "https://jsonplaceholder.typicode.com/albums";
export default async function Page() {
    const albums = await getAlbums();

    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
        </div>
    )
}
