import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class PokemonScalarWhereInput {

    @Field(() => [PokemonScalarWhereInput], {nullable:true})
    AND?: Array<PokemonScalarWhereInput>;

    @Field(() => [PokemonScalarWhereInput], {nullable:true})
    OR?: Array<PokemonScalarWhereInput>;

    @Field(() => [PokemonScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    height?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    weight?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_experience?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    order?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    is_default?: IntFilter;
}
