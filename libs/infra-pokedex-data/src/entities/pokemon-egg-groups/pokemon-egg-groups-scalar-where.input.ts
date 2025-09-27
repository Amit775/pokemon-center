import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class PokemonEggGroupsScalarWhereInput {

    @Field(() => [PokemonEggGroupsScalarWhereInput], {nullable:true})
    AND?: Array<PokemonEggGroupsScalarWhereInput>;

    @Field(() => [PokemonEggGroupsScalarWhereInput], {nullable:true})
    OR?: Array<PokemonEggGroupsScalarWhereInput>;

    @Field(() => [PokemonEggGroupsScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonEggGroupsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    egg_group_id?: IntFilter;
}
