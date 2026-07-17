import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonGameIndicesCreateInput } from './pokemon-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonGameIndicesArgs {

    @Field(() => PokemonGameIndicesCreateInput, {nullable:false})
    @Type(() => PokemonGameIndicesCreateInput)
    data!: PokemonGameIndicesCreateInput;
}
