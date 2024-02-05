const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tg.close();
      };

      const onToggleButton = () => {
        if(tg.MainButton.isVisibile){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
      };
    return{
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}