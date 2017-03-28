compile_static:
	$ ./node_modules/webpack/bin/webpack.js

build:
	pip install pip-tools
	pip-sync
	npm install
	make compile_static
	python project/manage.py migrate
	python project/manage.py collectstatic

make run:
	python project/manage.py runserver
