import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateManyWithoutContestTypeNestedInput } from '../moves/moves-update-many-without-contest-type-nested.input';
import { BerryFlavorsUpdateManyWithoutContestTypeNestedInput } from '../berry-flavors/berry-flavors-update-many-without-contest-type-nested.input';

@InputType()
export class ContestTypesUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MovesUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    moves?: Identity<MovesUpdateManyWithoutContestTypeNestedInput>;

    @Field(() => BerryFlavorsUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsUpdateManyWithoutContestTypeNestedInput>;
}
