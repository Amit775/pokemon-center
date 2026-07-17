import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonDexNumbersCreateManyPokedexInput } from './pokemon-dex-numbers-create-many-pokedex.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonDexNumbersCreateManyPokedexInputEnvelope {

    @Field(() => [PokemonDexNumbersCreateManyPokedexInput], {nullable:false})
    @Type(() => PokemonDexNumbersCreateManyPokedexInput)
    data!: Array<PokemonDexNumbersCreateManyPokedexInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
