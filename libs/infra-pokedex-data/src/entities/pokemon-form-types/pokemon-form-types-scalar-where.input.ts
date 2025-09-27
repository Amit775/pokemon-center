import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonFormTypesScalarWhereInput {

    @Field(() => [PokemonFormTypesScalarWhereInput], {nullable:true})
    AND?: Array<PokemonFormTypesScalarWhereInput>;

    @Field(() => [PokemonFormTypesScalarWhereInput], {nullable:true})
    OR?: Array<PokemonFormTypesScalarWhereInput>;

    @Field(() => [PokemonFormTypesScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonFormTypesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;
}
