import Index from '@/components/Index'
import welcome from '@/views/welcome'
import Console from '@/views/Console'
import AuditPoint from '@/views/auditPointConfig/AuditPoint'
import AuditFinding from '@/views/AuditFinding'
import AuditTrail from '@/views/AuditTrail'
import Contexts from '@/views/Contexts/Context'


const SystemRouter = [ {
  path: '/',
  name: 'Index',
  component: Index,
  children:[
    {
      path: '/hp/welcome',  component: welcome
    },
    {
      path: '/hp/console',  component: Console
    },
    {
      path: '/hp/auditPoint',  component: AuditPoint  //审计点配置页面
    },
    {
      path: '/hp/auditFinding',  component: AuditFinding  //审计发现
    },
    {
      path: '/hp/auditTrail',  component: AuditTrail  //审计线索
    }
    ,
    {
      path: '/hp/contexts',  component: Contexts  //详情页
    }

  ],
  redirect:'/hp/console'
}
  ]

export {
  SystemRouter
}
