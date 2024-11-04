# Clon Facebook
1. Estructura de usuarios
Tabla Users:

user_id (PK): Identificador único del usuario.
name: Nombre completo del usuario.
username: Nombre de usuario único.
email: Dirección de correo electrónico (único).
password_hash: Hash de la contraseña.
profile_picture: URL de la imagen de perfil.
bio: Descripción breve del usuario.
created_at: Fecha de creación de la cuenta.
updated_at: Última actualización del perfil.

Tabla ProfilePhotos:

photo_id (PK): Identificador único de la foto.
user_id (FK): Referencia al usuario propietario de la foto.
photo_url: URL de la foto de perfil.
is_current: Booleano que indica si es la foto de perfil actual.
uploaded_at: Fecha y hora en que la foto fue cargada.

Relaciones de usuario:

Amigos: Relación muchos a muchos en una tabla intermedia UserFriends con user_id, friend_id, status (ej. 'pendiente', 'aceptado').
Bloqueos: Tabla UserBlocks con user_id y blocked_user_id.
2. Estructura de publicaciones y multimedia

Tabla Posts:

post_id (PK): Identificador único de la publicación.
user_id (FK): Identificador del autor de la publicación.
content: Contenido de texto de la publicación.
media_url: URL del archivo multimedia (puede ser nulo).
privacy: Configuración de privacidad (ej. 'público', 'solo amigos').
created_at: Fecha de creación.
updated_at: Última actualización.
Tabla Media:

media_id (PK): Identificador único del archivo multimedia.
post_id (FK): Referencia a la publicación asociada.
type: Tipo de archivo ('imagen', 'video').
url: URL del archivo.
metadata: Información adicional (ej. tamaño, duración para videos).
3. Estructura de comentarios y 'likes'
Tabla Comments:

comment_id (PK): Identificador único del comentario.
post_id (FK): Identificador de la publicación comentada.
user_id (FK): Identificador del autor del comentario.
content: Contenido del comentario.
created_at: Fecha de creación.
Tabla Likes:

like_id (PK): Identificador único del 'like'.
post_id o comment_id (FK): Referencia a la publicación o comentario al que se le dio 'like'.
user_id (FK): Identificador del usuario que dio 'like'.
created_at: Fecha en que se dio 'like'.
4. Estructura de grupos y miembros
Tabla Groups:

group_id (PK): Identificador único del grupo.
name: Nombre del grupo.
description: Descripción del grupo.
privacy: Nivel de privacidad del grupo (público, cerrado, secreto).
created_at: Fecha de creación.
Tabla GroupMembers:

group_member_id (PK): Identificador único de la relación.
group_id (FK): Identificador del grupo.
user_id (FK): Identificador del miembro.
role: Rol del usuario en el grupo (miembro, administrador).
joined_at: Fecha en que el usuario se unió.
5. Estructura de mensajes y chat
Tabla Messages:

message_id (PK): Identificador único del mensaje.
chat_id (FK): Identificador de la conversación.
sender_id (FK): Usuario que envió el mensaje.
content: Contenido del mensaje.
media_url: URL de cualquier archivo adjunto (opcional).
timestamp: Fecha y hora del mensaje.
Tabla Chats:

chat_id (PK): Identificador único de la conversación.
user_ids: Lista de participantes (en chats grupales).
6. Estructura de eventos y notificaciones
Tabla Events:

event_id (PK): Identificador único del evento.
name: Nombre del evento.
description: Descripción del evento.
location: Ubicación del evento.
start_time: Fecha y hora de inicio.
end_time: Fecha y hora de finalización.
created_by (FK): Usuario que creó el evento.
Tabla Notifications:

notification_id (PK): Identificador único de la notificación.
user_id (FK): Identificador del usuario que recibe la notificación.
type: Tipo de notificación (ej. 'nuevo comentario', 'nuevo like').
related_id: ID relacionado con la entidad (post_id, comment_id, etc.).
timestamp: Fecha y hora de la notificación.
read: Booleano que indica si se ha leído.


7. Estructura para carga de archivos multimedia
Tabla Uploads:

upload_id (PK): Identificador único de la carga.
user_id (FK): Usuario que subió el archivo.
type: Tipo de archivo (imagen, video).
url: Dirección URL donde se encuentra almacenado.
size: Tamaño del archivo.
metadata: Detalles adicionales como dimensiones y duración.