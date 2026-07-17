import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonDexNumbersCreateManySpeciesInput } from './pokemon-dex-numbers-create-many-species.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonDexNumbersCreateManySpeciesInputEnvelope {

    @Field(() => [PokemonDexNumbersCreateManySpeciesInput], {nullable:false})
    @Type(() => PokemonDexNumbersCreateManySpeciesInput)
    data!: Array<PokemonDexNumbersCreateManySpeciesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
