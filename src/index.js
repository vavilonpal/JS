import { getRandomActivity } from './activity.js'; // Подразумевается, что у вас есть файл activities.js, который содержит функцию getRandomActivity
import { getRandomActivityAwait } from './activity.js'; // Подразумевается, что у вас есть файл activities.js, который содержит функцию getRandomActivity

//СНачала прогружается хтмл а потом уже срабатывает js код
document.addEventListener('DOMContentLoaded', function() {
    try{
        getRandomActivity();
        getRandomActivityAwait();
        getRandomActivityAwait();
        
    }
    catch{
        console.error('Ошибка:', error);
    }


    
});
