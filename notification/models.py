from django.contrib.auth.models import User
from django.db import models
from server.models import Server


class Notification(models.Model):
    NOTIFICATION_TYPES = (
        (1, 'Server Invitation'),
        (2, 'Member Joining Request')
    )

    to_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='noti_to_user')
    from_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='noti_fr_user')
    to_server = models.ForeignKey(
        Server, on_delete=models.CASCADE, related_name='noti_to_server')
    notification_type = models.IntegerField(choices=NOTIFICATION_TYPES)
