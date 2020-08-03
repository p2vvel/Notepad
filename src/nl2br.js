function nl2br(string){
    let temp = string;
    temp = temp.replace(/(\r\n|\n|\r)/g, "<br/>");
    return temp;
}

export default nl2br;
