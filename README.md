# sticky-notes

Нужен докер контейнер с postgres, чтобы запустить бэк, команда которую использую я:</br>
  <b>docker run --name pgpg -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres<b></br>
  
После этого надо перейти в папку с бэком и запустить миграции:</br>
 <b> npm run migration:run<b></br>

Потом можно запускать фронт и бэк с помощью <b>npm run start<b> не забыв установить зависимости</br>

