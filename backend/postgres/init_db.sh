#!/bin/bash

set +x

if [ -z "$POSTGRES_USER" ] || [ -z "$POSTGRES_DB" ] || [ -z "$POSTGRES_PASSWORD" ]; then
	echo "ERROR: POSTGRES_USER, POSTGRES_DB, or POSTGRES_PASSWORD is not set. Exiting."
	exit 1
fi

set -x

if [ ! -f "/var/lib/postgresql/data/.db_ready" ]; then
	echo "Initializing PostgreSQL database..."

	docker-entrypoint.sh postgres &

	until pg_isready -h localhost -U $POSTGRES_USER -d $POSTGRES_DB; do
		echo "Waiting for PostgreSQL to be ready..."
		sleep 2
	done

	 # enable SSL in the PostgreSQL config
	psql -U $POSTGRES_USER -d $POSTGRES_DB -c "ALTER SYSTEM SET ssl = 'on';"
	psql -U $POSTGRES_USER -d $POSTGRES_DB -c "ALTER SYSTEM SET ssl_cert_file = '/var/lib/postgresql/server.crt';"
	psql -U $POSTGRES_USER -d $POSTGRES_DB -c "ALTER SYSTEM SET ssl_key_file = '/var/lib/postgresql/server.key';"


	touch /var/lib/postgresql/data/.db_ready
	chown postgres:postgres /var/lib/postgresql/data/.db_ready
	chmod 644 /var/lib/postgresql/data/.db_ready

	echo "PostgreSQL init successful."

	su postgres -c "pg_ctl -D /var/lib/postgresql/data stop"

else
	echo "Database already initialized."
fi

exec docker-entrypoint.sh postgres
