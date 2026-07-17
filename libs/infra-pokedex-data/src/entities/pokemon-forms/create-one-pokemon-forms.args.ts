import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsCreateInput } from './pokemon-forms-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonFormsArgs {

    @Field(() => PokemonFormsCreateInput, {nullable:false})
    @Type(() => PokemonFormsCreateInput)
    data!: Identity<PokemonFormsCreateInput>;
}
