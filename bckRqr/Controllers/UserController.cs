using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerSideApi.Controllers
{
    [RoutePrefix("api/User")]

    public class UserController : ApiController
    {
        
        public void Get()
        {
            OraTest testCon = new OraTest();
            testCon.Connect();
        }

    }
}
