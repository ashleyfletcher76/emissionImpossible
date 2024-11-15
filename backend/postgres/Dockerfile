FROM postgres:14

# copy init scripts
COPY init_db.sh /usr/local/bin/

RUN apt-get update && \
	apt-get install -y openssl iputils-ping net-tools && \
	openssl req -new -x509 -days 365 -nodes \
	-out /var/lib/postgresql/server.crt -keyout /var/lib/postgresql/server.key -subj "/CN=localhost" && \
	chmod 600 /var/lib/postgresql/server.key && \
	chown postgres:postgres /var/lib/postgresql/server.key /var/lib/postgresql/server.crt && \
	chmod +x /usr/local/bin/init_db.sh && \
	apt-get clean && rm -rf /var/lib/apt/lists/*

CMD ["/usr/local/bin/init_db.sh"]
