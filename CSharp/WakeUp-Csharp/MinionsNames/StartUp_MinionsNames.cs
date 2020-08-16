using ADVDB_FetchingResults;
using System;
using System.Data.SqlClient;

namespace MinionsNames
{
    class StartUp_MinionsNames
    {
        static void Main(string[] args)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString))
            {
                connection.Open();

                string villainsInfo = "";

                using (SqlCommand command = new SqlCommand(villainsInfo, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine($"{reader[0]} -> {reader[1]}");
                        }
                    }
                }
                connection.Close();
            }
        }
    }
}
