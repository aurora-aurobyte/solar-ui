
type Props = {
    skilltitle:string,
    dataWidth:string,
    dataSpeed:string,
    dataStop:string,
    quantity:number,
}

export default function SkillItem(props: Props) {
    const {skilltitle,dataSpeed,dataStop,dataWidth,quantity} =props
  return (
    <div className="skills">
    <div className="skill-item">
        <div className="skill-header">
            <div className="skill-title">{skilltitle}</div>
        </div>
        <div className="skill-bar">
            <div className="bar-inner">
                <div className="bar progress-line" data-width={dataWidth}>
                    <div className="skill-percentage">
                        <div className="count-box"><span className="count-text" data-speed={dataSpeed} data-stop={dataStop}>{quantity}</span>%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}