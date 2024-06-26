
export const metadata = {
    title: 'Albums'
}
const url = "https://jsonplaceholder.typicode.com";

async function getAlbums() {
    // 기다릴 필요가 없다 (loading x) => 알아서 처리해줌!
    
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // await 는 promise 타입을 받는다.
    const response = await fetch(url+"/albums");
    const json = await response.json();
    return json;
}

async function getPhotos() {
    const response = await fetch(url+"/photos");
    const json = await response.json();
    return json;
}

export default async function Page() {
    const albums = await getAlbums();
    const photos = await getPhotos();

    console.log(photos);
    
    return (
        <div style={{ display: 'flex', height: '100vh', padding: '20px', boxSizing: 'border-box', background: '#f5f5f5' }}>
            <div style={{ flex: '1', margin: '10px', padding: '20px', background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <h1 style={{ textAlign: 'center', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Albums</h1>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {albums.map((album) => (
                        <li key={album.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{album.title}</li>
                    ))}
                </ul>
            </div>

            <div style={{ flex: '1', margin: '10px', padding: '20px', background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <h1 style={{ textAlign: 'center', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Photos</h1>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {photos.map((photo) => (
                        <li key={photo.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                            {photo.title} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

