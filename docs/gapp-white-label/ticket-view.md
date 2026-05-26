# Ticket View

## Main Ticket View

This section displays a summary of the ticket.

1. The **entity** where the ticket is located.
2. A toolbar that allows users to **change** ticket **status and category**.
3. Three small icons show:
   - **Number** of the ticket and if it is an **Incident** (!) or a **Request** (?).
   - **Ticket status**.
   - **Ticket priority**.
4. **Dates** related to the ticket. The **creation date** and the **last update date**.
5. **Category** of the ticket.
6. **Location** of the ticket. If a location has the coordinates saved in GLPI, it will appear highlighted in a different color in the app and when you click it will open your navigation application with the coordinates.
7. **Ticket requesting source.**
8. Icons where you can find and modify (only actors) the following **information about the ticket**:
   - Service levels.
   - Actors (users or groups).
   - Other tickets are linked to this ticket.
9. **Title** and **description** of the ticket.
10. Ticket **view selector.**

## Main Ticket View – Toolbar

1. Change ticket status button.
2. Modify ticket category button.
3. Share ticket button.

## Service Levels

Here you can see the ticket's Service Levels.

1. **TTO** (Time to own).
2. **TTR** (Time to resolve).
3. **Internal TTO** (Internal time to own).
4. **Internal TTR** (Internal time to resolve).

## Actors

Here you can see and modify the ticket's actors.

1. Requesters section.
2. Assign yourself as requester.
3. Assign new group as observer.
4. Assign new user as observer.
5. Select new group as assigned.
6. Select new user as assigned.
7. Select yourself as an assignee.

*Note: In Gapp White Label you also can remove added users/groups by clicking on them.*

## Linked Tickets

Here you can see and access the ticket's linked tickets.

1. List of the linked tickets.

## Ticket View Selector

1. **Request / Incident** – Main view.
2. **Processing** – Conversation view.
3. **Assets** – Linked assets.
4. **Historical** view of the ticket.
5. **KB** – Knowledge base.
6. **Contracts**.

## Processing

You can find the following elements on a ticket.

1. In every task, follow-up, or solution, you will see first the following **information**:
   - Profile picture.
   - Creator.
   - Date.
2. In a **followup** you will see:
   - Follow-up description.
   - Private lock (if the follow-up is private).
3. In a **task** you will see:
   - A small icon that tells you if the task is done or not.
   - The Task Assigned Tech.
   - Task description.
   - Private lock (if the task is private).
4. **Actualtime** functions (an additional plugin is needed).
5. In a **validation request** you will see the user asked for the validation.
6. Main ticket information: Title and description.
7. Ticket **actions**. This button allows you to change the ticket status or category.

## Items

You can find all the items linked to a ticket.

1. Ticket information.
2. Item name.
3. Item information.
4. Item manufacturer.
5. Link to see more details and options of the item.

Additional options (some require corresponding plugins):

- Open new incident with Actualtime.
- Open new incident without Actualtime.
- List of pending tickets associated with the item.

## Item Raw Info

From the list of items in the ticket view, the raw information of the item can be accessed.

## Knowledge Base

If a ticket has a knowledge base associated with it, it will be accessible from the Ticket Processing section.

## Historical

This is a function only available in **Gapp White Label**.

1. Ticket information.
2. The user who made the change/update.
3. Description of change/update.
4. Date of change/update.

## Timeline

Depending on the settings set by the user on the GLPI server, a ticket's follow-ups and tasks can be displayed in two directions: normal or inverted.

## Copy Ticket URL to Clipboard

Clicking on the ticket ID will copy its URL to the clipboard.

1. Copy ticket URL button.
2. Ticket URL.
3. Share ticket.
4. Quick share.
