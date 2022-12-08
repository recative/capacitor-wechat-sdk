# @recative/capacitor-wechat-sdk

To configure the `@recative/capacitor-wechat-sdk`, the capacitor.config.ts or capacitor.config.json file needs to be updated to include the following parameters:

- `mchid`: The merchant id, which can be ignored if the WeChat payment function is not needed.
- `wechatAppId`: The app ID obtained from the WeChat Open Platform official website.
- `wechatUniversalLink`: The UniversalLink, which is only applicable to iOS.

```TypeScript
const config: CapacitorConfig = {
  mchid: '123456',
  wechatAppId: 'wxd***c1fdsfsfs7f4f***',
  wechatUniversalLink: 'https://com.***.***/'
};
```

To configure capacitor-wechat-sdk on iOS, follow these steps:

Refer to the [WeChat official documentation]((https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)) on configuring the UniversalLink and URL scheme and LSApplicationQueriesSchemes.
In your project file, select Build Setting and add `-ObjC -all_load` to `Other Linker Flags`.
Modify app/appDelegate.swift and add or modify the following callback handling:
 
```
 func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {    
      return WechatSDKApplicationDelegate.sharedInstance.application(application,continue: userActivity, restorationHandler: restorationHandler)    
      // return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)    
}
```   

To configure @recative/capacitor-wechat-sdk on Android, follow these steps:

Android also requires modifying the build.gradle file under capacitor-wechat-sdk/android, as indicated by the red markings in the image below:

<img width="674" alt="image" src="https://user-images.githubusercontent.com/8285776/153450222-5326f98c-d225-45f2-b609-dcfaeecacd50.png">

Android 11 compatibility: refer to the [WeChat official documentation](https://open.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11600155960jI9EY).

## Install

```bash
npm install @recative/capacitor-wechat-sdk 
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`pay(...)`](#pay)
* [`isInstalled()`](#isinstalled)
* [`shareText(...)`](#sharetext)
* [`shareLink(...)`](#sharelink)
* [`shareImage(...)`](#shareimage)
* [`shareMiniProgram(...)`](#shareminiprogram)
* [`launchMiniProgram(...)`](#launchminiprogram)
* [`sendAuthRequest(...)`](#sendauthrequest)
* [`wxOpenCustomerServiceChat(...)`](#wxopencustomerservicechat)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<any>
```

Tests the plugin.

| Param         | Type                            | Description                                    |
| ------------- | ------------------------------- | ---------------------------------------------- |
| **`options`** | <code>{ value: string; }</code> | value - a string value to test the plugin with |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### pay(...)

```typescript
pay(options: { prepayId: string; packageValue: string; nonceStr: string; timeStamp: string; sign: string; }) => Promise<any>
```

Initiates a WeChat payment.

| Param         | Type                                                                                                        | Description                                                                                                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ prepayId: string; packageValue: string; nonceStr: string; timeStamp: string; sign: string; }</code> | prepayId - the unique ID of the payment to initiate packageValue - the value of the package nonceStr - a nonce string used to prevent replay attacks timeStamp - the timestamp of the payment sign - the signature of the payment |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isInstalled()

```typescript
isInstalled() => Promise<any>
```

Determines whether WeChat is installed on the device.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### shareText(...)

```typescript
shareText(options: { text: string; scene: string; }) => Promise<any>
```

Shares text on WeChat.

| Param         | Type                                          | Description                                                                                                           |
| ------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ text: string; scene: string; }</code> | text - the text to share scene - the scene to share the text to (0 for a session, 1 for a timeline, 2 for a favorite) |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### shareLink(...)

```typescript
shareLink(options: { url: string; title: string; description: string; thumb?: string; scene: number; }) => Promise<any>
```

Shares a link on WeChat.

| Param         | Type                                                                                             | Description                                                                                                                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ url: string; title: string; description: string; thumb?: string; scene: number; }</code> | url - the URL of the link to share title - the title of the link to share description - the description of the link to share thumb - the URL of the image to share, for example: http://xxx.com/test.png scene - the scene to share the link to (0 for a session, 1 for a timeline, 2 for a favorite) |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### shareImage(...)

```typescript
shareImage(options: { image: string; title: string; description: string; scene: number; }) => Promise<any>
```

Shares an image on WeChat. Can be used with @capacitor/filesystem.

| Param         | Type                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ image: string; title: string; description: string; scene: number; }</code> | image - the name of the local image, if you have special needs, please modify the location or method to obtain the image iOS defaults to searching in the documentDirectory android defaults to searching in the /XXX/yourAppPackageName/cache directory for the image file title - the title of the image to share description - the description of the image to share scene - the scene to share the image to (0 for a session, 1 for a timeline, 2 for a favorite) |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### shareMiniProgram(...)

```typescript
shareMiniProgram(options: { webpageUrl: string; userName: string; path: string; hdImageData: string; withShareTicket: boolean; miniProgramType: number; title: string; description: string; scene: number; }) => Promise<any>
```

Shares a WeChat mini-program.

| Param         | Type                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ webpageUrl: string; userName: string; path: string; hdImageData: string; withShareTicket: boolean; miniProgramType: number; title: string; description: string; scene: number; }</code> | webpageUrl - the URL of the webpage to share userName - the username of the WeChat mini-program to share path - the path to the page in the WeChat mini-program to share hdImageData - the URL of the image to share withShareTicket - a boolean value indicating whether to use the share ticket when sharing to a group miniProgramType - the type of WeChat mini-program to share (0 for release, 1 for test) title - the title of the WeChat mini-program to share description - the description of the WeChat mini-program to share scene - the scene to share the mini-program to (0 for a session, 1 for a timeline, 2 for a favorite) |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### launchMiniProgram(...)

```typescript
launchMiniProgram(options: { userName: string; path: string; miniProgramType: number; }) => Promise<any>
```

Launches a WeChat mini-program.

| Param         | Type                                                                      | Description                                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ userName: string; path: string; miniProgramType: number; }</code> | userName - the username of the WeChat mini-program to launch path - the path to the page in the WeChat mini-program to launch miniProgramType - the type of WeChat mini-program to launch (0 for release, 1 for test) |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### sendAuthRequest(...)

```typescript
sendAuthRequest(options: { scope: string; state: string; }) => Promise<any>
```

Logs in to WeChat.

| Param         | Type                                           | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ scope: string; state: string; }</code> | scope: the scope of the authentication request, which determines the permissions that the user will be asked to grant state: a string value used to maintain state between the request and the callback, which can be used for security purposes or for providing a return URL or other information that the authentication provider may need to provide a seamless authentication experience. |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### wxOpenCustomerServiceChat(...)

```typescript
wxOpenCustomerServiceChat(options: { corpId: string; url: string; }) => Promise<any>
```

Launches a WeChat customer service chat.

| Param         | Type                                          | Description                                                      |
| ------------- | --------------------------------------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ corpId: string; url: string; }</code> | corpId - the ID of the enterprise url - the customer service URL |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------

</docgen-api>
