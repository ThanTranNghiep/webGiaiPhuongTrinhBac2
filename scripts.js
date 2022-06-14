function giai(form){
    var a,b,c;
    var x1,x2,d;

    a=parseInt(form.a.value);
    b=parseInt(form.b.value);
    c=parseInt(form.c.value);

    d=(b*b)-(4*a*c);
    if(a==0)
    {
        if(b==0)
        {
            if(c==0)    alert("Phương trình vô số nghiệm !");
            else    alert("Phương trình vô nghiệm !");
        }
        else
        {
            alert("Đây là phương trình bậc nhất !");
            x1= -c/b;
            form.x1.value=eval(x1);
        }
    }
    else
    {
        if(d==0)
        {
            alert("Phương trình có nghiệm kép !");
            x1=(-b)/(2*a);
            x2=(-b)/(2*a);
            form.x1.value=eval(x1);
            form.x2.value=eval(x2);
        }
        else
        {
            if(d>0)
            {   
                var d1=Math.sqrt(d);
                alert("Phương trình có 2 nghiệm phân biệt !");
                x1= (-b+d1)/(2*a);
                x2= (-b-d1)/(2*a);
                form.x1.value=eval(x1);
                form.x2.value=eval(x2);
            }
            else    alert("Phương trình vô nghiệm !");
        }

    }
}