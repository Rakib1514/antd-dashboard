"use client";
import {
  DateSelectArg,
  EventClickArg,
  EventDropArg,
  EventInput,
} from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  Button,
  Col,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Layout,
  message,
  Modal,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const { RangePicker } = DatePicker;

const { Text } = Typography;

const initialEvents: EventInput[] = [
  {
    id: "1",
    title: "Rakib's Birthday",
    start: "2025-10-18T10:00:00",
    end: "2025-10-18T12:00:00",
    backgroundColor: "#ff7875",
    textColor: "#fff",
    extendedProps: {
      description: "Celebration at Rakib's home 🎉",
      location: "Dhaka, Bangladesh",
      guests: ["Rouja", "Family", "Friends"],
      category: "Birthday",
    },
  },
  {
    id: "2",
    title: "Rouja's Birthday",
    start: "2025-10-19T09:00:00",
    end: "2025-10-19T11:00:00",
    backgroundColor: "#36cfc9",
    textColor: "#000",
    extendedProps: {
      description: "Full-day birthday celebration 🥳",
      location: "Chittagong",
      guests: ["Rakib", "Relatives"],
      category: "Birthday",
    },
  },
];

type FieldType = {
  title: string;
  backgroundColor?: string;
  description?: string;
  location?: string;
  guests?: string;
  category?: string;
  schedule?: dayjs.Dayjs[] | null;
};

export default function CreateSchedule() {
  const { token } = theme.useToken();

  const [events, setEvents] = useState(initialEvents);
  const [newEventDate, setNewEventDate] = useState<{
    start: Date;
    end?: Date | null;
  } | null>(null);

  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(
    null
  );

  const [form] = Form.useForm();

  const handleDateClick = (arg: DateClickArg) => {
    console.log(arg);
    setNewEventDate({ start: arg.date });
    // arg.date (start date of the day clicked)
    form.setFieldsValue({ schedule: [dayjs(arg.date), undefined] });
  };

  const handleEventSelect = (arg: DateSelectArg) => {
    // console.log("Selected range:", arg);

    const start = arg.start;
    const end = arg.end;

    console.log("Start:", start);
    console.log("End:", end);

    setNewEventDate({ start, end });

    // form pre-fill
    form.setFieldsValue({
      schedule: [dayjs(start), dayjs(end)],
    });
  };

  const handleEventSave = (values: FieldType) => {
    if (!newEventDate) return;

    const event: EventInput = {
      id: (events.length + 1).toString(),
      title: values.title,
      start:
        values.schedule?.[0]?.toISOString() || newEventDate.start.toISOString(),
      end:
        values.schedule?.[1]?.toISOString() ||
        values.schedule?.[0]?.toISOString(),
      backgroundColor: values.backgroundColor,
      textColor: "#000",
      allDay: values.schedule?.[1] ? false : true,
      extendedProps: {
        description: values.description,
        location: values.location || "",
        guests: values.guests?.split(",") || [],
        category: values.category || "",
      },
    };

    setEvents((prev) => [...prev, event]);

    setNewEventDate(null);

    form.resetFields();
  };

  const handleEventDrop = (info: EventDropArg) => {
    message.success(`${info.event.title} moved to ${info.event.startStr}`);

    console.log(" From handleEventDrop", info);

    // 👉 If you need to save changes to DB, do API call here
    // fetch("/api/update-event", { method: "POST", body: JSON.stringify({...}) })
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    console.log(clickInfo.event._def);
    const event = clickInfo.event;

    setSelectedEvent(clickInfo);

    if (selectedEvent) {
      console.log("From handleEventClick", selectedEvent.event._def);
    }
  };

  return (
    <Layout style={{ maxWidth: "720px", margin: "32px auto 0", width: "100%" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        selectable={true}
        initialView="dayGridMonth"
        editable={true}
        height={600}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        select={handleEventSelect}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        eventContent={(arg) => (
          <div
            style={{
              background: arg.event.backgroundColor || "#1677ff",
              color: arg.event.textColor || "#fff",
              borderRadius: 4,
              padding: "2px 4px",
              fontSize: 13,
              display: "flex",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "100%",
              boxSizing: "border-box",
            }}
          >
            <div>{arg.event.title}</div>
          </div>
        )}
      />
      <Modal
        title="New Event"
        closable={{ "aria-label": "Custom Close Button" }}
        open={newEventDate !== null}
        onCancel={() => setNewEventDate(null)}
        footer={false}
      >
        <Form
          name="Add Event"
          layout="vertical"
          style={{ maxWidth: 600 }}
          initialValues={{
            backgroundColor: token.colorPrimary,
            schedule: newEventDate
              ? [
                  dayjs(newEventDate.start),
                  newEventDate.end ? dayjs(newEventDate.end) : null,
                ]
              : [null, null],
          }}
          onFinish={handleEventSave}
          autoComplete="off"
          form={form}
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please add event title!" }]}
          >
            <Input placeholder="Event Title" maxLength={100} />
          </Form.Item>

          <Form.Item<FieldType> label="Description" name="description">
            <Input.TextArea
              placeholder="Event Description"
              rows={4}
              maxLength={1000}
            />
          </Form.Item>

          <Form.Item<FieldType> label="Location" name="location">
            <Input placeholder="Location" maxLength={100} />
          </Form.Item>

          <Form.Item<FieldType> label="Guests" name="guests">
            <Input
              placeholder="Comma separated. e.g. John, Jane"
              maxLength={200}
            />
          </Form.Item>

          <Form.Item<FieldType> label="Category" name="category">
            <Input placeholder="Category" maxLength={100} />
          </Form.Item>

          <Form.Item<FieldType> label="Schedule" name="schedule">
            <RangePicker
              showTime={{
                format: "hh:mm A",
              }}
              format="YYYY-MM-DD hh:mm A"
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Color"
            name="backgroundColor"
            getValueFromEvent={(color) => {
              return "#" + color.toHex();
            }}
          >
            <ColorPicker />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              onClick={() => setNewEventDate(null)}
              htmlType="button"
              type="dashed"
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={
          selectedEvent && (
            <Text
              style={{
                backgroundColor: selectedEvent.event.backgroundColor,
                color: selectedEvent.event.textColor || "#fff",
                padding: "8px 12px",
                borderRadius: 4,
                display: "inline-block",
              }}
            >
              {selectedEvent.event.title}
            </Text>
          )
        }
        open={selectedEvent !== null}
        onCancel={() => setSelectedEvent(null)}
        footer={[
          <Button
            key="close"
            type="primary"
            onClick={() => setSelectedEvent(null)}
          >
            Close
          </Button>,
        ]}
      >
        {selectedEvent && (
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Row gutter={[8, 8]}>
              <Col span={8}>
                <Text strong>Description:</Text>
              </Col>
              <Col span={16}>
                <Text>
                  {selectedEvent.event.extendedProps.description || "N/A"}
                </Text>
              </Col>
            </Row>

            <Row gutter={[8, 8]}>
              <Col span={8}>
                <Text strong>Location:</Text>
              </Col>
              <Col span={16}>
                <Text>
                  {selectedEvent.event.extendedProps.location || "N/A"}
                </Text>
              </Col>
            </Row>

            <Row gutter={[8, 8]}>
              <Col span={8}>
                <Text strong>Guests:</Text>
              </Col>
              <Col span={16}>
                <Text>
                  {(selectedEvent.event.extendedProps.guests || []).join(
                    ", "
                  ) || "N/A"}
                </Text>
              </Col>
            </Row>

            <Row gutter={[8, 8]}>
              <Col span={8}>
                <Text strong>Category:</Text>
              </Col>
              <Col span={16}>
                <Text>
                  {selectedEvent.event.extendedProps.category || "N/A"}
                </Text>
              </Col>
            </Row>

            <Row gutter={[8, 8]}>
              <Col span={8}>
                <Text strong>Schedule:</Text>
              </Col>
              <Col span={16}>
                <Text>
                  {dayjs(selectedEvent.event.start).format(
                    "YYYY-MM-DD hh:mm A"
                  )}
                  {selectedEvent.event.end
                    ? ` - ${dayjs(selectedEvent.event.end).format(
                        "YYYY-MM-DD hh:mm A"
                      )}`
                    : ""}
                </Text>
              </Col>
            </Row>
          </Space>
        )}
      </Modal>
    </Layout>
  );
}
