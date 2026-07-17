import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesUncheckedCreateNestedManyWithoutFirmnessInput } from '../berries/berries-unchecked-create-nested-many-without-firmness.input';

@InputType()
export class BerryFirmnessUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => BerriesUncheckedCreateNestedManyWithoutFirmnessInput, {nullable:true})
    berries?: Identity<BerriesUncheckedCreateNestedManyWithoutFirmnessInput>;
}
