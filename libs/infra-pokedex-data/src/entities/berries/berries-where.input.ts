import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';
import { BerryFirmnessScalarRelationFilter } from '../berry-firmness/berry-firmness-scalar-relation-filter.input';
import { TypesNullableScalarRelationFilter } from '../types/types-nullable-scalar-relation-filter.input';
import { BerryFlavorsListRelationFilter } from '../berry-flavors/berry-flavors-list-relation-filter.input';

@InputType()
export class BerriesWhereInput {

    @Field(() => [BerriesWhereInput], {nullable:true})
    AND?: Array<BerriesWhereInput>;

    @Field(() => [BerriesWhereInput], {nullable:true})
    OR?: Array<BerriesWhereInput>;

    @Field(() => [BerriesWhereInput], {nullable:true})
    NOT?: Array<BerriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    firmness_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    natural_gift_power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    natural_gift_type_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    size?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_harvest?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    growth_time?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    soil_dryness?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    smoothness?: IntFilter;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    item?: ItemsScalarRelationFilter;

    @Field(() => BerryFirmnessScalarRelationFilter, {nullable:true})
    firmness?: BerryFirmnessScalarRelationFilter;

    @Field(() => TypesNullableScalarRelationFilter, {nullable:true})
    naturalGiftType?: TypesNullableScalarRelationFilter;

    @Field(() => BerryFlavorsListRelationFilter, {nullable:true})
    flavors?: BerryFlavorsListRelationFilter;
}
