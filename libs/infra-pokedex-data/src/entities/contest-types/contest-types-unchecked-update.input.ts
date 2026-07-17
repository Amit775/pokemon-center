import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedUpdateManyWithoutContestTypeNestedInput } from '../moves/moves-unchecked-update-many-without-contest-type-nested.input';
import { BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput } from '../berry-flavors/berry-flavors-unchecked-update-many-without-contest-type-nested.input';

@InputType()
export class ContestTypesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MovesUncheckedUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    moves?: Identity<MovesUncheckedUpdateManyWithoutContestTypeNestedInput>;

    @Field(() => BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput>;
}
