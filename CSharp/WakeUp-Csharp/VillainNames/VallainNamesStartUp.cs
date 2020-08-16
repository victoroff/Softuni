using System;
using System.Data.SqlClient;

namespace ADVDB_FetchingResults
{
    public class VillainsNames
    {
        static void Main(string[] args)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString))
            {
                connection.Open();

                string villainsInfo = "select v.Name, COUNT(mv.MinionId) as MinionsCount from Villains as v " +
                    "join MinionsVillains as mv on mv.VillainId = v.Id " +
                    "group by v.name having count(mv.MinionId) > 3 " +
                    "order by MinionsCount desc ";

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
