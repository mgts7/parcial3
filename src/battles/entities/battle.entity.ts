import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Battles {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  contestant_1: string;

  @Column({ type: 'uuid', nullable: true})
  contestant_2: string;

  @Column({ type: 'uuid', nullable: true })
  winner_id: string;

  @Column({ type: 'boolean' })
  death_occurred: boolean;

  @Column()
  injuries: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
  winner: any;
  loser: any;
}