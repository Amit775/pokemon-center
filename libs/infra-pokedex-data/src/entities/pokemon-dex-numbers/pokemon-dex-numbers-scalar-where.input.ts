import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_number?: IntFilter;
}
