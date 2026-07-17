import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput } from '../berry-flavors/berry-flavors-unchecked-update-many-without-contest-type-nested.input';

@InputType()
export class ContestTypesUncheckedUpdateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput>;
}
