from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role')  # Colunas a serem exibidas na lista
    search_fields = ('user__username',)  # Permite buscar perfis pelo nome de usuário
