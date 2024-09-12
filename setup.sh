#!/bin/bash

cd ..

git clone https://github.com/artem-v-shamsutdinov/may-there-always-be-sunshine.space.git
git clone https://github.com/artem-v-shamsutdinov/past-the-war.earth.git
git clone https://github.com/Data-Independence-Network/dataindependence.net.git
git clone https://github.com/beyond-decentralized/beyond-decentralized.world.git
git clone https://github.com/artem-v-shamsutdinov/turbase.org.git
git clone https://github.com/artem-v-shamsutdinov/notes.git

ln -s ./may-there-always-be-sunshine.space/dist/public ./what-can.be/dist/public/space
ln -s ./past-the-war.earth/dist/public ./what-can.be/dist/public/peace
ln -s ./dataindependence/dist/public ./what-can.be/dist/public/dataindependence
ln -s ./beyond-decentralized/dist/public ./what-can.be/dist/public/beyond-decentralized
ln -s ./turbase.org/dist/public ./what-can.be/dist/public/turbase
ln -s ./notes ./what-can.be/dist/public/space/notes
