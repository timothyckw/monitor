document.writeln("");
document.writeln("<script>");
document.writeln("    //错误信息提醒");
document.writeln("    function showMsg(title, type) {");
document.writeln("        new PNotify({");
document.writeln("            title: title,");
document.writeln("            type: type,");
document.writeln("            styling: \'bootstrap3\'");
document.writeln("        });");
document.writeln("    }");
document.writeln("    ");
document.writeln("    function logout(form) {");
document.writeln("        $.ajax({");
document.writeln("            url: serverHost+\'/v1/user/info/tag/logout\',// 获取自己系统后台用户信息接口");
document.writeln("            type: \'GET\',");
document.writeln("            dataType: \'json\',");
document.writeln("            success: function (data) {");
document.writeln("                if (data === \'success\') { //判断返回值，这里根据的业务内容可做调整");
document.writeln("                    showMsg(\'登出成功\',\'success\');");
document.writeln("");
document.writeln("                    window.location.href = serverHost+\'/static/production/login.html\';//指向登录的页面地址");
document.writeln("                } else {");
document.writeln("                    showMsg(\'登出失败\',\'error\');");
document.writeln("");
document.writeln("                    return false;");
document.writeln("                }");
document.writeln("            },");
document.writeln("            error: function (data) {");
document.writeln("                showMsg(\'登出失败\',\'error\');");
document.writeln("");
document.writeln("            }");
document.writeln("        });");
document.writeln("    }");
document.writeln("</script>");
document.writeln("");
document.writeln("<div class=\'col-md-3 left_col\'>");
document.writeln("    <div class=\'left_col scroll-view\'>");
document.writeln("        <div class=\'navbar nav_title\' style=\'border: 0;\'>");
document.writeln("            <a href=\'index.html\' class=\'site_title\'><i class=\'fa");
document.writeln("                    fa-bitcoin\'></i> <span>Monitor</span></a>");
document.writeln("        </div>");
document.writeln("");
document.writeln("        <div class=\'clearfix\'></div>");
document.writeln("");
document.writeln("        <!-- sidebar menu -->");
document.writeln("        <div id=\'sidebar-menu\' class=\'main_menu_side hidden-print main_menu\'>");
document.writeln("            <div class=\'menu_section\'>");
document.writeln("                <h3>General</h3>");
document.writeln("                <ul class=\'nav side-menu\'>");
document.writeln("                    <li><a><i class=\'fa fa-home\'></i> Dashboard <span class=\'fa fa-chevron-down\'></span></a>");
document.writeln("                        <ul class=\'nav child_menu\'>");
document.writeln("                            <li><a href=\'index.html\'>Servers</a></li>");
document.writeln("                        </ul>");
document.writeln("                    </li>");
document.writeln("                    <li><a><i class=\'fa fa-edit\'></i> Settings <span");
document.writeln("                            class=\'fa fa-chevron-down\'></span></a>");
document.writeln("                        <ul class=\'nav child_menu\'>");
document.writeln("                            <li><a href=\'settings.html\'>Servers</a></li>");
document.writeln("                        </ul>");
document.writeln("                    </li>");
document.writeln("                </ul>");
document.writeln("            </div>");
document.writeln("");
document.writeln("        </div>");
document.writeln("        <!-- /sidebar menu -->");
document.writeln("");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("");
document.writeln("<!-- top navigation -->");
document.writeln("<div class=\'top_nav\'>");
document.writeln("    <div class=\'nav_menu\'>");
document.writeln("        <ul class=\'nav navbar-nav navbar-right\'>");
document.writeln("            <li class=\'\'>");
document.writeln("                <a href=\'javascript:;\' class=\'user-profile dropdown-toggle\' data-toggle=\'dropdown\' aria-expanded=\'false\'>");
document.writeln("                    Tron");
document.writeln("                    <span class=\' fa fa-angle-down\'></span>");
document.writeln("                </a>");
document.writeln("                <ul class=\'dropdown-menu dropdown-usermenu pull-right\'>");
document.writeln("");
document.writeln("");
document.writeln("                    <li>");
document.writeln("");
document.writeln("                        <a class=\'btn btn-default submit\' id=\'submit\'  onclick=\'return logout(this.form);\'> Log Out</a>");
document.writeln("");
document.writeln("                    </li>");
document.writeln("                </ul>");
document.writeln("            </li>");
document.writeln("");
document.writeln("        </ul>");
document.writeln("        <nav>");
document.writeln("            <div class=\'nav toggle\'>");
document.writeln("                <a id=\'menu_toggle\'><i class=\'fa fa-bars\'></i></a>");
document.writeln("            </div>");
document.writeln("        </nav>");
document.writeln("    </div>");
document.writeln("</div>");