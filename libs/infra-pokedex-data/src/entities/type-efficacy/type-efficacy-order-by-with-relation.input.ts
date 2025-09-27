import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';

@InputType()
export class TypeEfficacyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    damage_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    damage_factor?: `${SortOrder}`;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    damageType?: TypesOrderByWithRelationInput;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    targetType?: TypesOrderByWithRelationInput;
}
