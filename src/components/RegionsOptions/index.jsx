export function RegionsOptions({labelName, title, handleInputChange, regionsList, formValues, placeholder}) {
    return ( 
        <>
            <label htmlFor={labelName}>{title}</label>
            <select
            id={labelName}
            name={labelName}
            onChange={handleInputChange}
            value={formValues[labelName]}
            >
                <option>{placeholder}</option>
                {regionsList.map((region) => {
                    return <option key={region.id || region.code }>{region.name_ptbr}</option>
                })}
            </select>
        </>
     );
}


