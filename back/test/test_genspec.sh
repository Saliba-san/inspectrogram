#!/bin/bash
curl --header "Content-Type: application/json" \
     --request POST \
     --data '{"specId": 1, "framelength": 1024, "hoplength":512, "window":"hann", "cmap":"prism", "mode":"power"}' \
       http://localhost:8080/genspec
