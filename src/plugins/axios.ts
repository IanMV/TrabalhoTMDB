import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmI1ZWM5NjMyMzQ2MjY0OWYwODM0MGI3NzNlMDEwMSIsIm5iZiI6MTc2MDM2NDAwNS4xOSwic3ViIjoiNjhlZDA1ZTVlNWJjZDVmOGRiZDY5MTBiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.bOdFJEEPm4xyguH6NLfr24XL3_0IbPeeP-GrOeYVfJ0`,
  },
});

export default api;