<h1 align="center">

`Yu-Gi-Oh Lifepoints`

</h1>


<h2 align="center">Приложение для подсчета очков здоровья</h2>

<br>

<h2 align="center">Desktop версия</h2>

![Yugioh Preview Desktop](https://github.com/user-attachments/assets/a3077919-4336-4e2e-9831-9696acd94158)

**Данная версия требует установки на компьютер и не содержит авторизации и статистики как в `Web` версии**

- Ссылка на скачивание: https://drive.google.com/file/d/1ysbI0iS8Kmp7hpuiTZQeZcw1uQ7uykMk/view?usp=sharing

Используемые технологии:

![Static Badge](https://img.shields.io/badge/HTML-orange)
![Static Badge](https://img.shields.io/badge/CSS-blue)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow)
![Static Badge](https://img.shields.io/badge/ElectronJs-darkblue)

***

<br>

<h2 align="center">Web версия</h2>

![Yugioh Preview Web](https://github.com/user-attachments/assets/32748e41-cf60-4761-92ae-57535558a776)

**Требуется авторизация для работы, также содержит статистику побед/поражений в окне _Profile_**

- Для использования скачать архив или клонировать репозиторий

Используемые технологии:

![Static Badge](https://img.shields.io/badge/HTML-orange)
![Static Badge](https://img.shields.io/badge/CSS-blue)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow)
![Static Badge](https://img.shields.io/badge/PHP-indigo)
![Static Badge](https://img.shields.io/badge/MySQL-lightblue)

Создать БД:

```sql
CREATE DATABASE Lifepoints;

CREATE TABLE Lifepoints.duelists (id UNSIGNED INT PRIMARY KEY AUTO_INCREMENT, user_login VARCHAR(255) UNIQUE, user_password VARCHAR(255), profile_img VARCHAR(255));
```
