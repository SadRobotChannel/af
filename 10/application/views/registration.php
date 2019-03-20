<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<html>
    <head>
        <link rel="icon" type="image/gif/png" href="/static/img/bkmk-logo.png">
        <title>
            FILL Form
        </title>
        <link rel="stylesheet" href="/static/css/bootstrap.css" type="text/css"/>
        <script type="text/javascript" src="/static/js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="/static/js/jquery.validate.js"></script>
        <script type="text/javascript" src="/static/js/newjs.js"></script>
        <style>
            body{
                background:url('/static/img/rpg2.jpg') no-repeat;
            }
            label {
                color:#0086b3;
            }
            h1{
                color:seagreen;
                text-align:center;
                font-weight:bolder;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3"></div>
                <div class="col-md-6 col-sm-6">
                    <br><br>
                    <h1> Registration form </h1>
                    <form action="/home/register_submit" method="POST">
                        <br><br>
                        <label><b>USER NAME:</b></label>
                        <input class="form-control" type ="text" name="username" placeholder="Enter username" required=""/>
                        <br/>
                        <label><b>EMAIL:</b></label>
                        <input class="form-control" type ="email" name="email" placeholder="Enter email" required=""/>
                        <br>
                        <label><b>PASSWORD:</b></label>
                        <input class ="form-control" type="password" name="password" placeholder="Enter password" required=""/>
                        <br/>
                        <button class="btn btn-success " type="reset">Reset</button>
                        <button class="btn btn-success " type="submit">Submit</button>
                    </form>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
    </body>
</html>

