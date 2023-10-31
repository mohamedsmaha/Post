
export type NotificationElementsLangType = {
    AddSendToUser : (From : string) => JSX.Element ,
    AddAcppeted   : (To   : string) => JSX.Element ,
    AddRefused    : (To   : string) => JSX.Element

}
export type Notification_Lang = {
    NotificationObject : NotificationElementsLangType
}