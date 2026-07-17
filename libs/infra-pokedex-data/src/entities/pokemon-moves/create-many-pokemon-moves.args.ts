import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMovesCreateManyInput } from './pokemon-moves-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonMovesArgs {

    @Field(() => [PokemonMovesCreateManyInput], {nullable:false})
    @Type(() => PokemonMovesCreateManyInput)
    data!: Array<PokemonMovesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
