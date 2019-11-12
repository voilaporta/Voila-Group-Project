import React,{Component} from 'react';
import { connect } from 'react-redux';
import { RadialProgress } from 'react-radial-progress-indicator';
import './Dashboard.css';
class DashboardUser extends Component{
    journey=()=>{
        this.props.history.push('/buyer-journey')
    }
    render(){
        return(
            <div className="card">
     <div  >
           <img className="cardImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADd3d19fX3Q0NBwcHCWlpY+Pj5RUVFhYWHw8PDOzs7a2trX19fg4ODPz892dnbo6OhGRkbr6+tBQUFJSUn29vYiIiI5OTkzMzNYWFgsLCwUFBSEhIQhISHHx8e8vLxlZWWxsbELCwuJiYmnp6eXl5caGhqhoaGlpaWzh0iMAAAKs0lEQVR4nO1d62KqvBYUpdWi0rK1qPWGVmvP+7/gqVeYIQSCXAJf5t82NDI7yZp1SWKnY2BgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgoDn88XY7dup+ixLRPfQta74e1/0epWH0ZV3wOaz7TUqC+2nd0LfrfpdS4CysB5bdut+mBDgWwK37fQqHu0SGVttGcfSPCFrLdq3F8YAJ/pmbNlnUu0wg/rWHoisYwTOmbZmok7mYoGUtRnW/WyFwkvid0QbR8E5AaT5Fil7d7/c0ushoOvI+4YNN091wkonPP9vSRcM6b7ZFHSObwYXN6A0+bLRodHEE/71fPyZ5vH/cQHh9YLJ4yB8xnzd1LTpoRVcRX9tDiVw1UzS8b2BxAl1wcHgbqYtdHCaeiRMMNlbNm6hjlL3PmAvqkmg0zdyQDg4EitBs0RiR0AvfnkWjSRRddNXmCVFSc0XDmaEVSYyRXLSom6ZY1ImFBCXhQzNFw13AS8ujXKbYhJCYZOJfSqaCMhwL/RMbLBMoc5Ngfwxw1pJFnepuUTkexPe1X/5c1dVui3+CFOO+gVZw0RejCox9E5E5UuRR1Jmih6n7GQpc99E6w6El+dS4bMMygba/G21DipOGiEZ3g0OB7+kiCaToUEpVz1EcU1YNp+gY/RzLwrXooYXSsmxjk0zgOw5pHv6txQAeoAychmUbWyoTw1hx7U/cA3hE92CK6oNk8d8p0S2mqLVokC+6pDWIreFjuBa76O9pVbZRkAkETkVPW9FwV/BiM6lMIHAUWTR0oTjG9+rTFMWs6e5DOoo4UWd6RP22NKs2RPovTqcHH5xoLWpYtmEdJJlAK/rxFzn5a/hIe9HggBfjQSL4cgkNHTlFzco2Lk5CCtFphe4m148dnKgsGlpl4CZoRSmr1sXWL//e4L9AwzeZG43KNiQElFUjHfyKtpFFJdHQRhfJV6H5NJYQjFGkeBGXb21lGxt9UZYJpP/Ce5+R4jeOoh5lG7lMbEkmJvznJBrLAFp1EA0un6XqIENNNKqnOEJrQMUXmzyZ2AiewaIRQGvdouFhToZsAWVsvhLOH5BokANHZZtZtRbVgy9nmRhh61tyP9qKxgjzohSrymUCoUSxupDYRjNCxZchZtV2fkIvV+BEtQJorKtsQ+ESFV+2aGTiMoHw0dzIM3AVlW04HiQdxJklkgmEo50uUuK3Lw94U0bwjBSKlEctf6K60uILZbbfMh1T89HcsGhUXLZhmUALTlZUIhMIqUWttmwzxohvKSUolQkEUQygscqyzTt+FxVfhpRVk8sEgkSjrrINVR+o+LJNCZekINE4BdBaVdlmSDool4kMVjQKHUSDPBmqnCgKfRxKolFK2YZ8USq+2Ni6y3GamSbqJoDW8ss25cgEQioaZZdtKCCalUEwTTRKpWijnaTiyxB3dO/yf498FEs8bUNZF8qqbXENfqjoIIMycAE0lle2UZKJ3lNXJtSTgeOAl+LB53SQoSQaBZVtKLO9UEv8KsORh8QlZOC4NkE5GTQyb8+swRt8uY+KnsXpeYtKMkFZNZKJJ6xoFJWKBvkqcxzBd/yy3DrIkMeLhZZtaLOWXCZeCpiiN0hHsciyDYdLJBO4JJ6TCQSJxmwPrSQaT2TgiCBl1QIi+KRMIFg0iGJBZRuqws+lAe9HwXcjsWggRRKNfr616GJS4oS9vGPGRillkQm+1IEromxDVXiSiSG2FiQTiJJFw8YC2QITXESwMJlAKGXgVENiyl1T8WWLE7hAmUColG0UM3BbkgmUnACNTJEygeAMHJmbJ8o2NcoEIkU0cgdTNq5izqqVKxMIJV3MnIEbYXmFii9DNEHFywSCRGMVQCudQspYtuFwCe1wFTKBkFrUPGUbW1p8qZ5g4WUbitmp+LJF+i8F8pBAKhqqZZutNKsWYLjUK3kN3kGisZKKRkrZhtKGA6lMrCu7iNSRB1MUachGkXKu05qEPg7eIIYU6RTql8Tc7LEfWoMoIk8lfpXhUK0/gFY6kxSIerjABx/hhGZpC51UZWTCd9vh9wfQisHUOvE/3/9M7qNmgjGDauFEBRVLdrPQf4CQt3aCMYZWEGnswhj+Ji+gALpYhIYmwDVYlUxEEWMYGUXczbuR6AWZrEc8Qla0OpmIIM7wIRp0CcBB9v/vYT83ijkJBodeRhz26b3FGd5Fgy7DSQl2Jjt4+lL5yOfJ+D0+2yzBJj1NIGBobc4UaVtYak8+qufJzWtk0A1JRWq3IoZnc+NgNJclZYSBs4VegPWRkWDANyOn4JQ2UcUMrSP+M1tOTHgl7g2ZZeJXjeDf6s7HEJExmmP3IYJeVoKdV1WGaV1nYZjZk5wk9ZbsDlXJcHlI6iK7inkfwh5UdLBEhlNfbMWUthAIR1HJkymRYZ89kysUtxA4cXOjltkulSFn4M74UvYkSTRUne1yGcbSUyobkh/AUVSNJspmSBRz1YZANLIKfXUMQT5y1oYi5kZBJm4on2EkA5e7svAQjYN6D+UzDDNwT9SGJldt/ckxBypg2HFe8/7/h/Dd42Hv5ZnkVTDs+N7+cMz1egWgEoa1wjA0DGMwDCuHYWgYxlAZw0vF9St9L2BjGd6Tp0Hag01l6N7z2N9p2zqayjDMcqWlN5vKcPf4mrSsQVMZhsmbQcqThqFhGINhWBAMwxCGoWEYg2FYEAzDEIZhuxgO1j/rhJ8E1ouht38Nt38pMDyO/I4/+p/2DN3DILqNKzvD4+0T2tujG0O/R7f/Z2b4eS+c+IJfgNCHYXwPV2aG4W6uPfehD0NHsH8lM8MwLTeO96IJQ0+0eyUzw3DD7lDQjRYMvZ3ohTIzPDw+StqsVTfDhH18mRnO7kek6WJefRiKpqgKw/t9Jz5vQdKFYZIBVFD8wXHSmRzTnJq6GDrCX/lRY2hZq9MqoZv6GcLeqtVbKItt8bzhiqj5sbNrHcPoe063LYyeonfdXM7atI5hEDEQF/+ydQwjAc+127YxjJ6Yuh6ubRNDfww+yPL6aXsYOgHtZF+3jOE2dhhh3yqG/k/89wrtNjEUnGV43KhRI8PwraZPEhQHvF7NDL3IvDodnrqVXRzwfk3qZfi7gDs2l9KjvikExWe67ncz1sNwErcLy9z3Qf4Ivvt7/sgI1sJwJHw+yEeQLjGzloPdR+81vAqtDoZ2wonpbdIfyOCgDg5+gi5O+BoY0mXsIWZ5bp7HY9u/8WvsqmfoJ2TCrKy/gIK9RV3Rb9HFp9UzDJJzkKtfZYbRJf0tNFaVM0w8knyG7KodMaITQnx7RuUMt9K/OQr/RoKIqiZMgOwMRbKTg2G0m/7vpOPso3nXlJPJzthGRP6/NkduvCASEk+FD4RPJhuIBOxEHQYRQzq4Gpbodd/9/dhlSqOH/Rn35HUE3bC5O6M+6ONnEBIcnSnN1rcHu6lbBzRDeIyVlvhjMd5vcbkaoIRD+xojHCuqtN4v+g8P6V/8croGuQEIPZgJtbzeiD8oXe5NpnuQG4CQoUMtNytsh590/xMMXYUrjrTALHSSHdoYcpul4cWylxtJfXlRXT9E7lXx0Zjef8Uj3DFyzQC4spuE9MMgGudgKukRnt+v+Xy7JZXcQ3Mm6maNuSfv9TFRB5FA+EJpeXjcHu+73abAZf/T9+4tcJ3CmVLs2Zbi/wRrtJV2UMqUAAAAAElFTkSuQmCC" 
/> 
 <div className="status"  >
    <h3 >Status</h3>
      <RadialProgress
      width={50}
      height={50}
      steps={10}
      step={1}
    />
    </div>
         </div>
         </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default connect(mapStateToProps)(DashboardUser);
  
