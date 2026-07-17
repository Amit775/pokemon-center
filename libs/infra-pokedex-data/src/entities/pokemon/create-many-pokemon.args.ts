import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonCreateManyInput } from './pokemon-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonArgs {

    @Field(() => [PokemonCreateManyInput], {nullable:false})
    @Type(() => PokemonCreateManyInput)
    data!: Array<PokemonCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
