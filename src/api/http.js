// 对http请求进行封装
import axios from 'axios'

// 使用自定义的配置文件发送请求
const instance = axios.create({
    baseURL: '',
    timeout: 3000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log("请求错误")
    // console.warn("请求错误")
    // console.error("请求错误")
    if(response.status === 200){
        return response.data;
    }else{
        console.error("请求错误")
        console.error(response)
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


// 做了一个发送http请求的工具，通过这个工具发送的请求会带上我们的配置
export default instance;