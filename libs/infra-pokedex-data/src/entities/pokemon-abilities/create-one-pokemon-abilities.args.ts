import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesCreateInput } from './pokemon-abilities-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonAbilitiesArgs {

    @Field(() => PokemonAbilitiesCreateInput, {nullable:false})
    @Type(() => PokemonAbilitiesCreateInput)
    data!: Identity<PokemonAbilitiesCreateInput>;
}
