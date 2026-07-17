import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonDexNumbersScalarWhereInput {

    @Field(() => [PokemonDexNumbersScalarWhereInput], {nullable:true})
    AND?: Array<PokemonDexNumbersScalarWhereInput>;

    @Field(() => [PokemonDexNumbersScalarWhereInput], {nullable:true})
    OR?: Array<PokemonDexNumbersScalarWhereInput>;

    @Field(() => [PokemonDexNumbersScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonDexNumbersScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pokedex_number?: Identity<IntFilter>;
}
