# Javascript Async 

Javascript can run parts of code at virtually the same time.   

It does this with an interesting system of breaking your code down, moving it to a different space, and running it while task switching really fast.

If you want code to run like its in order, you should probably use promises.

Take a look at these resources:  
- [Promises at a high level, 100 seconds](https://www.youtube.com/watch?v=RvYYCGs45L4)
- [Firship Async Await short](https://www.youtube.com/shorts/ITogH7lJTyE)
- [Full explantion, 12 minutes of async](https://www.youtube.com/watch?v=vn3tm0quoqE&t=2s)

# What is a promise?
A promise is a way of setting up an action as a result of something that will happen in the future.
```javascript
when "done" do action
when "laundry done" do "dry clothes"
when "cookies baked" do "eat them"
```

## .then.catch syntax
```javascript
someFunctionThatReturnsPromise().then((result)=>{
  //do something with resuklt
}).catch(error){
  // do something with error
}

bakeCookies.then((cookies)=>{
  eatcookies(cookies)
}).catch((error)=>{
  console.log(`Cookies are bad as a result of this error: ${error}`)
})
```

## await syntax
await syntax is just cleaner .then.catch 
```javascript
async function example(){
  try{
    const result = await someFunctionThatReturnsPromise()
  }catch(error){
     // do something with error
  }
}
```

## Even Cleaner Syntax

```javascript
async function asyncWrapper(){
  try{
    const  result         = await someFunctionThatReturnsPromise()
    return [result, null] = await someFunctionThatReturnsPromise()
  }catch(error){     
    return [null, error]  = await someFunctionThatReturnsPromise()
  }
}

async function useAsyncWrapper(){
    const  [result, error]  = await useAsyncWrapper()
    if (error){ /* do something with error*/}
}


```
