from django.contrib import admin
from .models import News

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')  # Colunas a serem exibidas na lista
    search_fields = ('title',)  # Permite buscar notícias pelo título
    list_filter = ('created_at',)  # Filtro por data de criação
