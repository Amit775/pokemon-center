import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMovesCreateInput } from './pokemon-moves-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonMovesArgs {

    @Field(() => PokemonMovesCreateInput, {nullable:false})
    @Type(() => PokemonMovesCreateInput)
    data!: PokemonMovesCreateInput;
}
