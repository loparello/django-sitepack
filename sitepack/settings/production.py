from .base import *

DEBUG = False


# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*'] 


EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Base URL to use when referring to full URLs within the Wagtail admin backend -
# e.g. in notification emails. Don't include '/admin' or a trailing slash
BASE_URL = 'https://mysite.com'


# Webpack loader
WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(PROJECT_DIR, 'webpack-stats.json'),
    }
}


try:
    from .local import *
except ImportError:
    pass
