setInterval(function(){
    //����ajax����
    var xhr = new XMLHttpRequest;
    //������
    xhr.open('GET','/clock',true);
    //ע��ص�����
    xhr.onreadystatechange = function(){
        //�����ajax����״̬Ϊ������������Ӧ��Ϊ200��ʱ��
        if(xhr.readyState == 4 && xhr.status == 200){
            document.querySelector('#clock').innerHTML = xhr.responseText;
        }
    }
    xhr.send();
},5000)