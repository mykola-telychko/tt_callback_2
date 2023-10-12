const fs = require('fs');

// Функція для асинхронного читання даних з файлу
function readFileAsync(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

// Функція для асинхронного запису даних до файлу
function writeFileAsync(filename, data, callback) {
    fs.writeFile(filename, data, 'utf8', (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

// Приклад використання
readFileAsync('input.txt', (err, data) => {
    if (err) {
        console.error('Помилка читання файлу:', err);
    } else {
        console.log('Дані з файлу:', data);
        
        const newData = data.toUpperCase(); // Приклад операції з даними
        
        writeFileAsync('output.txt', newData, (err) => {
            if (err) {
                console.error('Помилка запису до файлу:', err);
            } else {
                console.log('Дані успішно записано в файл output.txt');
            }
        });
    }
});
