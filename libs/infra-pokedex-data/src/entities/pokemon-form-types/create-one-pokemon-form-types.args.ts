import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormTypesCreateInput } from './pokemon-form-types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonFormTypesArgs {

    @Field(() => PokemonFormTypesCreateInput, {nullable:false})
    @Type(() => PokemonFormTypesCreateInput)
    data!: Identity<PokemonFormTypesCreateInput>;
}
