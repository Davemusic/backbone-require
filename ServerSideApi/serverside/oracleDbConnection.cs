using System;
using System.Data.OracleClient;
using System.Configuration;
using System.Runtime.Remoting.Messaging;
using System.Web.Http;


public class OraTest
{
    OracleConnection con;
    public void Connect()
    {
        con = new OracleConnection();
        con.ConnectionString = ConfigurationManager.ConnectionStrings["sourceDbConnection"].ConnectionString;
        con.Open();
        Console.WriteLine("Connected to Oracle" + con.ServerVersion);
    }

    public void Close()
    {
        con.Close();
        con.Dispose();
    }

    public static void Main()
    {
        OraTest ot = new OraTest();
        ot.Connect();
        ot.Close();
    }
    
}