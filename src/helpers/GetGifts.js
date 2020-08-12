export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=feRPc7YCV3JQ8IanNH9eeH0AhwzVtpR0&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            // Se usa el signo de interrogacion en caso que no exista la ruta o valor en el path indicado
            url: img.images?.downsized_medium.url
        }
    });

    //console.log(gifs);
    return gifs;
};