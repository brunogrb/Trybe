#!/bin/bash

read -p "Qual sua idade? " IDADE

if [ $IDADE -ge "16" ]
then
    echo "Você já pode votar!"
else
    echo "Você ainda Não pode votar!!"
fi