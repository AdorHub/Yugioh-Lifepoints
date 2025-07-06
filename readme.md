![photo_5287538082557583181_w](https://github.com/user-attachments/assets/32748e41-cf60-4761-92ae-57535558a776)

## `Yu-Gi-Oh Lifepoints`

### Сайт для подсчета очков здоровья во время дуэли с функциями броска кубика/монетки, аудио-плеером, сохранением кол-ва побед/поражений и их сброса.

Для использования требуется создать аккаунт (логин, изображение профиля, пароль) (реализовано на чистом php)

Присутствует адаптивный дизайн

Используемые технологии: 
![Static Badge](https://img.shields.io/badge/html-orange)
![Static Badge](https://img.shields.io/badge/css-blue)
![Static Badge](https://img.shields.io/badge/java_script-yellow)
![Static Badge](https://img.shields.io/badge/php-indigo)
![Static Badge](https://img.shields.io/badge/mysql-lightblue)

Создать БД:

```mysql
CREATE DATABASE Lifepoints;

CREATE TABLE Lifepoints.duelists (id UNSIGNED INT PRIMARY KEY AUTO_INCREMENT, user_login VARCHAR(255) UNIQUE, user_password VARCHAR(255), profile_img VARCHAR(255));
```
