import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonAbilitiesCreateInput } from './pokemon-abilities-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonAbilitiesArgs {

    @Field(() => PokemonAbilitiesCreateInput, {nullable:false})
    @Type(() => PokemonAbilitiesCreateInput)
    data!: PokemonAbilitiesCreateInput;
}
