import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LocationsOrderByWithRelationInput } from '../locations/locations-order-by-with-relation.input';
import { GenerationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';

@InputType()
export class LocationGameIndicesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    location_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => LocationsOrderByWithRelationInput, {nullable:true})
    location?: LocationsOrderByWithRelationInput;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: GenerationsOrderByWithRelationInput;
}
