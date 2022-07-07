from image_uploader.settings.base import *


DEBUG = True
SECRET_KEY = os.getenv('SECRET_KEY')
ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS').split(' ')