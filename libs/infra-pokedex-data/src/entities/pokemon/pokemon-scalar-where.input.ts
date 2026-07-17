import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PokemonScalarWhereInput {

    @Field(() => [PokemonScalarWhereInput], {nullable:true})
    AND?: Array<PokemonScalarWhereInput>;

    @Field(() => [PokemonScalarWhereInput], {nullable:true})
    OR?: Array<PokemonScalarWhereInput>;

    @Field(() => [PokemonScalarWhereInput], {nullable:true})
    NOT?: Array<PokemonScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    height?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    weight?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    base_experience?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_default?: Identity<IntFilter>;
}
