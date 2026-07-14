"use client";

import React, { useState } from "react";

import { Button, Badge, Card, PageHeader } from "@/components/ui";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Someone liked your post", isUnread: true },
    { id: 2, text: "New comment on your assignment", isUnread: true },
    { id: 3, text: "Class project deadline extended", isUnread: true },
    { id: 4, text: "Backend assignment due in 1 day", isUnread: false },
  ]);

  const [showDropdown, setShowDropdown] = useState(false);

  const unreadCount = notifications.filter((n) => n.isUnread === true).length;

  function handleMarkAllRead() {
    const updated = notifications.map((n) => {
      return { ...n, isUnread: false };
    });
    setNotifications(updated);
  }

  return (
    <div className="manin-page-container">
      <PageHeader
        title="Notifications"
        description="View your latest updates"
      />

      <div className="dropdown-wrapper">
        <Button
          data-testid="bell-button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="bell-toggle-btn"
        >
          <span className="bell-icon"></span>
          <span>Notifications</span>

          {unreadCount > 0 && (
            <Badge data-testid="unread-badge">{unreadCount}</Badge>
          )}
        </Button>

        {showDropdown && (
          <Card
            data-testid="notification-dropdown"
            className="anotifications-box"
          >
            <div className="dropdown-header">
              <span className="dropdown-title">Your Updates</span>

              {unreadCount > 0 && (
                <Button
                  data-testid="mark-all-read-btn"
                  onClick={handleMarkAllRead}
                  className="clear-btn"
                >
                  Mark all read
                </Button>
              )}
            </div>

            <ul className="notifications-list">
              {notifications.map((n) => (
                <li
                  key={n.id}
                  className={n.isUnread ? "unread-item" : "read-item"}
                >
                  {n.text} {n.isUnread}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
}
