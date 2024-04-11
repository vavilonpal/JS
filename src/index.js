import { getRandomActivity, updateActivity } from './activity.js'; // Подразумевается, что у вас есть файл activities.js, который содержит функцию getRandomActivity
import { getRandomActivityAwait } from './activity.js'; // Подразумевается, что у вас есть файл activities.js, который содержит функцию getRandomActivity

//СНачала прогружается хтмл а потом уже срабатывает js код
document.addEventListener('DOMContentLoaded', function() {
    try{
        getRandomActivity();
        setInterval(getRandomActivityAwait(), 60000);
        const showTextButton = document.getElementById('showTextButton');
        const displayText = document.getElementById('displayText');
        showTextButton.addEventListener('click', function() {
            updateActivity();
        });
        
    }
    catch{
        console.error('Ошибка:', error);
    }


    
});
