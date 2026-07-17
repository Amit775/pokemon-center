import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsCreateInput } from './pokemon-colors-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonColorsArgs {

    @Field(() => PokemonColorsCreateInput, {nullable:false})
    @Type(() => PokemonColorsCreateInput)
    data!: Identity<PokemonColorsCreateInput>;
}
