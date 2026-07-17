import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsUpdateManyWithoutContestTypeNestedInput } from '../berry-flavors/berry-flavors-update-many-without-contest-type-nested.input';

@InputType()
export class ContestTypesUpdateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => BerryFlavorsUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsUpdateManyWithoutContestTypeNestedInput>;
}
