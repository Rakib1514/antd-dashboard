"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Layout, Modal, Typography, Space, message } from "antd";
import interactionPlugin from "@fullcalendar/interaction";
import { EventClickArg, EventDropArg } from "@fullcalendar/core"; // ✅ Import types

const { Title, Text } = Typography;

interface EventDetail {
  title: string;
  date: string;
  visible: boolean;
}

export default function ViewCalendar() {
  const [modalState, setModalState] = useState<EventDetail>({
    title: "",
    date: "",
    visible: false,
  });

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;

    setModalState({
      title: event.title,
      date: event.startStr,
      visible: true,
    });
  };

  const handleCancel = () => {
    setModalState((prev) => ({ ...prev, visible: false }));
  };

  // When an event is dragged & dropped
  const handleEventDrop = (info: EventDropArg) => {
    message.success(`${info.event.title} moved to ${info.event.startStr}`);

    // 👉 If you need to save changes to DB, do API call here
    // fetch("/api/update-event", { method: "POST", body: JSON.stringify({...}) })
  };

  return (
    <Layout style={{ maxWidth: "500px" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height={500}
        editable={true}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        events={[
          { id: "1", title: "Rakib's Birthday", date: "2025-09-18" },
          { id: "2", title: "Birthday (Rouja)", date: "2025-09-19" },
        ]}
      />

      <Modal
        title="Event Details"
        open={modalState.visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Title level={4}>{modalState.title}</Title>
          <Text>Date: {modalState.date}</Text>
          <Text type="secondary">
            This is where more event details would go.
          </Text>
        </Space>
      </Modal>
    </Layout>
  );
}
