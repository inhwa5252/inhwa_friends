function account(UserID){
    var SavedUser = "정인화";
    if(UserID == SavedUser){
        console.log("반갑습니다 " + UserID +'님');
    }else{
        console.log("로그인에 실패했습니다");
    }
}

account("정인화"); 