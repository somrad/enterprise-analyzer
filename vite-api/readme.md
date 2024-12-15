
# Run locally

flask --app app run

# Run with Gunicorn


gunicorn --config config.py app:app
