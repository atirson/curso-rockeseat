import { getRepository, Repository } from 'typeorm';

import IAppointmentRepository from "@modules/appointments/repositories/iAppintmentRepository";

import Appointment from '../entities/Appointment';

import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import appointmentRouter from '../../http/routes/appointments.routes';

// Data transfer object

class AppointmentsRepository  implements IAppointmentRepository {
  private ormRepository: Repository<Appointment>;

  constructor(){
    this.ormRepository = getRepository(Appointment);
  }

   public async findByDate(date: Date): Promise<Appointment | undefined> {

    /* const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date)

   );

  */
  const findAppointment = await this.ormRepository.findOne({
    where:{ date }
  });

  return findAppointment;
  }

  public async create({ provider_id, date }: ICreateAppointmentDTO): Promise<Appointment>{
    const appointment = this.ormRepository.create({
      provider_id,
      date
    });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
