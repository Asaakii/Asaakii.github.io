/* 手机侧边栏交互优化 */
document.addEventListener('DOMContentLoaded', function() {
    var mobile_sidebar_menus = document.getElementById("sidebar-menus");
    if (mobile_sidebar_menus) {
        // 初始隐藏所有子菜单
        var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
        for (var i = 0; i < menus_item_child.length; i++) {
            menus_item_child[i].style.display = "none";
        }
        
        // 为有子菜单的父级菜单添加点击事件
        var hasChildMenus = mobile_sidebar_menus.querySelectorAll(".site-page.group");
        hasChildMenus.forEach(function(menu) {
            menu.addEventListener("click", function(e) {
                // 防止链接跳转
                e.preventDefault();
                
                // 查找相邻的子菜单
                var childMenu = this.parentNode.querySelector(".menus_item_child");
                if (childMenu) {
                    // 切换显示/隐藏状态
                    if (childMenu.style.display === "none" || !childMenu.style.display) {
                        childMenu.style.display = "block";
                    } else {
                        childMenu.style.display = "none";
                    }
                }
            });
        });
    }
});