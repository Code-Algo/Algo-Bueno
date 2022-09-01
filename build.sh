#!/usr/bin/env bash

npm run build 
rm -r ../server/public
mv ./build ../server/public
