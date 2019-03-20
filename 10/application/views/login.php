<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html>
    <head>
        <link rel="icon" type="image/gif/png" href="/static/img/bkmk-logo.png">
        <title>Login Form</title>
        <link rel="stylesheet" href="/static/css/bootstrap.css" type="text/css"/>
        <style type="text/css">
            body{
                background: url('/static/img/apple.jpg');
            }
            #log{
                border: 1px solid white;
                padding: 60px 40px;
                margin-top: 70px;
            }
            .img{
                width:130px;
                margin:auto;
                border-radius:50%;
                position:relative;
                display: block;
            }
            h1{
                color: white;
                text-align: center;
                font-weight:bolder;
                margin-top: -20px;
            }
            label{
                color: white;
                font-size: 20px;
            }
            .frgt{
                color:red;
                font-size:20px;
            }
                
        </style>
    </head>
    <body>
        <div class="container bg">
            <div class="row">
                <div class="col-md-3 col-sm-2 col-xs-12"></div>
                <div class="col-md-6 col-sm-8 col-xs-12">
                    <form id="log" action="/home/login_submit" method="POST">
                        <h1>Login Form</h1>
                        <img class="img img-thumbnail" src="/static/img/img_avatar.png"/>
                        <div>
                            <label>Email:</label>
                            <input class="form-control" type="text" name="email" placeholder="abc@example.com" required=""/><br/>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input class="form-control" type="password" name="password" placeholder="password" required=""/><br/>
                        </div>
                        <div>
                            <label><input type="checkbox"/>Remember me</label>
                            <button class="btn btn-success form-control" type="submit">Login</button>
                            <a class="frgt" href="www.google.com">Forget Password</a>
                        </div>
                    </form>
                
                <div class="col-md-3 col-sm-2 col-xs-12"></div>
            </div>
        </div>
    </body>
</html>


