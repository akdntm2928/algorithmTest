// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
String.prototype.replaceAt=function(index, character) {
return this.substr(0, index) + character + this.substr(index+character.length); }

function solution(s, n) {

    for(let i = 0; i<s.length; i++){
        if(s[i] != ' '){
            let num =0;
            if(96 >= s[i].charCodeAt(0) && s[i].charCodeAt(0) >= 90){
                num = s[i].charCodeAt(0)+n+6
            }else if(s[i].charCodeAt(0) + n >= 122){
                num = 97+n-1
            }else{ 
                num = s[i].charCodeAt(0)+n
            }
            console.log(num)
            s = s.replaceAt(i,String.fromCharCode((num)))
        }else{
            s = s.replaceAt(i,' ')
        }
    }
    console.log(s);
    return s
}

solution("AaZz",25)