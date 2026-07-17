import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BerriesCreateNestedManyWithoutFirmnessInput } from '../berries/berries-create-nested-many-without-firmness.input';

@InputType()
export class BerryFirmnessCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => BerriesCreateNestedManyWithoutFirmnessInput, {nullable:true})
    berries?: BerriesCreateNestedManyWithoutFirmnessInput;
}
