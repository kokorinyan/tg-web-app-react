const tg = window.Telegram.WebApp;


export function UseTelegram(){


    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.hide()
        } else {
            tg.MainButton.show();
        }
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onClose,
        onToggleButton

    }
}

