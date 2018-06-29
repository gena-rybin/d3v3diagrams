import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  example1json = {
    'name': 'Campaign1',
    'children': [
      {
        'name': 'Advertiser1',
        'children': [
          {
            'name': 'mediaOwner1',
            'children': [
              {
                'name': 'order1',
                'children': [
                  {
                    'name': 'Bookings',
                    'children': [
                      {
                        'name': 'booking1',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      },
                      {
                        'name': 'booking2',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Payment Conditions',
                    'children': [
                      {
                        'name': 'PC1',
                        'children': [
                          {
                            'name': 'attribute1:value1'
                          },
                          {
                            'name': 'attribute2:value2'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Allocation: 235 EUR'
                  }
                ]
              },
              {
                'name': 'order2',
                'children': [
                  {
                    'name': 'Bookings',
                    'children': [
                      {
                        'name': 'booking3',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      },
                      {
                        'name': 'booking4',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Payment Conditions',
                    'children': [
                      {
                        'name': 'PC1',
                        'children': [
                          {
                            'name': 'attribute1:value1'
                          },
                          {
                            'name': 'attribute2:value2'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Allocation: 235 EUR'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'name': 'Agency1',
        'children': [
          {
            'name': 'mediaOwner2',
            'children': [
              {
                'name': 'order3',
                'children': [
                  {
                    'name': 'Bookings',
                    'children': [
                      {
                        'name': 'booking1',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      },
                      {
                        'name': 'booking2',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Payment Conditions',
                    'children': [
                      {
                        'name': 'PC1',
                        'children': [
                          {
                            'name': 'attribute1:value1'
                          },
                          {
                            'name': 'attribute2:value2'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Allocation: 235 EUR'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'name': 'Agency2',
        'children': [
          {
            'name': 'mediaOwner3',
            'children': [
              {
                'name': 'order4',
                'children': [
                  {
                    'name': 'Bookings',
                    'children': [
                      {
                        'name': 'booking1',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      },
                      {
                        'name': 'booking2',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Payment Conditions',
                    'children': [
                      {
                        'name': 'PC1',
                        'children': [
                          {
                            'name': 'attribute1:value1'
                          },
                          {
                            'name': 'attribute2:value2'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Allocation: 235 EUR'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'name': 'Agency3',
        'children': [
          {
            'name': 'mediaOwner4',
            'children': [
              {
                'name': 'order5',
                'children': [
                  {
                    'name': 'Bookings',
                    'children': [
                      {
                        'name': 'booking1',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      },
                      {
                        'name': 'booking2',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Payment Conditions',
                    'children': [
                      {
                        'name': 'PC1',
                        'children': [
                          {
                            'name': 'attribute1:value1'
                          },
                          {
                            'name': 'attribute2:value2'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Allocation: 235 EUR'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'name': 'Agency4',
        'children': [
          {
            'name': 'mediaOwner5',
            'children': [
              {
                'name': 'order6',
                'children': [
                  {
                    'name': 'Bookings',
                    'children': [
                      {
                        'name': 'booking1',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      },
                      {
                        'name': 'booking2',
                        'children': [
                          {
                            'name': 'Submedia:None'
                          },
                          {
                            'name': 'BuyType:Direct'
                          },
                          {
                            'name': 'Date:01.01.2018-30.01.2018'
                          },
                          {
                            'name': 'Cost:3000'
                          },
                          {
                            'name': 'Currency:GBP'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Payment Conditions',
                    'children': [
                      {
                        'name': 'PC1',
                        'children': [
                          {
                            'name': 'attribute1:value1'
                          },
                          {
                            'name': 'attribute2:value2'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'name': 'Allocation: 235 EUR'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  example2json = {
    'nodes':[
      {'name':'Advertiser1'},
      {'name':'Agency1'},
      {'name':'Agency2'},
      {'name':'Agency3'},
      {'name':'MediaOwner1'},
      {'name':'MediaOwner2'},
      {'name':'MediaOwner3'},
      {'name':'MediaOwner4'}
    ],
    'links':[
      {'source':'Advertiser1','target':'Agency1','value':1},
      {'source':'Advertiser1','target':'Agency2','value':1},
      {'source':'Agency2','target':'Agency3','value':1},
      {'source':'Agency1','target':'MediaOwner1','value':1},
      {'source':'Agency1','target':'Agency3','value':1},
      {'source':'Agency2','target':'MediaOwner2','value':1},
      {'source':'Agency3','target':'MediaOwner3','value':1},
      {'source':'Agency3','target':'MediaOwner4','value':1}
    ]};
}
