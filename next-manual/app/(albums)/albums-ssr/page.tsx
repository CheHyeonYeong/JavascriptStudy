async function getAlbums() {
    // 기다릴 필요가 없다 (loading x) => 알아서 처리해줌!
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const json = await response.json();
    return json;
}
export default async function Page() {
    const albums = await getAlbums();

    return (
        <div>
            {JSON.stringify(albums)}
        </div>
    )
}
