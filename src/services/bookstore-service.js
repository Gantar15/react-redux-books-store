
export default class BookstoreService{
    data = [
        {
            id: 1,
            title: 'Frontenders',
            author: 'Pithon J. Nuyan',
            price: 12,
            coverImage: 'https://pbs.twimg.com/media/CUfblZbWEAA7g9f.jpg'
        },
        {
            id: 2,
            title: 'Grokking algorithms',
            author: 'Aditie Phygava',
            price: 23.5,
            coverImage: 'https://fiction-books.ru/img/1016990496.jpg'
        }
    ];

    getBooks(){
        return new Promise(resolve => {
            setTimeout(() => resolve(this.data), 500);
        });
    }
}