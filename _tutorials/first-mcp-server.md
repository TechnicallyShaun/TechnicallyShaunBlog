---
layout: page
title: "Building Your First MCP Server"
description: "A complete guide to creating your first Model Context Protocol server in C# that connects AI to your existing systems."
difficulty: beginner
technologies: ["C#", "MCP", "Claude API", ".NET"]
reading_time: 15
---

# Building Your First MCP Server

This tutorial will walk you through creating your first MCP (Model Context Protocol) server in C#. By the end, you'll have a working server that Claude can use to interact with your systems.

## Prerequisites

- .NET 8.0 or later
- Basic understanding of C#
- Visual Studio or VS Code
- Claude Desktop or any MCP-compatible client

## What We're Building

We'll create an MCP server that:
- Reads and writes files from your system
- Executes database queries
- Provides system information
- All accessible through natural language via Claude

## Step 1: Project Setup

Create a new C# console application:

```bash
dotnet new console -n MyFirstMcpServer
cd MyFirstMcpServer
dotnet add package MCP.NET
```

## Step 2: Basic Server Structure

Create your main server class:

```csharp
using MCP.NET;
using System.Threading.Tasks;

namespace MyFirstMcpServer
{
    public class MyMcpServer : McpServer
    {
        public MyMcpServer() : base("My First MCP Server")
        {
            // Server initialization
        }
        
        [McpTool("read_file", "Reads content from a file")]
        public async Task<string> ReadFile(string path)
        {
            if (!File.Exists(path))
                return $"File not found: {path}";
                
            return await File.ReadAllTextAsync(path);
        }
        
        [McpTool("write_file", "Writes content to a file")]
        public async Task<string> WriteFile(string path, string content)
        {
            await File.WriteAllTextAsync(path, content);
            return $"Successfully wrote {content.Length} characters to {path}";
        }
        
        [McpTool("list_files", "Lists files in a directory")]
        public async Task<string[]> ListFiles(string directory)
        {
            if (!Directory.Exists(directory))
                return new[] { $"Directory not found: {directory}" };
                
            return Directory.GetFiles(directory);
        }
    }
}
```

## Step 3: Add Database Integration

Let's add database query capabilities:

```csharp
[McpTool("query_database", "Executes a SQL query")]
public async Task<object> QueryDatabase(string query)
{
    using var connection = new SqlConnection(_connectionString);
    await connection.OpenAsync();
    
    using var command = new SqlCommand(query, connection);
    using var reader = await command.ExecuteReaderAsync();
    
    var results = new List<Dictionary<string, object>>();
    
    while (await reader.ReadAsync())
    {
        var row = new Dictionary<string, object>();
        for (int i = 0; i < reader.FieldCount; i++)
        {
            row[reader.GetName(i)] = reader.GetValue(i);
        }
        results.Add(row);
    }
    
    return results;
}
```

## Step 4: Configure and Run

Create the main entry point:

```csharp
class Program
{
    static async Task Main(string[] args)
    {
        var server = new MyMcpServer();
        
        // Configure server options
        server.Configure(options =>
        {
            options.Port = 3000;
            options.EnableLogging = true;
            options.MaxConcurrentRequests = 10;
        });
        
        // Start the server
        await server.StartAsync();
        
        Console.WriteLine("MCP Server running on port 3000");
        Console.WriteLine("Press any key to stop...");
        Console.ReadKey();
        
        await server.StopAsync();
    }
}
```

## Step 5: Connect to Claude

Add your server to Claude's configuration:

1. Open Claude Desktop settings
2. Navigate to MCP Servers
3. Add your server:

```json
{
  "name": "My First MCP Server",
  "url": "http://localhost:3000",
  "description": "File and database operations"
}
```

## Step 6: Test Your Server

Now you can interact with your server through Claude:

- "Read the contents of config.json"
- "List all files in the Documents folder"
- "Query the database for all users created this week"
- "Write a summary to report.txt"

## Security Considerations

Before deploying to production:

1. **Add authentication**: Implement API keys or OAuth
2. **Validate inputs**: Sanitize all file paths and SQL queries
3. **Set permissions**: Restrict file system access
4. **Rate limiting**: Prevent abuse
5. **Logging**: Track all operations

## Next Steps

You now have a working MCP server! Here's what to explore next:

1. Add more tools for your specific use cases
2. Implement streaming responses for large data
3. Add WebSocket support for real-time updates
4. Deploy with Docker for production use

## Complete Source Code

The complete source code for this tutorial is available at:
[github.com/technicallyshaun/mcp-tutorial-starter](https://github.com/technicallyshaun/mcp-tutorial-starter)

## Troubleshooting

**Server won't start**: Check if port 3000 is already in use
**Claude can't connect**: Ensure firewall allows localhost connections
**Tools not appearing**: Verify your MCP attributes are correctly decorated

## Questions?

Join the discussion in the comments or reach out via [email](mailto:your-email@example.com).

---

*Next Tutorial: [Deploying MCP Servers with Docker →](/tutorials/mcp-docker-deployment/)*