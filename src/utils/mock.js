let mockData={
  getAuditTaskInitData(){
     return {
       "jz": [{
         "taskCode": "10001",
         "taskName": "辽宁经责审计",
         "taskType": 1,
         "beginTime": "201608",
         "endTIme": "201709",
         "provinceCode": "12400"
       }, {
         "taskCode": "10002",
         "taskName": "山西经责审计",
         "taskType": 1,
         "beginTime": "201703",
         "endTIme": "201803",
         "provinceCode": "12100"
       }],
         "sox": [{
         "taskCode": "10003",
         "taskName": "新疆sox审计",
         "taskType": 3,
         "beginTime": "201608",
         "endTIme": "201703",
         "provinceCode": "12200"
       }, {
         "taskCode": "10004",
         "taskName": "西藏sox审计",
         "taskType": 3,
         "beginTime": "201703",
         "endTIme": "201803",
         "provinceCode": "13100"
       }],
         "jy": [{
         "taskCode": "10005",
         "taskName": "北京经营业绩审计",
         "taskType": 2,
         "beginTime": "201709",
         "endTIme": "201806",
         "provinceCode": "10100"
       }]
     }
   },
  getDomainInfos(){
    return [{
      "discoverNum": 1,
      "clueNum": 2,
      "firDomain": "5",
      "firDomainName": "产品管理流程",
      "secDomainList": [{
        "secDomain": "5.4",
        "firDomain": "5",
        "secDomainName": "产品业务定价管理"
      }]
    }, {
      "discoverNum": 3,
      "clueNum": 2,
      "firDomain": "6",
      "firDomainName": "终端管理流程 ",
      "secDomainList": [{
        "secDomain": "6.5",
        "firDomain": "6",
        "secDomainName": "终端销售渠道和平台合作伙伴管理"
      }, {
        "secDomain": "6.3",
        "firDomain": "6",
        "secDomainName": "终端产品库建设和管理"
      },
        {
          "secDomain": "6.6",
          "firDomain": "6",
          "secDomainName": "平台合作伙伴管理"
        }, {
          "secDomain": "6.2",
          "firDomain": "6",
          "secDomainName": "建设管理"
        }
        ]
    }, {
      "discoverNum": 3,
      "clueNum": 1,
      "firDomain": "7",
      "firDomainName": "市场推广及销售流程",
      "secDomainList": [{
        "secDomain": "7.8",
        "firDomain": "7",
        "secDomainName": "渠道管理"
      }, {
        "secDomain": "7.10",
        "firDomain": "7",
        "secDomainName": "有价卡管理"
      }]
    }, {
      "discoverNum": 1,
      "clueNum": 0,
      "firDomain": "8",
      "firDomainName": "客户服务流程",
      "secDomainList": [{
        "secDomain": "8.9",
        "firDomain": "8",
        "secDomainName": "客户积分管理"
      }]
    }, {
      "discoverNum": 1,
      "clueNum": 3,
      "firDomain": "9",
      "firDomainName": "收入保障流程",
      "secDomainList": [{
        "secDomain": "9.10",
        "firDomain": "9",
        "secDomainName": "收入分析管理"
      }]
    }, {
      "discoverNum": 1,
      "clueNum": 0,
      "firDomain": "14",
      "firDomainName": "财务管理机制",
      "secDomainList": [{
        "secDomain": "14.13",
        "firDomain": "14",
        "secDomainName": "经营业绩管理"
      }]
    }]
  }
}

export {mockData}
