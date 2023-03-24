import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { OptionItem } from './HeaderComponents';

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 2,
    room: 1
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  }

  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
        </div>
        {type !== "list" &&
          <>
            <h1 className="headerTitle">Book Your Next Appointment with Ease</h1>
            <p className="headerDescription">
              Reservio is the ultimate booking app designed to help you find and book the services you need, when you need them.
              Our easy-to-use interface lets you browse through a wide range of services, read reviews from other customers, and book appointments with just a few clicks.
              With Reservio, you can manage your appointments, receive notifications, and stay up-to-date with the latest promotions and discounts.
            </p>
            <button className="headerButton">Sign In / Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon className='headerIcon' icon={faBed} />
                <input
                  type="text"
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                  onChange={e => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon className='headerIcon' icon={faCalendarDays} />
                <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
                  {
                    `${format(date[0].startDate, "MM/dd/yyyy")} to 
                ${format(date[0].endDate, "MM/dd/yyyy")}`
                  }
                </span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={date}
                  className='date'
                />}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon className='headerIcon' icon={faPerson} />
                <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{
                  `${options.adult} adults - ${options.children} children - ${options.room} rooms`
                }</span>
                {openOptions && <div className="options">
                  <OptionItem
                    optionType="Adult"
                    optionValue="adult"
                    handleOption={handleOption}
                    optionCounter={options.adult}
                  />
                  <OptionItem
                    optionType="Children"
                    optionValue="children"
                    handleOption={handleOption}
                    optionCounter={options.children}
                  />
                  <OptionItem
                    optionType="Room"
                    optionValue="room"
                    handleOption={handleOption}
                    optionCounter={options.room}
                  />
                </div>}
              </div>
              <div className="headerSearchItem">
                <button
                  className="headerButton"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>}
      </div>
    </div>
  )
}

export default Header