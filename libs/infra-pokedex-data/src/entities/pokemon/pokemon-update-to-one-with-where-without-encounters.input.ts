import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutEncountersInput } from './pokemon-update-without-encounters.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutEncountersInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => PokemonUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutEncountersInput)
    data!: PokemonUpdateWithoutEncountersInput;
}
