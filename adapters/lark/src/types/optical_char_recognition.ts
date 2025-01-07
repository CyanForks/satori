import { Internal } from '../internal'

declare module '../internal' {
  interface Internal {
    /**
     * 识别图片中的文字
     * @see https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/ai/optical_char_recognition-v1/image/basic_recognize
     */
    basicRecognizeOpticalCharRecognitionImage(body: BasicRecognizeOpticalCharRecognitionImageRequest): Promise<BasicRecognizeOpticalCharRecognitionImageResponse>
  }
}

export interface BasicRecognizeOpticalCharRecognitionImageRequest {
  /** base64 后的图片数据 */
  image?: string
}

export interface BasicRecognizeOpticalCharRecognitionImageResponse {
  /** 按区域识别，返回文本列表 */
  text_list: string[]
}

Internal.define({
  '/optical_char_recognition/v1/image/basic_recognize': {
    POST: 'basicRecognizeOpticalCharRecognitionImage',
  },
})
