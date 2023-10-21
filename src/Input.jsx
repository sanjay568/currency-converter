function Input({labelText,inputText,fromChangeText,ref1}) {
    return (
        <>
         <label>{labelText}</label>
         { fromChangeText!=="" ?
         <input id={ref1} type="text" onKeyUp={(e) => fromChangeText(e.target.value)}/>
         :
         <input id={ref1} type="text" />}
        </>
    )
}

export default Input;