
# Base Folder

## For Keycloak

https://www.youtube.com/watch?app=desktop&v=q50LxyGtEf0
https://www.youtube.com/watch?v=5z6gy4WGnUs


vite - https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa



#### sudo chown 999:999 postgres_data

docker run -d -p 8080:8080 \
    -e KEYCLOAK_ADMIN=admin \
    -e KEYCLOAK_ADMIN_PASSWORD=your-password \
    -e KC_PROXY=edge \
    --restart always \
    -v /your/projet/path:/Users/somr/Desktop/code/enterprise-analyzer/keycloak/standalone/data \
    quay.io/keycloak/keycloak:latest start-dev


# KeyCloak set up 

## Start


## Reference
https://medium.com/@elaurichetoho/guide-to-running-keycloak-instance-with-docker-e2a2b9d083a1

https://www.youtube.com/watch?app=desktop&v=q50LxyGtEf0

