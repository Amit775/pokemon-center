import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonDexNumbersCreateInput } from './pokemon-dex-numbers-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonDexNumbersArgs {

    @Field(() => PokemonDexNumbersCreateInput, {nullable:false})
    @Type(() => PokemonDexNumbersCreateInput)
    data!: PokemonDexNumbersCreateInput;
}
