import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonDexNumbersCreateManyInput } from './pokemon-dex-numbers-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonDexNumbersArgs {

    @Field(() => [PokemonDexNumbersCreateManyInput], {nullable:false})
    @Type(() => PokemonDexNumbersCreateManyInput)
    data!: Array<PokemonDexNumbersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
