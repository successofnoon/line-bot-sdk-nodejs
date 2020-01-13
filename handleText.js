'use strict';

async function handleText ( message, replyToken )
{
  switch ( message.text )
  {
    case 'flex1':
      return handleFlex(
        replyToken,
        [ {
            type: 'flex', altText: 'flex Message1', contents: {
              type: 'carousel',
              contents: [ {
                  type: 'bubble',
                  direction: 'ltr',
                  header: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'none',
                    margin: 'none',
                    contents: [ {
                      type: 'text',
                      text: 'อัตราแลกเปลี่ยน',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold',
                      color: '#006187'
                    } ]
                  },
                  hero: {
                    type: 'image',
                    url: 'https://fsexchanger998477843.files.wordpress.com/2019/10/pp.jpg',
                    align: 'center',
                    gravity: 'center',
                    size: 'full',
                    aspectRatio: '1.91:1',
                    aspectMode: 'cover'
                  },
                  body: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'lg',
                    contents: [ {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาที่รับซื้อ',
                          data: 'data2'
                        },
                        color: '#2B87BB',
                        style: 'primary',
                        gravity: 'center'
                      },
                      {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาขาย',
                          data: 'data3'
                        },
                        color: '#0B72AC',
                        style: 'primary',
                        gravity: 'center'
                      }
                    ]
                  },
                  footer: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'www.fs-exchanger.com',
                      size: 'sm',
                      align: 'center',
                      color: '#0B72AC',
                      action: {
                        type: 'uri',
                        label: 'visit website',
                        uri: 'line://app/1609045774-d28Z5Mbo'
                      }
                    } ]
                  }
                },
                {
                  type: 'bubble',
                  direction: 'ltr',
                  header: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'อัตราแลกเปลี่ยน',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold',
                      color: '#415F74'
                    } ]
                  },
                  hero: {
                    type: 'image',
                    url: 'https://fsexchanger998477843.files.wordpress.com/2019/10/wm-e1573350471822.jpg',
                    align: 'center',
                    gravity: 'center',
                    size: 'full',
                    aspectRatio: '1.91:1',
                    aspectMode: 'cover'
                  },
                  body: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'lg',
                    contents: [ {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาที่รับซื้อ',
                          data: 'data4'
                        },
                        color: '#07487D',
                        height: 'md',
                        style: 'primary',
                        gravity: 'center'
                      },
                      {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาขาย',
                          data: 'data5'
                        },
                        color: '#07487D',
                        style: 'primary',
                        gravity: 'center'
                      }
                    ]
                  },
                  footer: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'www.fs-exchanger.com',
                      align: 'center',
                      gravity: 'center',
                      color: '#0D4B75',
                      action: {
                        type: 'uri',
                        label: 'visit website',
                        uri: 'line://app/1609045774-d28Z5Mbo'
                      }
                    } ]
                  }
                },
                {
                  type: 'bubble',
                  direction: 'ltr',
                  header: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'อัตราแลกเปลี่ยน',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold',
                      color: '#0B8710'
                    } ]
                  },
                  hero: {
                    type: 'image',
                    url: 'https://fsexchanger998477843.files.wordpress.com/2019/11/ntl.jpg',
                    align: 'center',
                    gravity: 'center',
                    size: 'full',
                    aspectRatio: '1.91:1',
                    aspectMode: 'cover'
                  },
                  body: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'lg',
                    contents: [ {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาที่รับซื้อ',
                          data: 'data6'
                        },
                        color: '#0B8710',
                        style: 'primary',
                        gravity: 'center'
                      },
                      {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาขาย',
                          data: 'data7'
                        },
                        color: '#0B8710',
                        height: 'md',
                        style: 'primary',
                        gravity: 'center'
                      }
                    ]
                  },
                  footer: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'www.fs-exchanger.com',
                      align: 'center',
                      color: '#0B8710',
                      action: {
                        type: 'uri',
                        label: 'visit website',
                        uri: 'line://app/1609045774-d28Z5Mbo'
                      }
                    } ]
                  }
                },
                {
                  type: 'bubble',
                  direction: 'ltr',
                  header: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'อัตราแลกเปลี่ยน',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold',
                      color: '#923F48'
                    } ]
                  },
                  hero: {
                    type: 'image',
                    url: 'https://fsexchanger998477843.files.wordpress.com/2019/11/pm.jpg',
                    align: 'center',
                    gravity: 'center',
                    size: 'full',
                    aspectRatio: '1.91:1',
                    aspectMode: 'cover'
                  },
                  body: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'lg',
                    contents: [ {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาที่รับซื้อ',
                          data: 'data8'
                        },
                        color: '#AE0F0F',
                        style: 'primary',
                        gravity: 'center'
                      },
                      {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาขาย',
                          data: 'data9'
                        },
                        color: '#AE0F0F',
                        style: 'primary',
                        gravity: 'center'
                      }
                    ]
                  },
                  footer: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'www.fs-exchanger.com',
                      align: 'center',
                      gravity: 'top',
                      color: '#AE0F0F',
                      action: {
                        type: 'uri',
                        label: 'visit website',
                        uri: 'line://app/1609045774-d28Z5Mbo'
                      }
                    } ]
                  }
                },
                {
                  type: 'bubble',
                  direction: 'ltr',
                  header: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'อัตราแลกเปลี่ยน',
                      margin: 'none',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold',
                      color: '#6E3269',
                      wrap: false
                    } ]
                  },
                  hero: {
                    type: 'image',
                    url: 'https://fsexchanger998477843.files.wordpress.com/2019/10/skrll-1.jpg',
                    align: 'center',
                    gravity: 'center',
                    size: 'full',
                    aspectRatio: '1.91:1',
                    aspectMode: 'cover'
                  },
                  body: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'lg',
                    contents: [ {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาทรับซื้อ',
                          data: 'data10'
                        },
                        color: '#6E3269',
                        style: 'primary',
                        gravity: 'center'
                      },
                      {
                        type: 'button',
                        action: {
                          type: 'postback',
                          label: 'ดูราคาขาย',
                          data: 'data11'
                        },
                        color: '#6E3269',
                        style: 'primary',
                        gravity: 'center'
                      }
                    ]
                  },
                  footer: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'xxl',
                    contents: [ {
                      type: 'text',
                      text: 'www.fs-exchanger.com',
                      size: 'md',
                      align: 'center',
                      gravity: 'center',
                      color: '#6E3269',
                      action: {
                        type: 'uri',
                        label: 'visitSite',
                        uri: 'line://app/1609045774-d28Z5Mbo'
                      }
                    } ]
                  }
                },
                {
                  type: 'bubble',
                  direction: 'ltr',
                  header: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'text',
                      text: 'เครื่องคิดเลข',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold'
                    } ]
                  },
                  hero: {
                    type: 'image',
                    url: 'https://fsexchanger998477843.files.wordpress.com/2019/11/col1.jpg',
                    align: 'center',
                    gravity: 'center',
                    size: 'full',
                    aspectRatio: '1.91:1',
                    aspectMode: 'cover'
                  },
                  body: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'lg',
                    margin: 'none',
                    contents: [ {
                        type: 'button',
                        action: {
                          type: 'uri',
                          label: 'คำนวณอัตราแลกเปลี่ยน',
                          uri: 'line://app/1609045774-p2vKD9oj'
                        },
                        color: '#219874',
                        style: 'primary',
                        gravity: 'center'
                      },
                      {
                        type: 'button',
                        action: {
                          type: 'uri',
                          label: 'คำนวณค่าทำเนียม',
                          uri: 'line://app/1609045774-v1GkX9Qw'
                        },
                        color: '#219874',
                        style: 'primary'
                      }
                    ]
                  },
                  footer: {
                    type: 'box',
                    layout: 'vertical',
                    contents: [ {
                      type: 'button',
                      action: {
                        type: 'postback',
                        label: 'กลับเมนูหลัก',
                        data: 'data1'
                      },
                      color: '#EAECEC',
                      style: 'secondary'
                    } ]
                  }
                }
              ]
            }
          } ]
      );
    case 'flex2':
      return handleFlex(
        replyToken,
        [{
          type: 'flex', altText: 'flex Messge2', contents: {
            type: 'carousel', contents: [ {
              type: 'bubble',
                size: 'mega',
                header:
                  { type: 'box',
                    layout: 'vertical',
                    contents:
                    [ { type: 'spacer', size: 'md' },
                      { type: 'text',
                        text: 'ราคารับซื้อ',
                        flex: 0,
                        size: 'lg',
                        color: '#666666',
                        weight: 'bold',
                        position: 'relative',
                        align: 'center',
                        gravity: 'center' },
                      { type: 'text',
                        text: 'PayPal - ดอลลาร์สหรัฐฯ',
                        flex: 0,
                        size: 'md',
                        color: '#666666',
                        position: 'relative',
                        align: 'center',
                        gravity: 'center' } ],
                    position: 'relative',
                    flex: 0,
                    spacing: 'md',
                    width: '100%',
                    backgroundColor: '#f9f9f9',
                    cornerRadius: '7px',
                    paddingAll: 'md' },
                body:
                  { type: 'box',
                    layout: 'vertical',
                    contents:
                    [ { type: 'spacer', size: 'sm' },
                      { type: 'box',
                        layout: 'baseline',
                        margin: 'md',
                        contents:
                          [ { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png' },
                            { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png' },
                            { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png' },
                            { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png' },
                            { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png' },
                            { type: 'text',
                              text: '4.0',
                              size: 'sm',
                              color: '#999999',
                              margin: 'md',
                              flex: 0 } ] },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'md',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: 'จำนวน',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'bold' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: 'ราคา',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'bold' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$100 - $500',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 25.00',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$501 - $1,000',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 25.25',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$1,001 - $1,500',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 25.50',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$1,501 - $2,000',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 25.75',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$2,001 - $10,000',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 26.00',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'spacer', size: 'md' } ],
                    position: 'relative',
                    flex: 0,
                    spacing: 'md',
                    width: '100%',
                    backgroundColor: '#ffffff',
                    cornerRadius: '7px',
                    paddingTop: 'md' },
                footer:
                  { type: 'box',
                    layout: 'vertical',
                    spacing: 'md',
                    contents:
                    [ { type: 'box',
                        layout: 'vertical',
                        contents:
                          [ { type: 'button',
                              style: 'primary',
                              height: 'md',
                              action: { type: 'uri', label: 'แจ้งโอน', uri: 'https://linecorp.com' },
                              position: 'relative',
                              color: '#004d85',
                              gravity: 'center',
                              margin: 'md' } ],
                        position: 'relative',
                        flex: 0,
                        spacing: 'md',
                        paddingStart: 'md',
                        paddingEnd: 'md' },
                      { type: 'box',
                        layout: 'vertical',
                        contents:
                          [ { type: 'button',
                              style: 'secondary',
                              height: 'md',
                              action:
                              { type: 'uri',
                                label: 'เครื่องคิดเลข',
                                uri: 'https://linecorp.com' },
                              position: 'relative',
                              color: '#aad3f9',
                              gravity: 'center',
                              margin: 'md' } ],
                        position: 'relative',
                        flex: 0,
                        spacing: 'md',
                        paddingStart: 'md',
                        paddingEnd: 'md' },
                      { type: 'spacer', size: 'md' } ],
                    flex: 0,
                    position: 'relative',
                    width: '100%',
                    backgroundColor: '#f9f9f9',
                    paddingAll: 'md' },
                styles: { body: { backgroundColor: '#ffffff' } } },
              { type: 'bubble',
                size: 'mega',
                header:
                  { type: 'box',
                    layout: 'vertical',
                    contents:
                    [ { type: 'spacer', size: 'md' },
                      { type: 'text',
                        text: 'ราคาขาย',
                        flex: 0,
                        size: 'lg',
                        color: '#666666',
                        weight: 'bold',
                        position: 'relative',
                        align: 'center',
                        gravity: 'center' },
                      { type: 'text',
                        text: 'PayPal - ดอลลาร์สหรัฐฯ',
                        flex: 0,
                        size: 'md',
                        color: '#666666',
                        position: 'relative',
                        align: 'center',
                        gravity: 'center' } ],
                    position: 'relative',
                    flex: 0,
                    spacing: 'md',
                    width: '100%',
                    backgroundColor: '#f9f9f9',
                    cornerRadius: '7px',
                    paddingAll: 'md' },
                body:
                  { type: 'box',
                    layout: 'vertical',
                    contents:
                    [ { type: 'spacer', size: 'sm' },
                      { type: 'box',
                        layout: 'baseline',
                        margin: 'md',
                        contents:
                          [ { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png' },
                            { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png' },
                            { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png' },
                            { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png' },
                            { type: 'icon',
                              size: 'sm',
                              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png' },
                            { type: 'text',
                              text: '4.0',
                              size: 'sm',
                              color: '#999999',
                              margin: 'md',
                              flex: 0 } ] },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'md',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: 'จำนวน',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'bold' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: 'ราคา',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'bold' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$100 - $500',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 25.00',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$501 - $1,000',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 25.25',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$1,001 - $1,500',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 25.50',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$1,501 - $2,000',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 25.75',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'box',
                        layout: 'horizontal',
                        margin: 'sm',
                        spacing: 'sm',
                        contents:
                          [ { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '$2,001 - $10,000',
                                  color: '#ffffff',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  position: 'relative',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 5,
                              backgroundColor: '#004a85',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' },
                            { type: 'box',
                              layout: 'vertical',
                              spacing: 'sm',
                              contents:
                              [ { type: 'text',
                                  text: '฿ 26.00',
                                  color: '#666666',
                                  size: 'lg',
                                  flex: 0,
                                  align: 'center',
                                  gravity: 'center',
                                  weight: 'regular' } ],
                              position: 'relative',
                              flex: 3,
                              backgroundColor: '#f9f9f9',
                              borderWidth: '1px',
                              borderColor: '#004c85',
                              cornerRadius: '5px',
                              paddingAll: 'lg' } ],
                        position: 'relative',
                        flex: 0 },
                      { type: 'spacer', size: 'md' } ],
                    position: 'relative',
                    flex: 0,
                    spacing: 'md',
                    width: '100%',
                    backgroundColor: '#ffffff',
                    cornerRadius: '7px',
                    paddingTop: 'md' },
                footer:
                  { type: 'box',
                    layout: 'vertical',
                    spacing: 'md',
                    contents:
                    [ { type: 'box',
                        layout: 'vertical',
                        contents:
                          [ { type: 'button',
                              style: 'primary',
                              height: 'md',
                              action: { type: 'uri', label: 'แจ้งโอน', uri: 'https://linecorp.com' },
                              position: 'relative',
                              color: '#004d85',
                              gravity: 'center',
                              margin: 'md' } ],
                        position: 'relative',
                        flex: 0,
                        spacing: 'md',
                        paddingStart: 'md',
                        paddingEnd: 'md' },
                      { type: 'box',
                        layout: 'vertical',
                        contents:
                          [ { type: 'button',
                              style: 'secondary',
                              height: 'md',
                              action:
                              { type: 'uri',
                                label: 'เครื่องคิดเลข',
                                uri: 'https://linecorp.com' },
                              position: 'relative',
                              color: '#aad3f9',
                              gravity: 'center',
                              margin: 'md' } ],
                        position: 'relative',
                        flex: 0,
                        spacing: 'md',
                        paddingStart: 'md',
                        paddingEnd: 'md' },
                      { type: 'spacer', size: 'md' } ],
                    flex: 0,
                    position: 'relative',
                    width: '100%',
                    backgroundColor: '#f9f9f9',
                    paddingAll: 'md' },
                styles: { body: { backgroundColor: '#ffffff' } } } ]
          }
        }]
      );
    case 'flex3':
      return handleFlex(
        replyToken,
        [ {
          type: 'flex',
          altText: 'flex Messge3',
          contents: {
            type: 'carousel',
            contents: [ {
                type: 'bubble',
                size: 'mega',
                header: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [ {
                      type: 'spacer',
                      size: 'md'
                    },
                    {
                      type: 'text',
                      text: 'ราคารับซื้อ',
                      flex: 0,
                      size: 'lg',
                      color: '#666666',
                      weight: 'bold',
                      position: 'relative',
                      align: 'center',
                      gravity: 'center'
                    },
                    {
                      type: 'text',
                      text: 'PayPal - ดอลลาร์สหรัฐฯ',
                      flex: 0,
                      size: 'md',
                      color: '#666666',
                      position: 'relative',
                      align: 'center',
                      gravity: 'center'
                    }
                  ],
                  position: 'relative',
                  flex: 0,
                  spacing: 'md',
                  width: '100%',
                  backgroundColor: '#f9f9f9',
                  cornerRadius: '7px',
                  paddingAll: 'md'
                },
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [ {
                      type: 'spacer',
                      size: 'sm'
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      margin: 'md',
                      contents: [ {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png'
                        },
                        {
                          type: 'text',
                          text: '4.0',
                          size: 'sm',
                          color: '#999999',
                          margin: 'md',
                          flex: 0
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'md',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: 'จำนวน',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'bold'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: 'ราคา',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'bold'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$100 - $500',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 25.00',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$501 - $1,000',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 25.25',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$1,001 - $1,500',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 25.50',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$1,501 - $2,000',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 25.75',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$2,001 - $10,000',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 26.00',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'spacer',
                      size: 'md'
                    }
                  ],
                  position: 'relative',
                  flex: 0,
                  spacing: 'md',
                  width: '100%',
                  backgroundColor: '#ffffff',
                  cornerRadius: '7px',
                  paddingTop: 'md'
                },
                footer: {
                  type: 'box',
                  layout: 'vertical',
                  spacing: 'md',
                  contents: [ {
                      type: 'box',
                      layout: 'vertical',
                      contents: [ {
                        type: 'button',
                        style: 'primary',
                        height: 'md',
                        action: {
                          type: 'uri',
                          label: 'แจ้งโอน',
                          uri: 'https://linecorp.com'
                        },
                        position: 'relative',
                        color: '#004d85',
                        gravity: 'center',
                        margin: 'md'
                      } ],
                      position: 'relative',
                      flex: 0,
                      spacing: 'md',
                      paddingStart: 'md',
                      paddingEnd: 'md'
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [ {
                        type: 'button',
                        style: 'secondary',
                        height: 'md',
                        action: {
                          type: 'uri',
                          label: 'เครื่องคิดเลข',
                          uri: 'https://linecorp.com'
                        },
                        position: 'relative',
                        color: '#aad3f9',
                        gravity: 'center',
                        margin: 'md'
                      } ],
                      position: 'relative',
                      flex: 0,
                      spacing: 'md',
                      paddingStart: 'md',
                      paddingEnd: 'md'
                    },
                    {
                      type: 'spacer',
                      size: 'md'
                    }
                  ],
                  flex: 0,
                  position: 'relative',
                  width: '100%',
                  backgroundColor: '#f9f9f9',
                  paddingAll: 'md'
                },
                styles: {
                  body: {
                    backgroundColor: '#ffffff'
                  }
                }
              },
              {
                type: 'bubble',
                size: 'mega',
                header: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [ {
                      type: 'spacer',
                      size: 'md'
                    },
                    {
                      type: 'text',
                      text: 'ราคาขาย',
                      flex: 0,
                      size: 'lg',
                      color: '#666666',
                      weight: 'bold',
                      position: 'relative',
                      align: 'center',
                      gravity: 'center'
                    },
                    {
                      type: 'text',
                      text: 'PayPal - ดอลลาร์สหรัฐฯ',
                      flex: 0,
                      size: 'md',
                      color: '#666666',
                      position: 'relative',
                      align: 'center',
                      gravity: 'center'
                    }
                  ],
                  position: 'relative',
                  flex: 0,
                  spacing: 'md',
                  width: '100%',
                  backgroundColor: '#f9f9f9',
                  cornerRadius: '7px',
                  paddingAll: 'md'
                },
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [ {
                      type: 'spacer',
                      size: 'sm'
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      margin: 'md',
                      contents: [ {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png'
                        },
                        {
                          type: 'icon',
                          size: 'sm',
                          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png'
                        },
                        {
                          type: 'text',
                          text: '4.0',
                          size: 'sm',
                          color: '#999999',
                          margin: 'md',
                          flex: 0
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'md',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: 'จำนวน',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'bold'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: 'ราคา',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'bold'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$100 - $500',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 25.00',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$501 - $1,000',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 25.25',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$1,001 - $1,500',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 25.50',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$1,501 - $2,000',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 25.75',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'box',
                      layout: 'horizontal',
                      margin: 'sm',
                      spacing: 'sm',
                      contents: [ {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '$2,001 - $10,000',
                            color: '#ffffff',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            position: 'relative',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 5,
                          backgroundColor: '#004a85',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        },
                        {
                          type: 'box',
                          layout: 'vertical',
                          spacing: 'sm',
                          contents: [ {
                            type: 'text',
                            text: '฿ 26.00',
                            color: '#666666',
                            size: 'lg',
                            flex: 0,
                            align: 'center',
                            gravity: 'center',
                            weight: 'regular'
                          } ],
                          position: 'relative',
                          flex: 3,
                          backgroundColor: '#f9f9f9',
                          borderWidth: '1px',
                          borderColor: '#004c85',
                          cornerRadius: '5px',
                          paddingAll: 'lg'
                        }
                      ],
                      position: 'relative',
                      flex: 0
                    },
                    {
                      type: 'spacer',
                      size: 'md'
                    }
                  ],
                  position: 'relative',
                  flex: 0,
                  spacing: 'md',
                  width: '100%',
                  backgroundColor: '#ffffff',
                  cornerRadius: '7px',
                  paddingTop: 'md'
                },
                footer: {
                  type: 'box',
                  layout: 'vertical',
                  spacing: 'md',
                  contents: [ {
                      type: 'box',
                      layout: 'vertical',
                      contents: [ {
                        type: 'button',
                        style: 'primary',
                        height: 'md',
                        action: {
                          type: 'uri',
                          label: 'แจ้งโอน',
                          uri: 'https://linecorp.com'
                        },
                        position: 'relative',
                        color: '#004d85',
                        gravity: 'center',
                        margin: 'md'
                      } ],
                      position: 'relative',
                      flex: 0,
                      spacing: 'md',
                      paddingStart: 'md',
                      paddingEnd: 'md'
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [ {
                        type: 'button',
                        style: 'secondary',
                        height: 'md',
                        action: {
                          type: 'uri',
                          label: 'เครื่องคิดเลข',
                          uri: 'https://linecorp.com'
                        },
                        position: 'relative',
                        color: '#aad3f9',
                        gravity: 'center',
                        margin: 'md'
                      } ],
                      position: 'relative',
                      flex: 0,
                      spacing: 'md',
                      paddingStart: 'md',
                      paddingEnd: 'md'
                    },
                    {
                      type: 'spacer',
                      size: 'md'
                    }
                  ],
                  flex: 0,
                  position: 'relative',
                  width: '100%',
                  backgroundColor: '#f9f9f9',
                  paddingAll: 'md'
                },
                styles: {
                  body: {
                    backgroundColor: '#ffffff'
                  }
                }
              }
            ]
          }
        } ]
      );
    default:
      console.log('text', `${replyToken}:${message.text}`);
      replyMessage(replyToken, message.text);
  }
}

const _handleText = handleText();
export { _handleText as handleText };
