# Документация
Документация к `SberCloud Mobile` - сервису для мониторинга работы ресурсов SberCloud.Advanced с мобильного приложения.

# Вступление и описание решения

Проект `SberCloud Mobile` - приложение, которое позволяет не только быть в курсе состояния облака и ресурсов, но и получать уведомления о важных изменениях, а также производить оперативные изменения по ключевым показателям. Пользователями решения технические специалисты крупных и малых огранизаций, которым важно отслеживать и управлять ключевыми техническими показателями из любого местоположения.

Приложение наглядно показывает все важные показатели облака - статус сервисов, состояние счёта, алерты изменений и тикетов с поддержкой. По каждому из ключевых ресурсов доступна детализация – информация о работе ресурсов, графики мониторинга, сведения об операциях.

Стек проекта: `React Native`, `Java/Spring-boot`, `PostgreSQL`, `Docker`, `Hibernate`.

Библиотеки: expo-push-sdk, sber-java-sdk (сделали удобную обвязку поверх предоставленного sdk чтобы работать с объектной моделью), bouncycastle(использовали один из самых безопасных хэшей для пароль argon2), projectlombok, modelmapper, jjwt, guava, OAS 3.0 (Swagger doc from code).

У нас есть рабочая MVP-версия (минимально работоспособная версия продукта), в виде приложения, которое обладает как удобным интерфейсом, так и достаточным функционалом, чтобы продемонстрировать основные аспекты решения задачи кейса. Приложение можно установить по [ссылке](exp://2v-jjk.anonymous.app.exp.direct:80) в программе `Expo`, т.к. за время хакатона выложить и пройти модерацию отдельного приложения в Google Play и AppStore не представляется возможным.

Спасибо организаторам за интересную задачу, мы будем рады продолжить сотрудничество!

# Техническое описание проекта
## Установка
Т.к. в проекте используется микросервисная архитектура, большая часть сервисов доступна для скачивания в виде контейнеров.

Для локального развертывания решения необходимо авторизоваться в GitHub Package Registry [по инструкции](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages#authenticating-to-github-packages) и в корне проекта выполнить команду `docker-compose up --build`

Важно, что у вас должен быть установлен и запущен `Docker`.

> После того, как установка всех необходимых зависимостей будет выполнена, вы сможете потестировать систему локально по ссылке http://localhost:3000/

## Структура
- Проект представляет собой монорепозиторий 
- Исходный код frontend-части - в папку `app`.
- Исходный код серверной backend-части — в папке `aas21`.

Каждая директория по возможности содержит файл `Makefile` с базовыми командами.

## Архитектура приложения
Приложение состоит из микро-сервисов, включая сервис авторизации, сервис моделей, сервис-ui и  т.д. 

# Дополнительные материалы

- [**Прототип проекта, т.е. рабочая MVP-версия (минимально работоспособная версия продукта)** по ссылке](exp://2v-jjk.anonymous.app.exp.direct:80) в программе `Expo`, т.к. за время хакатона выложить и пройти модерацию отдельного приложения в Google Play и AppStore не представляется возможным.
- [Предварительная дорожная карта и смета](https://docs.google.com/spreadsheets/d/1fD8Nbg0GgytnopRfruiP9mdH5-zc9i5XvJstZvNjObU/edit?usp=sharing) общих затрат по разработке и внедрению на архитектуре заказчика для пилотной версии проекта.
- [Схематичный UX](https://www.figma.com/file/gtmhuwNfVkmmyQeQomsg84/SberCode-Cloud?node-id=0%3A1)
- [Дизайн мобильного приложения](https://www.figma.com/file/gtmhuwNfVkmmyQeQomsg84/SberCode-Cloud?node-id=54%3A2)
- [Прочие дополнительные материалы: идеи и предложения по развитию продукта, изученные при создания решения материалы и т.д.](https://drive.google.com/drive/folders/1n5OXtiMhfHI8PhwQzwXbOXPMUxQuD55-?usp=sharing)
