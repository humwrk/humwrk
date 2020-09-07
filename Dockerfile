# humwrk/system:latest
#
# VERSION         0.0.1
# VENDOR          Araclx Inc.
# MAINTAINER      Jakub Olan <jakub.olan001@gmail.com>

FROM node:alpine

# Container Metadata
LABEL com.araclx.vendor "Araclx Inc."
LABEL com.araclx.maintainer "Jakub Olan <jakub.olan001@gmail.com>"
LABEL com.araclx.product "Humantic"
LABEL com.araclx.subsystem "system"
LABEL com.araclx.version "0.0.1"

# Working Directory of container
WORKDIR /usr/src/humantic

# Healthchecking to monitor application status
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -v http://localhost:3600/ping || exit 1

# Container User with root permissions
USER root

# Container DotENV Configuration
ENV NODE_ENV 'production'

# Global installation of pm2
RUN yarn global add pm2

# Install Application Dependencies
COPY package.json .
RUN yarn install

# Copy source of application
COPY . .

# Build files
RUN yarn build

# Use non-root user for process
USER node

# Application Entrypoint
EXPOSE 3600/tcp

CMD [ "pm2-runtime", ".pm2/cluster.yaml" ]