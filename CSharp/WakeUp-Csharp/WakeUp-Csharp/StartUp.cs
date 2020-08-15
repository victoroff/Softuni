using System;
using System.Data.SqlClient;

namespace ADVDB_FetchingResults
{
    class StartUp
    {
        static void Main(string[] args)
        {
            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString))
            {
                connection.Open();
                
                string dbSql = "CREATE DATABASE MinionsDB";
                ExecNonQuery(connection, dbSql);

                connection.ChangeDatabase("MinionsDB");
                //create tables queries
                string tableCountries = "CREATE TABLE Countries(Id INT PRIMARY KEY IDENTITY,Name VARCHAR(50))";
                string tableTowns = "CREATE TABLE Towns(Id INT PRIMARY KEY IDENTITY,Name VARCHAR(50), CountryCode INT FOREIGN KEY REFERENCES Countries(Id))";
                string tableMinions= "CREATE TABLE Minions(Id INT PRIMARY KEY IDENTITY,Name VARCHAR(30),Age INT, TownId INT FOREIGN KEY REFERENCES Towns(Id))";
                string tableEvilnessFactors = "CREATE TABLE EvilnessFactors(Id INT PRIMARY KEY IDENTITY,Name VARCHAR(50))";
                string tableVillains = "CREATE TABLE Villains(Id INT PRIMARY KEY IDENTITY,Name VARCHAR(50), EvilnessFactorId INT FOREIGN KEY REFERENCES EvilnessFactors(Id))";
                string tableMinionsVillains = "CREATE TABLE MinionsVillains(MinionId INT FOREIGN KEY REFERENCES Minions(Id),VillainId INT FOREIGN KEY REFERENCES Villains(Id),CONSTRAINT PK_MinionsVillains PRIMARY KEY(MinionId, VillainId))";
                
                //execute queries
                ExecNonQuery(connection, tableCountries);
                ExecNonQuery(connection, tableTowns);
                ExecNonQuery(connection, tableMinions);
                ExecNonQuery(connection, tableEvilnessFactors);
                ExecNonQuery(connection, tableVillains);
                ExecNonQuery(connection, tableMinionsVillains);


                //using not corectly closing the connection
                connection.Close();
            }
        }

        private static void ExecNonQuery(SqlConnection connection, string dbSql)
        {
            using (SqlCommand command = new SqlCommand(dbSql, connection))
            {
                command.ExecuteNonQuery();
            }    
        }
    }
}
