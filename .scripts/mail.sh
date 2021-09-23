#!/bin/bash
# icons depend on nerdfonts being installed
mail() {
    pakgs="$(ls /home/kim/.local/share/mail/*/INBOX | wc -l)"
    echo -e " $pakgs"
}
echo " ^c#ffffff^📬 ^c#cc6666^ $(mail) ulæste mails"
