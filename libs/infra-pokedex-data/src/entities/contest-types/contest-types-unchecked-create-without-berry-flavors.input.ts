import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesUncheckedCreateNestedManyWithoutContestTypeInput } from '../moves/moves-unchecked-create-nested-many-without-contest-type.input';

@InputType()
export class ContestTypesUncheckedCreateWithoutBerryFlavorsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MovesUncheckedCreateNestedManyWithoutContestTypeInput, {nullable:true})
    moves?: MovesUncheckedCreateNestedManyWithoutContestTypeInput;
}
