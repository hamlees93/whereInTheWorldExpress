# Express Boilerplate

A boiler plate to get an express app started with ease. Note this is purely for a backend express app, with no view.

### Steps

**1.** Clone the repo `git clone https://github.com/hamlees93/expressSkeleton`

**2.** Change into the repo directory `cd expressSkeleton`

**3.** Install all necessary packages `npm install`

**4.** Add your own **.env** file with:
* DB_HOST e.g. `DB_HOST=mongodb://localhost/#appName`
* PORT e.g. `PORT=3000`
* CORS_URI e.g. `CORS_URI=http://localhost:3000`
* JWT_SECRET e.g. `JWT_SECRET=#randomlyGeneratedKeyValue`

**5.** Start your **mongo database**
* May need to run `mongod --config /usr/local/etc/mongod.conf` in one terminal window 
* Then run `mongo` to test your connection (if the shell opens - you're all good) 

**6.** Start your server `npm run server`
