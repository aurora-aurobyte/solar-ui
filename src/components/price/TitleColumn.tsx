

type Props = {
    subTitle:string,
    subtext:string,
    listOfStyleText:string[],
    footText:string,


}

export default function TitleColumn(props: Props) {
    const {subTitle,subtext,listOfStyleText,footText}=props
    return (
        <div className="sec-title">
            <span className="sub-title">{subTitle}</span>
            <h2>{subtext}</h2>
            <ul className="list-style-three">
                {listOfStyleText.map((item)=><li><i className="fa fa-check-circle mr-15"></i>{item}</li>)}
            </ul>
            <div className="text">{footText}</div>
        </div>
    )
}