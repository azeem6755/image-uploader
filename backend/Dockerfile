FROM python:3.9-slim
RUN apt-get update
RUN apt-get -y install wget vim libpq-dev gcc

WORKDIR /usr/src/app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN groupadd -g 1000 app
RUN useradd -u 1000 -ms /bin/bash -g app app
RUN apt-get install -y git

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r ./requirements.txt
RUN pip install httplib2
COPY . .
COPY --chown=app:app . .
USER app

