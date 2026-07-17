import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateOneRequiredWithoutMetaNestedInput } from '../moves/moves-update-one-required-without-meta-nested.input';
import { MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput } from '../move-meta-categories/move-meta-categories-update-one-required-without-meta-nested.input';
import { MoveMetaAilmentsUpdateOneWithoutMetaNestedInput } from '../move-meta-ailments/move-meta-ailments-update-one-without-meta-nested.input';

@InputType()
export class MoveMetaUpdateWithoutStatChangesInput {

    @Field(() => Int, {nullable:true})
    min_hits?: number;

    @Field(() => Int, {nullable:true})
    max_hits?: number;

    @Field(() => Int, {nullable:true})
    min_turns?: number;

    @Field(() => Int, {nullable:true})
    max_turns?: number;

    @Field(() => Int, {nullable:true})
    drain?: number;

    @Field(() => Int, {nullable:true})
    healing?: number;

    @Field(() => Int, {nullable:true})
    crit_rate?: number;

    @Field(() => Int, {nullable:true})
    ailment_chance?: number;

    @Field(() => Int, {nullable:true})
    flinch_chance?: number;

    @Field(() => Int, {nullable:true})
    stat_chance?: number;

    @Field(() => MovesUpdateOneRequiredWithoutMetaNestedInput, {nullable:true})
    move?: Identity<MovesUpdateOneRequiredWithoutMetaNestedInput>;

    @Field(() => MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput, {nullable:true})
    metaCategory?: Identity<MoveMetaCategoriesUpdateOneRequiredWithoutMetaNestedInput>;

    @Field(() => MoveMetaAilmentsUpdateOneWithoutMetaNestedInput, {nullable:true})
    metaAilment?: Identity<MoveMetaAilmentsUpdateOneWithoutMetaNestedInput>;
}
