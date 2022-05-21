curl --header "Content-Type: application/json" \
     --request POST \
     --data '{"framelength": 1024, "hoplength":512, "window":"hann", "cmap":"default", "mode":"power"}' \
       http://localhost:8080/genspec
