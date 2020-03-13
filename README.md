#Installation steps

1.Clone repository

2.run below command

composer install

php artisan key:generate

php artisan migrate --seed

php artisan passport:install

3.Go to frontend folder in CMD,in Frontend run below command

npm install and yarn install

4.After you run passport:install command you get 2 keys
take second key and set it in frontend/enviroments/environment.ts and frontend/enviroments/environment.prod.ts and set backend url ex: http://localhost:8000

5.in fronetend run ng serve and in backend run php artisan serve

Task Performed by this combination:

BackEnd - Laravel API

Simple auth built with passport ( username / password )

Simple CRUD Countries

Simple CRUD Cities - contains country_id

Simple CRUD Products - contains city_id

 

Front End Angular:

Simple login

The above CRUDS from the BackEnd

Reports page that can get the products filtered by country
