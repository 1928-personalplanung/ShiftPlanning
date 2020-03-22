namespace ShiftPlan
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Globalization;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public partial class Discipline
    {
        [Key]
        [JsonProperty("id", NullValueHandling = NullValueHandling.Ignore)]
        public double? Id { get; set; }

        [JsonProperty("name", NullValueHandling = NullValueHandling.Ignore)]
        public string Name { get; set; }

        [JsonProperty("shiftTypeId", NullValueHandling = NullValueHandling.Ignore)]
        public double? TagTypeId { get; set; }
        public virtual TagType TagType { get; set; }
    }

    public partial class TagType
    {
        [JsonProperty("contagious", NullValueHandling = NullValueHandling.Ignore)]
        public bool? Contagious { get; set; }

        [JsonProperty("defaultDurationInSeconds", NullValueHandling = NullValueHandling.Ignore)]
        public double? DefaultDurationInSeconds { get; set; }
        [Key]
        [JsonProperty("id", NullValueHandling = NullValueHandling.Ignore)]
        public double? Id { get; set; }

        [JsonProperty("name", NullValueHandling = NullValueHandling.Ignore)]
        public string Name { get; set; }

        [JsonProperty("type", NullValueHandling = NullValueHandling.Ignore)]
        public TagTypesEnum? Type { get; set; }
    }

    public enum TagTypesEnum { Sick, Vacation };


    public partial class Team
    {
        [Key]
        [JsonProperty("id", NullValueHandling = NullValueHandling.Ignore)]
        public double? Id { get; set; }

        [JsonProperty("name", NullValueHandling = NullValueHandling.Ignore)]
        public string Name { get; set; }
    }

    public partial class WorkMode
    {
        [JsonProperty("hoursPerMonth")]
        public object HoursPerMonth { get; set; }
        [Key]
        [JsonProperty("id", NullValueHandling = NullValueHandling.Ignore)]
        public double? Id { get; set; }

        [JsonProperty("name", NullValueHandling = NullValueHandling.Ignore)]
        public string Name { get; set; }
    }

    public partial class Worker
    {
        [JsonProperty("disciplineId", NullValueHandling = NullValueHandling.Ignore)]
        public double? DisciplineId { get; set; }

        [JsonProperty("hoursWorkedInCurrentMonth", NullValueHandling = NullValueHandling.Ignore)]
        public double? HoursWorkedInCurrentMonth { get; set; }
        [Key]
        [JsonProperty("id", NullValueHandling = NullValueHandling.Ignore)]
        public double? Id { get; set; }

        [JsonProperty("name", NullValueHandling = NullValueHandling.Ignore)]
        public string Name { get; set; }

        [JsonProperty("stationId", NullValueHandling = NullValueHandling.Ignore)]
        public double? StationId { get; set; }

        [JsonProperty("tags", NullValueHandling = NullValueHandling.Ignore)]
        public List<Tag> Tags { get; set; }

        [JsonProperty("teamId", NullValueHandling = NullValueHandling.Ignore)]
        public double? TeamId { get; set; }
        public virtual Team Team { get; set; }

        [JsonProperty("workModeId", NullValueHandling = NullValueHandling.Ignore)]
        public double? WorkModeId { get; set; }
        public virtual WorkMode WorkMode { get; set; }
    }

    public partial class Tag
    {
        [JsonProperty("description", NullValueHandling = NullValueHandling.Ignore)]
        public string Description { get; set; }

        [JsonProperty("endDate", NullValueHandling = NullValueHandling.Ignore)]
        public double? EndDate { get; set; }
        [Key]
        [JsonProperty("id", NullValueHandling = NullValueHandling.Ignore)]
        public double? Id { get; set; }

        [JsonProperty("startDate", NullValueHandling = NullValueHandling.Ignore)]
        public double? StartDate { get; set; }

        [JsonProperty("tagTypeId", NullValueHandling = NullValueHandling.Ignore)]
        public double? TagTypeId { get; set; }

        [JsonProperty("workerId", NullValueHandling = NullValueHandling.Ignore)]
        public double? WorkerId { get; set; }
        public virtual Worker Worker { get; set; }
    }




}
