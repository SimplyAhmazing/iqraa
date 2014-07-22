from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from explore import urls as explore_urls
from main import urls as main_urls


urlpatterns = patterns('',
    # Examples:

    url(r'^admin/', include(admin.site.urls)),
    url(r'^explore/', include(explore_urls, namespace='explore')),
    url(
        r'^api-auth/',
        include('rest_framework.urls', namespace='rest_framework')
    ),
    url(r'^$', include(main_urls, namespace='main')),
)
