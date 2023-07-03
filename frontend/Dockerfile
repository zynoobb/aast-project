FROM node:18

COPY package.json /app/
COPY yarn.lock /app/
WORKDIR /app/
RUN yarn install
COPY . /app/
RUN yarn build


ENV RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false
EXPOSE 3000
CMD yarn dev -p 3000