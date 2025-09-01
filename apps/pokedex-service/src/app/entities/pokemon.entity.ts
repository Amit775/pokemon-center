import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PokemonType } from './pokemon-type.entity';

@Entity()
@ObjectType()
export class Pokemon {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	@Field(() => Int)
	@Column()
	base_experience: number;

	@Field(() => Int)
	@Column()
	height: number;

	@Field(() => Int)
	@Column()
	weight: number;

	@Field(() => [PokemonType])
	@ManyToMany(() => PokemonType)
	@JoinTable({ name: 'pokemon_types' })
	types: PokemonType[];
}
