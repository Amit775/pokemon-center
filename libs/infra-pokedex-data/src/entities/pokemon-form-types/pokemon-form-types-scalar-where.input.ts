import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
    pokemon_form_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    slot?: Identity<IntFilter>;
}
