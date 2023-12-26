<p align="center">
  <a href="https://docs.nestjs.cn/10/firststeps" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Nest.js learning project

- [x] controllers
- [x] providers - service
- [x] modules
- [x] middlewares
- [x] filters
- [x] pipes
- [x] guards
- [x] interceptors


## controllers
- 控制器负责处理传入的请求和向客户端返回响应。

## providers
- 控制器应处理 HTTP 请求并将更复杂的任务委托给 providers

## middlewares
- 中间件是在路由处理程序之前调用的函数。 中间件函数可以访问请求和响应对象，以及应用程序请求响应周期中的 next() 中间件函数

## filters
- 内置的异常层负责处理整个应用程序中的所有抛出的异常。当捕获到未处理的异常时，最终用户将收到友好的响应。
- 有时您可能希望对异常层拥有完全控制权，例如，您可能希望基于某些动态因素添加日志记录或使用不同的 JSON 模式。 异常过滤器正是为此目的而设计的。 它们使您可以控制精确的控制流以及将响应的内容发送回客户端。

## pipes
- 管道有两个典型的应用场景:
  1. 转换：管道将输入数据转换为所需的数据输出(例如，将字符串转换为整数)
  2. 验证：对输入数据进行验证，如果验证成功继续传递; 验证失败则抛出异常

## guards
- 守卫有一个单独的责任。它们根据运行时出现的某些条件（例如权限，角色，访问控制列表等）来确定给定的请求是否由路由处理程序处理。这通常称为授权
- 守卫在每个中间件之后执行，但在任何拦截器或管道之前执行。

## intercept
- 拦截器具有一系列有用的功能，这些功能受面向切面编程（AOP）技术的启发。它们可以：
  1. 在函数执行之前/之后绑定额外的逻辑
  2. 转换从函数返回的结果
  3. 转换从函数抛出的异常
  4. 扩展基本函数行为
  5. 根据所选条件完全重写函数 (例如, 缓存目的)