FROM nginx:latest

COPY ./default /etc/nginx/sites-available/default
COPY ./run.sh /run.sh

ENV LISTEN_PORT=3000
ENV APP_HOST=strapi    
ENV APP_PORT=1337

RUN chmod +x /run.sh

CMD ["/run.sh"]