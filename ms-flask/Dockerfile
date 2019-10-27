FROM python:3.7-alpine
MAINTAINER Marcus Cvjeticanin "mc222sn@student.lnu.se"

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt

CMD [ "python", "./src/app.py" ]