from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin 
from .models import User

from .models import User

class CustomUserAdmin(UserAdmin):
    add_fieldsets = UserAdmin.add_fieldsets + (
                ('required', {'fields' : ('email', )}),
            )

admin.site.register(User, CustomUserAdmin)