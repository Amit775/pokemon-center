import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PokedexesScalarWhereInput {

    @Field(() => [PokedexesScalarWhereInput], {nullable:true})
    AND?: Array<PokedexesScalarWhereInput>;

    @Field(() => [PokedexesScalarWhereInput], {nullable:true})
    OR?: Array<PokedexesScalarWhereInput>;

    @Field(() => [PokedexesScalarWhereInput], {nullable:true})
    NOT?: Array<PokedexesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    region_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_main_series?: Identity<IntFilter>;
}
