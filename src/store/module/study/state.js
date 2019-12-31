const state = {
    studyinfo:JSON.parse(sessionStorage.getItem("studyinfo")||'{}'),
    studyparam:JSON.parse(sessionStorage.getItem("studyparam")||'{}')
}

export default state