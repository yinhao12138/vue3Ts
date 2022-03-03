import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

//拦截器
interface hyRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

const DEFALUTE_LOADING = true

interface hyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: hyRequestInterceptors<T>
  showLoading?: boolean
}

class hyRequest {
  instance: AxiosInstance
  interceptors?: hyRequestInterceptors
  loading?: ILoadingInstance
  showLoading?: boolean

  constructor(config: hyRequestConfig) {
    //创建axios实列
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //保存基本信息
    this.showLoading = config.showLoading ?? DEFALUTE_LOADING

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    //使用拦截器
    //添加所有实列都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            // text: '拼命加载中....',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (error) => {
        console.log('请求失败')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('响应成功')
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('看似成功实则失败')
        } else {
          return data
        }
      },
      (error) => {
        this.loading?.close()
        if (error.response.status === '404') {
          console.log('响应失败')
        }
        return error
      }
    )
  }

  request<T>(config: hyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单个的数据处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //将showLoading设置为true 不会影响下一个请求
          this.showLoading = DEFALUTE_LOADING
          //将resolve返回出去
          resolve(res)
        })
        .catch((error) => {
          this.showLoading = DEFALUTE_LOADING
          reject(error)
          return error
        })
    })
  }

  get<T = any>(config: hyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: hyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: hyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: hyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default hyRequest
