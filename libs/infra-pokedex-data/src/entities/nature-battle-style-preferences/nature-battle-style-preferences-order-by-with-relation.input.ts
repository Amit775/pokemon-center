import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { NaturesOrderByWithRelationInput } from '../natures/natures-order-by-with-relation.input';
import { MoveBattleStylesOrderByWithRelationInput } from '../move-battle-styles/move-battle-styles-order-by-with-relation.input';

@InputType()
export class NatureBattleStylePreferencesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_battle_style_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    low_hp_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    high_hp_preference?: `${SortOrder}`;

    @Field(() => NaturesOrderByWithRelationInput, {nullable:true})
    nature?: Identity<NaturesOrderByWithRelationInput>;

    @Field(() => MoveBattleStylesOrderByWithRelationInput, {nullable:true})
    battleStyle?: Identity<MoveBattleStylesOrderByWithRelationInput>;
}
