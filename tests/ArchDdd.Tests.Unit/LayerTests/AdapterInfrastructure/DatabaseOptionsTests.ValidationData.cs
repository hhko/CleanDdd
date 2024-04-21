﻿using ArchDdd.Adapters.Infrastructure.Options;
using ArchDdd.Adapters.Infrastructure.Utilities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using static ArchDdd.Tests.Unit.Abstractions.Constants.Constants;

namespace ArchDdd.Tests.Unit.LayerTests.Adapter;

[Trait(nameof(UnitTest), UnitTest.Infrastructure)]
public partial class DatabaseOptionsTests
{
    //{
    //    "TopLevelKey": "TopLevelValue",
    //    "SectionName": {
    //                "SomeKey": "SectionValue"
    //    }
    //}
    //
    //var inMemorySettings = new Dictionary<string, string> {
    //    {"TopLevelKey", "TopLevelValue"},
    //    {"SectionName:SomeKey", "SectionValue"},
    //};

    //{
    //    "ArrayKey": [
    //        1,
    //        2,
    //        3
    //    ]
    //}
    //
    //var inMemorySettings = new Dictionary<string, string> {
    //    {"ArrayKey:0", "1"},
    //    {"ArrayKey:1", "2"},
    //    {"ArrayKey:2", "3"},
    //};

    [Theory]
    //[ClassData(typeof(DatabaseOptionsValidationData))]
    [MemberData(nameof(ValidationData))]
    public void DatabaseOptions_WhenAppsettingsIsValid_ShouldNotThrow(Dictionary<string, string> inMemorySettings)
    {
        // Arrange
        IConfiguration configuration = new ConfigurationBuilder()
            .AddInMemoryCollection(inMemorySettings!)
            .Build();

        ServiceCollection services = new();
        services
            .AddTransient(_ => configuration)
            .AddTransient(_ => Substitute.For<IWebHostEnvironment>())
            .RegisterAdapterInfrastructureLayer();

        // Act
        Action act = () => services.GetOptions<DatabaseOptions>();

        // Assert
        act.Should().NotThrow();
    }

    public static TheoryData<Dictionary<string, string>> ValidationData =>
        new()
        {
            new Dictionary<string, string> {
                { "DatabaseOptions:ConnectionString", "appsettings.메모리.json... ConnectionString" },
                { "DatabaseOptions:MaxRetryCount", "1"},
                { "DatabaseOptions:MaxRetryDelay", "1"},
                { "DatabaseOptions:CommandTimeout", "1"}
            },
            new Dictionary<string, string> {
                { "DatabaseOptions:ConnectionString", "appsettings.메모리.json... ConnectionString" },
                { "DatabaseOptions:MaxRetryCount", "2"},
                { "DatabaseOptions:MaxRetryDelay", "2"},
                { "DatabaseOptions:CommandTimeout", "2"}
            },
            new Dictionary<string, string> {
                { "DatabaseOptions:ConnectionString", "appsettings.메모리.json... ConnectionString" },
                { "DatabaseOptions:MaxRetryCount", "3"},
                { "DatabaseOptions:MaxRetryDelay", "3"},
                { "DatabaseOptions:CommandTimeout", "3"}
            }
        };
}
