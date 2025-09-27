import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
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
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    region_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    is_main_series?: IntFilter;
}
