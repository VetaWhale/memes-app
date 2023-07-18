class Model {
    constructor() {
        this.memes = []; // массив, куда мы положим всю информацию из api
        this.memName = [];
    }

    setMems(memes) { // назначае массив, в будещем передадим api
        this.memes = memes; // говорим, что массив равен информации, котoрую передади м из api
    }

    getMems() { // получить массив
        return this.memes; // получаем массив для дальнейшей работы
    }

    getMemesName() {
        this.memes.forEach(mem => {
            this.memName.push(mem.name);
        })
        return this.memName;
    }

    getMemesUrl(memName) { // получить url из массива
        let memUrl; // назначаем переменную, куда запишем результат
        this.memes.forEach(mem => {
            if(mem.name === memName) { 
                memUrl = mem.url; // условие, если проверка по имени true, то назначаем url
            }
        });
        return memUrl; // возвращаем url
    }
}