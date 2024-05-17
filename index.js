import express from 'express'
import cors from 'cors'

const app =express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const films = [
    {
        id: 1 , 
        title : 'la petite sirène',
        genre: 'Fantasy',
        image: 'https://cdns-images.dzcdn.net/images/cover/d1adaf6721de8201c6640f0245718fc7/1900x1900-000000-80-0-0.jpg'
    },
    {
        id: 2 , 
        title : 'Ghost',
        genre: 'Comédie, Romance',
        image: 'https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/0/5/0/3333973150050/tsp20120923073601/Ghost-Edition-collector.jpg'
    },
    {
        id: 3 , 
        title : 'Docteur stone',
        genre: 'Animé',
        image: 'https://fr.web.img5.acsta.net/pictures/19/08/07/10/33/5476043.jpg'
    },
    {
        id: 4 , 
        title : 'Forrest Gump',
        genre: 'Comédie, Romance',
        image: 'https://fr.web.img4.acsta.net/pictures/15/10/13/15/12/514297.jpg'
    },
]

app.get('/films', (req, res) => {
    res.json(films);
});

//EndPoint Pour obtenir les détails d'un films spécifique par ID
app.get('/films/:id', (req, res) => {
    const filmId = parseInt(req.params.id, 10);
    const film = films.find(f => f.id === filmId);

    if(film) {
        res.json(film);
    } else {
        res.status(404).json({message: 'film not found'});
    }
});


//EndPoint pour ajouter un nouveau film
app.post('/films', (req, res) => {
    const newFilm = {
        id: films.length +1,
        title: req.body.title,
        genre: req.body.genre,
        image: req.body.image,
    };
    films.push(newFilm);
    res.status(201).json(newFilm);
});

//EndPoint pour modifier une information d'un film
app.put('/films/:id', (req, res) => {
    const filmId = parseInt(req.params.id, 10);
    const film = films.find(f => f.id === filmId);

    if (film) {
        film.title = req.body.title;
        film.genre = req.body.genre;
        film.image = req.body.image;
        res.json(film);
    } else {
        res.status(404).json({ message: 'Film not found '});
    }
});

//Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démaré sur le port ${PORT}`);
});