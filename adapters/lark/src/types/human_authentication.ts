import { Internal } from '../internal'

declare module '../internal' {
  interface Internal {
    /**
     * 录入身份信息
     * @see https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/human_authentication-v1/identity/create
     */
    createHumanAuthenticationIdentity(body: CreateHumanAuthenticationIdentityRequest, query?: CreateHumanAuthenticationIdentityQuery): Promise<CreateHumanAuthenticationIdentityResponse>
  }
}

export interface CreateHumanAuthenticationIdentityRequest {
  /** 姓名 */
  identity_name: string
  /** 身份证号 */
  identity_code: string
  /** 手机号 */
  mobile?: string
}

export interface CreateHumanAuthenticationIdentityQuery {
  /** 用户的唯一标识（使用的ID类型见下一参数描述，不同ID类型的区别和获取，参考文档：[如何获得 User ID、Open ID 和 Union ID？](/ssl:ttdoc/home/user-identity-introduction/how-to-get)） */
  user_id: string
  /** 用户ID类型 open_id/user_id/union_id */
  user_id_type?: 'open_id' | 'user_id' | 'union_id'
}

export interface CreateHumanAuthenticationIdentityResponse {
  /** uid of user bind authentication */
  verify_uid: string
}

Internal.define({
  '/human_authentication/v1/identities': {
    POST: 'createHumanAuthenticationIdentity',
  },
})
