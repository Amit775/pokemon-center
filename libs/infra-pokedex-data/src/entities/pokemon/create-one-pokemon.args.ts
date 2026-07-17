import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonCreateInput } from './pokemon-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonArgs {

    @Field(() => PokemonCreateInput, {nullable:false})
    @Type(() => PokemonCreateInput)
    data!: PokemonCreateInput;
}
