const maney = new Promise(function (resolve, reject) {
    console.log('У меня будет возможность заработать за мои знания, получив хорошую оценку за контрольную работы!')
    setTimeout(() => {
        let arr = ['math', 'phis', 'bio'];
        arr.pop();
        let school = Object.assign({}, arr);

        let conditionsOne = Math.floor(Math.random() * 5) + 1;
        let conditionsTwo = Math.floor(Math.random() * 5) + 1;
        let mean = Math.floor((conditionsOne + conditionsTwo) / 2);

        school = {
            math: conditionsOne,
            phis: conditionsTwo
        }
        let mathem = school.math;
        let phisic = school.phis;
        console.log('Оценка за математику', mathem)
        console.log('Оценка за физику', phisic)


        switch (mean) {
            case 1:
                ++mean
                break;
        }//switch с else if совместно не используются
        if (mathem === 1) {
            ++mathem
        }
        else if (phisic === 1) {
            ++phisic
        }
        else if (mean <= 3) {
            resolve(mean);
        } else {
            reject(mean);
        }
    }, 3000)
})
    .then(result => (console.log(`Увы, среднее значение ${result} и оно не очень хороше, но я буду в дальнейшем очень стараться!`)))
    .catch(result => (console.log(`Ура, среднее значение ${result} и оно очень хорошее, и я получу за это свою награду!!!`)))