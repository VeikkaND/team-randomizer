

function Team({members}) {
    return (
        <div>
            <h5>Team</h5>
            {members.map((member) => 
            <p>{member}</p>
            )}
        </div>
        
    )
}

export default Team