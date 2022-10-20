document
  .querySelector(".notifications > .header > .mark-read")
  .addEventListener("click", () => {
    let unreadNotifications = document.querySelectorAll(
      ".notifications > .list > .notification[status=unread]"
    )

    for (let notification of unreadNotifications) {
      notification.setAttribute("status", "read")

      updateUnreadCount()
    }
  })

function updateUnreadCount() {
  let unreadNotifications = document.querySelectorAll(
    ".notifications > .list > .notification[status=unread]"
  )
  let counter = document.querySelector(
    ".notifications > .header > .title > .count"
  )
  counter.textContent = unreadNotifications.length
}

updateUnreadCount()
