import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyInput } from './pokemon-evolution-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonEvolutionArgs {

    @Field(() => [PokemonEvolutionCreateManyInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyInput)
    data!: Array<PokemonEvolutionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
