import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsCreateInput } from './pokemon-form-generations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonFormGenerationsArgs {

    @Field(() => PokemonFormGenerationsCreateInput, {nullable:false})
    @Type(() => PokemonFormGenerationsCreateInput)
    data!: Identity<PokemonFormGenerationsCreateInput>;
}
