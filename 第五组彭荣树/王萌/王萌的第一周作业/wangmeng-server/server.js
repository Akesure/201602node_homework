#! /usr/bin/  node
var http = require('http');
//����һ��HTTP������
//IP �˿�
//����ͻ��˵�����
/**
 * req �ͻ��˵�����
 * res �������˵���Ӧ
 */
var mime = {
    ".css": "text/css",
    ".js": "text/javascript",
    ".jpg": "image/jpg",
    ".html": "text/html"
}
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var server = http.createServer(function (req, res) {
    //������Ӧ������ ���õ���Ӧͷ��
    if (req.url == '/clock') {
        res.end(new Date().toLocaleString());
    }else if(req.url == '/favicon.ico'){
        res.end();
    } else {
        res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');
        fs.readFile('.' + req.url, function (err, data) {
            res.write(data);//��ͻ��˷���Ӧ��
            res.end();//������Ӧ �ҵ��绰
        })
    }
});
//�ڱ�������8080�˿�
server.listen(8080);