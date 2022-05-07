# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.234.0/containers/alpine/.devcontainer/base.Dockerfile

# [Choice] Alpine version: 3.14, 3.13, 3.12, 3.11
ARG VARIANT="3.15"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-${VARIANT}

# Install golang
COPY --from=golang:1.18.1-alpine3.15 /usr/local/go/ /usr/local/go/
ENV PATH="/usr/local/go/bin:${PATH}"

# ** [Optional] Uncomment this section to install additional packages. **
RUN apk update \
    && apk add --no-cache cmake make gcc bash python3 nodejs openjdk17-jdk