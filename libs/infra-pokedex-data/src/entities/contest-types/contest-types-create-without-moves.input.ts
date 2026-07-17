import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsCreateNestedManyWithoutContestTypeInput } from '../berry-flavors/berry-flavors-create-nested-many-without-contest-type.input';

@InputType()
export class ContestTypesCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => BerryFlavorsCreateNestedManyWithoutContestTypeInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsCreateNestedManyWithoutContestTypeInput>;
}
