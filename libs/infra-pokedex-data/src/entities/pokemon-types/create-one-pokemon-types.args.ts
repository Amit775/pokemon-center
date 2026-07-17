import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonTypesCreateInput } from './pokemon-types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonTypesArgs {

    @Field(() => PokemonTypesCreateInput, {nullable:false})
    @Type(() => PokemonTypesCreateInput)
    data!: PokemonTypesCreateInput;
}
