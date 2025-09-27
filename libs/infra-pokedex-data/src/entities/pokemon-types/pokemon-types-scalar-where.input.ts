import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonTypesScalarWhereInput {

    @Field(() => [PokemonTypesScalarWhereInput], {nullable:true})
    AND?: Array<PokemonTypesScalarWhereInput>;

    @Field(() => [PokemonTypesScalarWhereInput], {nullable:true})
    OR?: Array<PokemonTypesScalarWhereInput>;

    @Field(() => [PokemonTypesScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonTypesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;
}
