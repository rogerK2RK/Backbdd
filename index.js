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
        genre: 'Dessin animé'
    },
    {
        id: 2 , 
        title : 'Ghost',
        genre: 'Horreur'
    },
    {
        id: 3 , 
        title : 'Docteur stone',
        genre: 'Animé'
    },
]

app.get('/films', (req, res) => {
    res.json(films);
});

app.listen(PORT, () => {
    console.log(`Serveur démaré sur le port ${PORT}`);
})