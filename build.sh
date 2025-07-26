#!/bin/sh

plugin=bilibili-web-fullscreen-extension
version=`git describe --tags --abbrev=0`

cd src && zip -r ../$plugin-$version.zip * && cd ..

