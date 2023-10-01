

function Team({members}) {
    return (
        <div className="team">
            <h5 id="header">Team</h5>
            {members.map((member) => 
            <p>{member}</p>
            )}
        </div>
        
    )
}

export default Team