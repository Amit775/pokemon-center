import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonUpdateWithoutEncountersInput } from './pokemon-update-without-encounters.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutEncountersInput } from './pokemon-create-without-encounters.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutEncountersInput {

    @Field(() => PokemonUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutEncountersInput)
    update!: PokemonUpdateWithoutEncountersInput;

    @Field(() => PokemonCreateWithoutEncountersInput, {nullable:false})
    @Type(() => PokemonCreateWithoutEncountersInput)
    create!: PokemonCreateWithoutEncountersInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;
}
