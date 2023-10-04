// src/auth/wechat.controller.ts
import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('auth/wechat')
export class WeChatController {
  constructor(private configService: ConfigService) {}

  @Get('login')
  @Redirect()
  login() {
    const appId = this.configService.get('WECHAT_APP_ID');
    const redirectUri = encodeURIComponent(
      this.configService.get('WECHAT_REDIRECT_URI'),
    );
    const url = `https://open.weixin.qq.com/connect/qrconnect?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect`;
    return { url };
  }

  @Get('callback')
  async callback(@Query('code') code: string) {
    // 使用授权码从微信服务器获取访问令牌
    // 获取用户的基本信息
    // ...
  }
}
