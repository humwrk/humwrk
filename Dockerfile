# humwrk/system:latest
#
# VERSION         0.0.1
# VENDOR          Araclx Inc.
# MAINTAINER      Jakub Olan <jakub.olan001@gmail.com>

FROM node:latest

# Container Metadata
LABEL com.araclx.vendor "Araclx Inc."
LABEL com.araclx.maintainer "Jakub Olan <jakub.olan001@gmail.com>"
LABEL com.araclx.product "Humantic"
LABEL com.araclx.subsystem "system"
LABEL com.araclx.version "0.0.1"

# Healthchecking to monitor application status
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -v http://localhost:3600/ping || exit 1

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
EXPOSE 3600/tcp

USER node
CMD [ "node", "dist/main.bundle.js" ]