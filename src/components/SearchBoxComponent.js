import React, {useState }  from "react";


const returnMatch = term => planets_data => console.log(planets_data.filter(v => v.name.toLowerCase() === term.toLowerCase() ) )


const SearchBoxComponent = ({ planets_data }) => {
                                const [term, setTerm ] = useState("");

                            return   <div className="ui input focus">
                                        <input 
                                            type="text" 
                                            placeholder="Search..." 
                                            onKeyDown={ (e) => e.key === "Enter" ? returnMatch(term)(planets_data) : null } 
                                            value={term}
                                            onChange={e => setTerm(e.target.value)}
                                        />
                                    </div>
}

export default SearchBoxComponent ; 