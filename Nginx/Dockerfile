FROM nginxinc/nginx-unprivileged:1-alpine

COPY ./default /etc/nginx/sites-available/default
# COPY ./upstream.conf /etc/nginx/conf.d/upstream.conf
COPY ./run.sh /run.sh

ENV LISTEN_PORT=3000
ENV APP_HOST=strapi    
ENV APP_PORT=1337

USER root

RUN touch /etc/nginx/conf.d/default.conf && \
    chown nginx:nginx /etc/nginx/conf.d/default.conf && \
    chmod +x /run.sh

USER nginx

CMD ["/run.sh"]