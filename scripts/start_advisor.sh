docker run --rm --name rafiki_advisor \
  --network $DOCKER_NETWORK \
  -e APP_SECRET=$APP_SECRET \
  -e LOGS_FOLDER_PATH=$LOGS_FOLDER_PATH \
  -v $LOGS_FOLDER_PATH:$LOGS_FOLDER_PATH \
  -p 8001:$ADMIN_PORT \
  $RAFIKI_IMAGE_ADVISOR