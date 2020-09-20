# humwrk/greeter
#
# VERSION         0.0.1
# VENDOR          Araclx Inc.
# MAINTAINER      Jakub Olan <jakub.olan001@gmail.com>

FROM node:latest

# Container Metadata
LABEL com.araclx.vendor "Araclx Inc."
LABEL com.araclx.maintainer "Jakub Olan <jakub.olan001@gmail.com>"
LABEL com.araclx.version "0.0.1"

# Installation of node_modules
WORKDIR /opt/humwrk
USER root
COPY package.json yarn.lock* ./
RUN yarn
ENV PATH /opt/humwrk/node_modules/.bin:$PATH

# Operations on application source
WORKDIR /opt/humwrk/src
COPY . .
RUN yarn build

# Exposed application ports
# EXPOSE 3600/tcp

USER node
CMD [ "yarn", "start" ]