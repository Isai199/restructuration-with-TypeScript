USE [master]
GO
/****** Object:  Database [bds_employees]    Script Date: 24/07/2021 08:47:19 p.m. ******/
CREATE DATABASE [bds_employees]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bds_empleados', FILENAME = N'C:\Users\HP\bds_empleados.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bds_empleados_log', FILENAME = N'C:\Users\HP\bds_empleados_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [bds_employees] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bds_employees].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bds_employees] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bds_employees] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bds_employees] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bds_employees] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bds_employees] SET ARITHABORT OFF 
GO
ALTER DATABASE [bds_employees] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bds_employees] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bds_employees] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bds_employees] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bds_employees] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bds_employees] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bds_employees] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bds_employees] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bds_employees] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bds_employees] SET  DISABLE_BROKER 
GO
ALTER DATABASE [bds_employees] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bds_employees] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bds_employees] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bds_employees] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bds_employees] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bds_employees] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bds_employees] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bds_employees] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [bds_employees] SET  MULTI_USER 
GO
ALTER DATABASE [bds_employees] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bds_employees] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bds_employees] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bds_employees] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [bds_employees] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [bds_employees] SET QUERY_STORE = OFF
GO
USE [bds_employees]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [bds_employees]
GO
/****** Object:  Table [dbo].[tbl_employees]    Script Date: 24/07/2021 08:47:36 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_employees](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[firstname] [varchar](50) NOT NULL,
	[lastname] [varchar](50) NOT NULL,
	[birtplace] [varchar](30) NOT NULL,
	[birthday] [varchar](30) NOT NULL,
	[address] [varchar](50) NOT NULL,
	[phone] [varchar](10) NOT NULL,
	[job] [varchar](15) NOT NULL,
	[state] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tbl_employees] ON 
GO
INSERT [dbo].[tbl_employees] ([id], [firstname], [lastname], [birtplace], [birthday], [address], [phone], [job], [state]) VALUES (1037, N'Juan', N'Campos', N'Santa Ana, El Salvador', N'15-06-1991', N'', N'70252525', N'Gerente', 2)
GO
INSERT [dbo].[tbl_employees] ([id], [firstname], [lastname], [birtplace], [birthday], [address], [phone], [job], [state]) VALUES (1038, N'Andres', N'Perez', N'SM', N'06-06-1980', N'SM', N'12345789', N'Gerente', 3)
GO
INSERT [dbo].[tbl_employees] ([id], [firstname], [lastname], [birtplace], [birthday], [address], [phone], [job], [state]) VALUES (1039, N'Marcos', N'Amaya', N'Santa Salvador', N'06-06-2017', N'San Salvador', N'12345678', N'Vendedor', 1)
GO
INSERT [dbo].[tbl_employees] ([id], [firstname], [lastname], [birtplace], [birthday], [address], [phone], [job], [state]) VALUES (2014, N'german', N'ramses', N'Morelia', N'27-07-2021', N'fgh', N'4323224334', N'albañil', 1)
GO
INSERT [dbo].[tbl_employees] ([id], [firstname], [lastname], [birtplace], [birthday], [address], [phone], [job], [state]) VALUES (2015, N'Isai', N'ramses', N'Morelia', N'20-07-2021', N'fgh', N'4323224334', N'abogado', 1)
GO
SET IDENTITY_INSERT [dbo].[tbl_employees] OFF
GO
USE [master]
GO
ALTER DATABASE [bds_employees] SET  READ_WRITE 
GO
