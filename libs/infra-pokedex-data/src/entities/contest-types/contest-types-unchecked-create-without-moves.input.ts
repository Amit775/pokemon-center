import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BerryFlavorsUncheckedCreateNestedManyWithoutContestTypeInput } from '../berry-flavors/berry-flavors-unchecked-create-nested-many-without-contest-type.input';

@InputType()
export class ContestTypesUncheckedCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => BerryFlavorsUncheckedCreateNestedManyWithoutContestTypeInput, {nullable:true})
    berryFlavors?: BerryFlavorsUncheckedCreateNestedManyWithoutContestTypeInput;
}
