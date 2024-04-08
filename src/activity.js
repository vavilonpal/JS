/**
 * Получает случайную активность из API и обновляет элемент с идентификатором 'activity'.
 */
export function getRandomActivity() {
    fetch('https://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data =>{
            const activityElement = document.getElementById('activity');
            activityElement.textContent = data.activity;
        })
        .catch(error => {
            console.error('Ошибка:', error);
            const activityElement = document.getElementById('activity');
            activityElement.textContent = 'К сожалению, произошла ошибка';
        });
}

/**
 * Получает случайную активность из API и обновляет элемент с идентификатором 'activity-1'.
 * После обновления активности запускает повторный вызов через 6 секунд.
 */
export async function getRandomActivityAwait() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        const activityElement = document.getElementById('activity-1');
        activityElement.textContent = data.activity;
        setTimeout(getRandomActivityAwait, 6000);
    } catch (error) {
        console.error('Ошибка:', error);
        const activityElement = document.getElementById('activity-1');
        activityElement.textContent = 'К сожалению, произошла ошибка';
    }
}

/**
 * Получает случайную активность из API и возвращает ее.
 * Если произошла ошибка, возвращает сообщение об ошибке.
 * @returns {Promise<string>} Строка с случайной активностью или сообщение об ошибке.
 */
export async function getRandomActivityReturn() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error('Ошибка:', error);
        return 'К сожалению, произошла ошибка';
    }
}

/**
 * Обновляет элемент с идентификатором 'activity-1' с помощью случайной активности.
 */
export async function updateActivity() {
    const activityElement = document.getElementById('activity-1');
    const activity = await getRandomActivityReturn();
    activityElement.textContent = activity;
}
