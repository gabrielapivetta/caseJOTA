from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import News
from .serializers import NewsSerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Bem-vindo ao sistema de notícias!</h1>")

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-created_at')
    serializer_class = NewsSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]  # Qualquer um pode visualizar
        else:
            permission_classes = [IsAuthenticated]  # Apenas usuários autenticados podem criar/editar
        return [permission() for permission in permission_classes]
