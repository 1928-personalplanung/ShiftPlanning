using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Newtonsoft.Json;


namespace ShiftPlan.Data 
{
    public class MainDBContext : DbContext
    {
        public MainDBContext()
        {
        }

        public MainDBContext(DbContextOptions<MainDBContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=tcp:shiftplan.database.windows.net,1433;Initial Catalog=ShiftPlan;Persist Security Info=False;User ID=teamwork;Password=WirVsVirus2020!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            base.OnConfiguring(optionsBuilder);
        }


        public virtual DbSet<Discipline> Disciplines { get; set; }
        public virtual DbSet<TagType> TagTypes { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<WorkMode> WorkModes { get; set; }
        public virtual DbSet<Worker> Workers { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


        }

    }

  


}
