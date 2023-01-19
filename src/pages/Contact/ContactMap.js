import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Mapa = () => {
  const position = [52.211282, 21.147641]
  const { t }=useTranslation()

  return (
    <>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: '70%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>{t("MapPopup")}</Popup>
        </Marker>
      </MapContainer>
    </>
  )
}
export default Mapa
