import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedManyWithoutContestTypeInput } from '../moves/moves-create-nested-many-without-contest-type.input';

@InputType()
export class ContestTypesCreateWithoutBerryFlavorsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MovesCreateNestedManyWithoutContestTypeInput, {nullable:true})
    moves?: Identity<MovesCreateNestedManyWithoutContestTypeInput>;
}
