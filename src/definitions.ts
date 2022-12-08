export interface WechatSDKPlugin {
  /**
   * Tests the plugin.
   * @param options
   * value - a string value to test the plugin with
   */
  echo(options: { value: string }): Promise<any>;

  /**
   * Initiates a WeChat payment.
   * @param options
   * prepayId - the unique ID of the payment to initiate
   * packageValue - the value of the package
   * nonceStr - a nonce string used to prevent replay attacks
   * timeStamp - the timestamp of the payment
   * sign - the signature of the payment
   */
  pay(options: {
    prepayId: string;
    packageValue: string;
    nonceStr: string;
    timeStamp: string;
    sign: string;
  }): Promise<any>;

  /**
   * Determines whether WeChat is installed on the device.
   */
  isInstalled(): Promise<any>;

  /**
   * Shares text on WeChat.
   * @param options
   * text - the text to share
   * scene - the scene to share the text to (0 for a session, 1 for a timeline, 2 for a favorite)
   */
  shareText(options: { text: string; scene: string }): Promise<any>;

  /**
   * Shares a link on WeChat.
   * @param options
   * url - the URL of the link to share
   * title - the title of the link to share
   * description - the description of the link to share
   * thumb - the URL of the image to share, for example: http://xxx.com/test.png
   * scene - the scene to share the link to (0 for a session, 1 for a timeline, 2 for a favorite)
   */
  shareLink(options: {
    url: string;
    title: string;
    description: string;
    thumb?: string;
    scene: number;
  }): Promise<any>;

  /**
   * Shares an image on WeChat. Can be used with @capacitor/filesystem.
   * @param options
   * image - the name of the local image, if you have special needs, please modify the location or method to obtain the image
   * iOS defaults to searching in the documentDirectory
   * android defaults to searching in the /XXX/yourAppPackageName/cache directory for the image file
   * title - the title of the image to share
   * description - the description of the image to share
   * scene - the scene to share the image to (0 for a session, 1 for a timeline, 2 for a favorite)
   */
  shareImage(options: {
    image: string;
    title: string;
    description: string;
    scene: number;
  }): Promise<any>;

  /**
   * Shares a WeChat mini-program.
   * @param options
   * webpageUrl - the URL of the webpage to share
   * userName - the username of the WeChat mini-program to share
   * path - the path to the page in the WeChat mini-program to share
   * hdImageData - the URL of the image to share
   * withShareTicket - a boolean value indicating whether to use the share ticket when sharing to a group
   * miniProgramType - the type of WeChat mini-program to share (0 for release, 1 for test)
   * title - the title of the WeChat mini-program to share
   * description - the description of the WeChat mini-program to share
   * scene - the scene to share the mini-program to (0 for a session, 1 for a timeline, 2 for a favorite)
   */
  shareMiniProgram(options: {
    webpageUrl: string;
    userName: string;
    path: string;
    hdImageData: string;
    withShareTicket: boolean;
    miniProgramType: number;
    title: string;
    description: string;
    scene: number;
  }): Promise<any>;

  /**
   * Launches a WeChat mini-program.
   * @param options
   * userName - the username of the WeChat mini-program to launch
   * path - the path to the page in the WeChat mini-program to launch
   * miniProgramType - the type of WeChat mini-program to launch (0 for release, 1 for test)
   */
  launchMiniProgram(options: {
    userName: string;
    path: string;
    miniProgramType: number;
  }): Promise<any>;

  /**
   * Logs in to WeChat.
   * @param options
   * scope: the scope of the authentication request, which determines the permissions that the user will be asked to grant
   * state: a string value used to maintain state between the request and the callback, which can be used for security purposes or for providing a return URL or other information that the authentication provider may need to provide a seamless authentication experience.
   */
  sendAuthRequest(options: { scope: string; state: string }): Promise<any>;

  /**
   * Launches a WeChat customer service chat.
   * @param options
   * corpId - the ID of the enterprise
   * url - the customer service URL
   */
  wxOpenCustomerServiceChat(options: {
    corpId: string;
    url: string;
  }): Promise<any>;
}
