const ItemListContainer = (props) => {
let otroMensaje
if (props.mensaje) {
    otroMensaje = " Facilidades de pago"
} else {
    otroMensaje = "Amplia variedad de cilindradas"
}
return (
    <>
    <div className="alert alert-secondary container-sm border border-success  rounded-4" role="alert">
      {props.bienvenida}; {otroMensaje}  
    </div>
    </>
)
}

export default ItemListContainer;