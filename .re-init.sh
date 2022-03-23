rm -rf ./*
cd ..
rm -rf ./ReproApp
npm_config_yes=true npx react-native init ReproApp --template react-native-template-typescript
cp -r ./ReproApp/* ./react-native-reproduction

