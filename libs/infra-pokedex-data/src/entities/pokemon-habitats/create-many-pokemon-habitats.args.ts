import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonHabitatsCreateManyInput } from './pokemon-habitats-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonHabitatsArgs {

    @Field(() => [PokemonHabitatsCreateManyInput], {nullable:false})
    @Type(() => PokemonHabitatsCreateManyInput)
    data!: Array<PokemonHabitatsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
