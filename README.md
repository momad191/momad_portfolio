## your vps is not like shared servers your vps isolated and al resources is yours

## first enter to your VPS By SSH

ssh root@123.123.123
password:

---

## go to root directory

pwd

---

## check if git installed in the serever

which git

---

## clear

## check if nodejs installed

node -v

## install nodejs from https://github.com/nvm-sh/nvm

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

## close and reopen your terminal to start using nvm / or run the following to use it now

## use it

nvm -v

## use nvm to install nodejs

nvm install --lts

## after installing

node -v
npm -v

## start git cloning your repo

git clone https://github.com/momad191/

ls

cd momad-portfolio/

ls

## now we can run our node application on npm run dev But its not optimal for production

npm install
npm install --legacy-peer-
npm run build
npm run start
