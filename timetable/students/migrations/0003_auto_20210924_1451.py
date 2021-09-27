# Generated by Django 3.2.7 on 2021-09-24 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0002_student_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='email',
        ),
        migrations.RemoveField(
            model_name='student',
            name='message',
        ),
        migrations.RemoveField(
            model_name='student',
            name='owner',
        ),
        migrations.AlterField(
            model_name='student',
            name='name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]