console.log('testing the Article file');

class Article {
    constructor(article) {
        this.articles = article.querySelectorAll('p');
        this.artHead = article.querySelector('h2');
        this.expandBtn = article.querySelector('.expandButton');
        this.expandBtn.textContent = 'expand';
        this.expandBtn.addEventListener('click', () => {
            this.toggle();
        })
    }

    toggle() {
        this.articles.forEach(article => {
            article.classList.toggle('hidden');
        })
        switch (this.expandBtn.textContent) {
            case 'expand':
                this.expandBtn.textContent = 'collapse';
                break;
            case 'collapse':
                this.expandBtn.textContent = 'expand';
                break;
        }
    }
}

const articles = document.querySelectorAll('.article');
console.log('articles', articles);

articles.forEach(article => {
    new Article(article);
})



