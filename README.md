# API DOC

## ROTAS

URL_BASE: https://freela-edesio-production.up.railway.app/api/


### POST - CREATE USER:
https://freela-edesio-production.up.railway.app/api/users/

{
<h4>"username":"nobruapelao", </h4>
<h4>"email":"nobruelgato@mail.com",</h4>
<h4>"password":"nobru20",</h4>
<h4>"tel":"99999-9999"</h4>
}

### POST - LOGIN:
https://freela-edesio-production.up.railway.app/api/login/

{
<h4>"username":"nobruapelao", </h4>
<h4>"password":"nobru20"</h4>
}


### GET - USERS:
https://freela-edesio-production.up.railway.app/api/users/


### GET - SPECIFIC USER:
https://freela-edesio-production.up.railway.app/api/users/${user-id}/


### DELETE - SPECIFIC USER:
https://freela-edesio-production.up.railway.app/api/users/${user-id}/

### PATCH - STATUS USER:
https://freela-edesio-production.up.railway.app/api/users/${user-id}/


-- Possíveis requisições:


{
<h4>"status":"aguardando"</h4> 
}

{
<h4>"status":"confirmado"</h4> 
}

### PATCH - COMPROVANTE USER:
https://freela-edesio-production.up.railway.app/api/users/${user-id}/pay/
{
<h4>"image_url":"a"</h4>
}









