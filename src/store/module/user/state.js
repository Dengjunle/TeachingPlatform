const state={
    userid:sessionStorage.getItem("userid")||null,
    userinfo:JSON.parse(sessionStorage.getItem("userinfo")||'{}')
}

export default state;