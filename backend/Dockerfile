FROM python:3.11-slim

# set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# install system dependencies
RUN apt-get update && apt-get install -y \
	libpq-dev gcc openssl curl \
	&& apt-get clean && rm -rf /var/lib/apt/lists/*

# working directory
WORKDIR /app

# copy requirements file and install python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy the entire backend project into the container
COPY . .

# expose server port
EXPOSE 8000

# run dev server
CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
