import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedUpdateManyWithoutContestTypeNestedInput } from '../moves/moves-unchecked-update-many-without-contest-type-nested.input';

@InputType()
export class ContestTypesUncheckedUpdateWithoutBerryFlavorsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MovesUncheckedUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    moves?: Identity<MovesUncheckedUpdateManyWithoutContestTypeNestedInput>;
}
