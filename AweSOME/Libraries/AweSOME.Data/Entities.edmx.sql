
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, and Azure
-- --------------------------------------------------
-- Date Created: 04/27/2013 01:16:16
-- Generated from EDMX file: C:\AWESOME\AweSOME\Libraries\AweSOME.Data\Entities.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [AwesomeDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'CustomerTypes'
CREATE TABLE [dbo].[CustomerTypes] (
    [Id] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Memo] nvarchar(max)  NULL,
    [CreatedDate] datetime  NOT NULL,
    [CreatedBy] nvarchar(max)  NOT NULL,
    [Status] nvarchar(max)  NOT NULL,
    [LastModifiedDate] datetime  NOT NULL,
    [LastModifiedBy] datetime  NOT NULL
);
GO

-- Creating table 'Regions'
CREATE TABLE [dbo].[Regions] (
    [Id] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Memo] nvarchar(max)  NULL,
    [CreatedDate] datetime  NOT NULL,
    [CreatedBy] nvarchar(max)  NOT NULL,
    [Status] nvarchar(max)  NOT NULL,
    [LastModifiedDate] datetime  NOT NULL,
    [LastModifiedBy] datetime  NOT NULL
);
GO

-- Creating table 'Zones'
CREATE TABLE [dbo].[Zones] (
    [Id] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Memo] nvarchar(max)  NULL
);
GO

-- Creating table 'RegionTypes'
CREATE TABLE [dbo].[RegionTypes] (
    [Id] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Memo] nvarchar(max)  NULL
);
GO

-- Creating table 'BusinessTypes'
CREATE TABLE [dbo].[BusinessTypes] (
    [Id] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Memo] nvarchar(max)  NULL
);
GO

-- Creating table 'Businesses'
CREATE TABLE [dbo].[Businesses] (
    [Id] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Memo] nvarchar(max)  NULL,
    [CreatedDate] datetime  NOT NULL,
    [CreatedBy] nvarchar(max)  NOT NULL,
    [Status] nvarchar(max)  NOT NULL,
    [LastModifiedDate] datetime  NOT NULL,
    [LastModifiedBy] datetime  NOT NULL
);
GO

-- Creating table 'PartnerTypes'
CREATE TABLE [dbo].[PartnerTypes] (
    [Id] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Memo] nvarchar(max)  NULL
);
GO

-- Creating table 'Countries'
CREATE TABLE [dbo].[Countries] (
    [Id] nvarchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [ISO3Code] nvarchar(max)  NOT NULL,
    [NumCode] smallint  NOT NULL
);
GO

-- Creating table 'Customers'
CREATE TABLE [dbo].[Customers] (
    [Id] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Partners'
CREATE TABLE [dbo].[Partners] (
    [Id] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'CustomerTypes'
ALTER TABLE [dbo].[CustomerTypes]
ADD CONSTRAINT [PK_CustomerTypes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Regions'
ALTER TABLE [dbo].[Regions]
ADD CONSTRAINT [PK_Regions]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Zones'
ALTER TABLE [dbo].[Zones]
ADD CONSTRAINT [PK_Zones]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RegionTypes'
ALTER TABLE [dbo].[RegionTypes]
ADD CONSTRAINT [PK_RegionTypes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'BusinessTypes'
ALTER TABLE [dbo].[BusinessTypes]
ADD CONSTRAINT [PK_BusinessTypes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Businesses'
ALTER TABLE [dbo].[Businesses]
ADD CONSTRAINT [PK_Businesses]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PartnerTypes'
ALTER TABLE [dbo].[PartnerTypes]
ADD CONSTRAINT [PK_PartnerTypes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Countries'
ALTER TABLE [dbo].[Countries]
ADD CONSTRAINT [PK_Countries]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Customers'
ALTER TABLE [dbo].[Customers]
ADD CONSTRAINT [PK_Customers]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Partners'
ALTER TABLE [dbo].[Partners]
ADD CONSTRAINT [PK_Partners]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------