
//  1) Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
//  var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
//  resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi

class CustomMatch 
{

    constructor(num)
    {
        this.num=num;   
    }
    plus(number)
    {
        this.num=this.num+number;
        return this;
    }

    minus(number)
    {
        this.num=this.num-number;
        return this;
    }

    multiply(number)
    {
        this.num=this.num*number;
        return this;
    }

    divide(number)
    {
        this.num=this.num/number;
        return this;
    }


}

var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
console.log(result.num);


// 2) Custom bir array classi yaradin. Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin.


class array 
{
    constructor(arr)
    {
        this.arr=arr
    }

    find(Boolean)
}
