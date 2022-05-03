### Executando o backend
Para executar o backend, crie e ative o enviroment da seguinte forma para ambiente Windows
    py -3 -m venv venv
    venv\Scripts\activate

ou para Linux/Mac OS
    python3 -m venv venv
    . venv/bin/activate

Agora com o ambiente ativado, instale o requerimentos da seguinte forma
    pip install -r requeriments.txt

Crie/atualize o banco de dados com 
    python manage.py

E execute o servidor com 
    python routes.py
