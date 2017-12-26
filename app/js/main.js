$(document).ready(function() {
    $("ul li a").click(function(e) {
        e.preventDefault(),
        e.stopPropagation,
        $(this).closest("ul").find(".nav-menu__item--active").removeClass("nav-menu__item--active"),
        $(this).parent().addClass("nav-menu__item--active")
    }),
    $("select").selectric({
        maxHeight: 200
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRoaXMiLCJjbG9zZXN0IiwiZmluZCIsInJlbW92ZUNsYXNzIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJzZWxlY3RyaWMiLCJtYXhIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFBQyxVQUFBQyxNQUFBLFdBQ0FGLEVBQUEsV0FBQUcsTUFDQSxTQUFBQyxHQUNBQSxFQUFBQyxpQkFDQUQsRUFBQUUsZ0JBQ0FOLEVBQUFPLE1BQUFDLFFBQUEsTUFBQUMsS0FBQSwyQkFBQUMsWUFBQSwwQkFDQVYsRUFBQU8sTUFBQUksU0FBQUMsU0FBQSw0QkFFQVosRUFBQSxVQUFBYSxXQUNBQyxVQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHQkKCd1bCBsaSBhJykuY2xpY2soXHJcblx0XHRmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb25cclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb247IC8vIHN0b3AgdGhlIGNsaWNrIGZyb20gYnViYmxpbmdcclxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCd1bCcpLmZpbmQoJy5uYXYtbWVudV9faXRlbS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ25hdi1tZW51X19pdGVtLS1hY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnbmF2LW1lbnVfX2l0ZW0tLWFjdGl2ZScpO1xyXG5cdFx0fSk7XHJcbiAgXHQkKCdzZWxlY3QnKS5zZWxlY3RyaWMoe1xyXG4gIFx0XHRtYXhIZWlnaHQ6IDIwMFxyXG4gIFx0fSk7XHJcbn0pO1xyXG5cclxuIl19
