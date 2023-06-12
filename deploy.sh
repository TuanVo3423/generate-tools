#! /bin/bashdocker system prune -af
docker-compose down --remove-orphans
git pull --rebase --autostash
docker-compose up -d --build


