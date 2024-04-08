import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Textarea, Select, Checkbox, Table, Thead, Tbody, Tr, Th, Td, Stack, Flex, Avatar, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaClock, FaComments } from "react-icons/fa";

const Index = () => {
  const [invoices, setInvoices] = useState([]);
  const [estimates, setEstimates] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [employees, setEmployees] = useState([]);

  // Invoice Generation
  const handleGenerateInvoice = () => {
    // TODO: Implement invoice generation logic
    console.log("Generating invoice...");
  };

  // Service Estimates
  const handleCreateEstimate = () => {
    // TODO: Implement estimate creation logic
    console.log("Creating estimate...");
  };

  // Task Management
  const handleAddTask = () => {
    // TODO: Implement add task logic
    console.log("Adding task...");
  };

  const handleDeleteTask = (taskId) => {
    // TODO: Implement delete task logic
    console.log(`Deleting task with ID: ${taskId}`);
  };

  // Team Communication
  const handleSendMessage = () => {
    // TODO: Implement send message logic
    console.log("Sending message...");
  };

  // Employee Hours Tracking
  const handleClockIn = (employeeId) => {
    // TODO: Implement clock-in logic
    console.log(`Employee ${employeeId} clocked in.`);
  };

  const handleClockOut = (employeeId) => {
    // TODO: Implement clock-out logic
    console.log(`Employee ${employeeId} clocked out.`);
  };

  // Pricing and Repair Time Lookup
  const handleLookupPricing = () => {
    // TODO: Implement pricing lookup logic
    console.log("Looking up pricing...");
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Auto Repair Shop Management
      </Heading>

      {/* Invoice Generation */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Invoice Generation
        </Heading>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleGenerateInvoice}>
          Generate Invoice
        </Button>
      </Box>

      {/* Service Estimates */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Service Estimates
        </Heading>
        <Button leftIcon={<FaPlus />} colorScheme="green" onClick={handleCreateEstimate}>
          Create Estimate
        </Button>
      </Box>

      {/* Task Management */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Task Management
        </Heading>
        <Stack spacing={4}>
          {tasks.map((task) => (
            <Flex key={task.id} align="center">
              <Checkbox mr={4} />
              <Text flex={1}>{task.description}</Text>
              <IconButton icon={<FaTrash />} aria-label="Delete Task" onClick={() => handleDeleteTask(task.id)} />
            </Flex>
          ))}
          <Input
            placeholder="Enter a new task"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
          />
        </Stack>
      </Box>

      {/* Team Communication */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Team Communication
        </Heading>
        <Box maxHeight={300} overflowY="auto" mb={4}>
          {messages.map((message) => (
            <Flex key={message.id} mb={2}>
              <Avatar name={message.sender} mr={2} />
              <Box>
                <Text fontWeight="bold">{message.sender}</Text>
                <Text>{message.content}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Textarea
          placeholder="Type a message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
      </Box>

      {/* Employee Hours Tracking */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Employee Hours Tracking
        </Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>Employee</Th>
              <Th>Clock In</Th>
              <Th>Clock Out</Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((employee) => (
              <Tr key={employee.id}>
                <Td>{employee.name}</Td>
                <Td>
                  <Button size="sm" colorScheme="green" leftIcon={<FaClock />} onClick={() => handleClockIn(employee.id)}>
                    Clock In
                  </Button>
                </Td>
                <Td>
                  <Button size="sm" colorScheme="red" leftIcon={<FaClock />} onClick={() => handleClockOut(employee.id)}>
                    Clock Out
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Pricing and Repair Time Lookup */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          Pricing and Repair Time Lookup
        </Heading>
        <Select placeholder="Select a service" mb={4}>
          <option value="option1">Oil Change</option>
          <option value="option2">Brake Service</option>
          <option value="option3">Tire Rotation</option>
        </Select>
        <Button colorScheme="blue" onClick={handleLookupPricing}>
          Lookup Pricing
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
