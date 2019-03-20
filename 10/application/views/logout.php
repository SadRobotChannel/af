<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html>
    <head>
        <link rel="icon" type="image/gif/png" href="/static/img/bkmk-logo.png">
        <title>Bookmark Store</title>
        <link rel="stylesheet" href="/static/css/bootstrap.css" type="text/css"/>
        <style type="text/css">
            body{
                background: url('/static/img/home_bg.jpg') no-repeat;
            }
            .col h1{
                margin-top: 30px;
                font-family: times;
                font-weight:bolder;
                color:orangered;
                font-size: 30px;

            }
            .logo{
                margin-top:20px;
            }
            .col form{
                margin-top: 30px;
                float: right;
            }
            .row p{
                margin-left: 15px;
            }
            
            b{
                float:right;
                color:orange;
            }
            a{
                float:right;
                margin: 10px;
            }
           
            
           
        </style>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="logo" src="/static/img/bookmark_library1.jpg" alt="logo"/>
                </div>
                <div class="col">
                    <h1>BOOKMARK LIBRARY</h1>
                </div>
                <div class="col">
                    <b>
                        Welcome <?php echo $x; ?>
                    </b>
                    <a href="/home/bookmarks"><button class="btn btn-success ">signout</button></a>       
                </div>
            </div>  
            <div class="row">
                <p>With bookmark library you can store your favorite links online on your private and customizable bookmarks page.
                    All your bookmarks can be organized into categories and dashboards.</p>                         
            </div>
            <div class ="row">
                <form action="bm_submit.php" method="POST">
                    Enter URL:<input type="text" name="">
                    <input type="submit" name="" value="submit">
                </form>
            </div>
        </div>
    </body>
</html>

