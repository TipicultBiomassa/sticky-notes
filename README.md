# sticky-notes

Нужен докер контейнер с postgres, чтобы запустить бэк, команда которую использую я:</br>
  docker run --name pgpg -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres
  
После этого надо перейти в папку с бэком и запустить миграции:
  npm run migration:run

Потом можно запускать фронт и бэк с помощью npm run start

