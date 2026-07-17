import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesCreateInput } from './pokemon-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonGameIndicesArgs {

    @Field(() => PokemonGameIndicesCreateInput, {nullable:false})
    @Type(() => PokemonGameIndicesCreateInput)
    data!: Identity<PokemonGameIndicesCreateInput>;
}
