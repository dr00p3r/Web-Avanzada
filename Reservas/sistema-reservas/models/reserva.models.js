class Reserva {
    constructor(id, tipo, nombre_cliente, fecha, hora, detalles, creado_en) {
      this.id = id;
      this.tipo = tipo;
      this.nombre_cliente = nombre_cliente;
      this.fecha = fecha;
      this.hora = hora;
      this.detalles = detalles;
      this.creado_en = creado_en;
    }
  }
  
  module.exports = Reserva;
  