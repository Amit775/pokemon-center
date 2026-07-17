import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateInput } from './pokemon-items-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonItemsArgs {

    @Field(() => PokemonItemsCreateInput, {nullable:false})
    @Type(() => PokemonItemsCreateInput)
    data!: Identity<PokemonItemsCreateInput>;
}
