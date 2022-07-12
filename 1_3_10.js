

const once = fn => {
  let ret, isCalled;
    return function(arg1, arg2, arg3) {
        if ( isCalled ) return ret;
        isCalled = true;
        ret = fn(arg1, arg2, arg3);
        return ret;
    };
}





/***************
Once
Реализуйте функцию once, которая принимает функцию в качестве аргумента и возвращает новую функцию, которая вызывает функцию-аргумент, но только единожды. Повторный вызов функции-результата once не должен давать никакого эффекта.

const f = () => console.log('hi!');
const onceF = once(f);
onceF(); // hi!
onceF(); // nothing
***************/