import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonSpeciesCreateManyInput } from './pokemon-species-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonSpeciesArgs {

    @Field(() => [PokemonSpeciesCreateManyInput], {nullable:false})
    @Type(() => PokemonSpeciesCreateManyInput)
    data!: Array<PokemonSpeciesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
