import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';
import { BerryFirmnessScalarRelationFilter } from '../berry-firmness/berry-firmness-scalar-relation-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';
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
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    firmness_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    natural_gift_power?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    natural_gift_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    size?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    max_harvest?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    growth_time?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    soil_dryness?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    smoothness?: Identity<IntFilter>;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    item?: Identity<ItemsScalarRelationFilter>;

    @Field(() => BerryFirmnessScalarRelationFilter, {nullable:true})
    firmness?: Identity<BerryFirmnessScalarRelationFilter>;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    naturalGiftType?: Identity<TypesScalarRelationFilter>;

    @Field(() => BerryFlavorsListRelationFilter, {nullable:true})
    flavors?: Identity<BerryFlavorsListRelationFilter>;
}
