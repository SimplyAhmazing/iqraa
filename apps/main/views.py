from django.views import generic


class MainView(generic.TemplateView):
    template_name = 'main/main.html'
