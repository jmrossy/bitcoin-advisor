#!/bin/bash
DEPLOY_PATH=/var/www/buybitcoin.help
echo "Note: requires sudo"
echo "Using deploy path: $DEPLOY_PATH"

rm -rf $DEPLOY_PATH
mkdir $DEPLOY_PATH
cp $LOCAL_PATH/index.html $DEPLOY_PATH
cp -r $LOCAL_PATH/js $DEPLOY_PATH
cp -r $LOCAL_PATH/css $DEPLOY_PATH
cp -r $LOCAL_PATH/fonts $DEPLOY_PATH
cp -r $LOCAL_PATH/images $DEPLOY_PATH
chown -R www-data:www-data $DEPLOY_PATH
chmod -R 570 $DEPLOY_PATH
chmod g+s $DEPLOY_PATH
echo "Site contents copied over."

echo "Done"

