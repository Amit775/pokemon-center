import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BerryFlavorsCreateManyBerryInput {

    @Field(() => Int, {nullable:false})
    contest_type_id!: number;

    @Field(() => Int, {nullable:false})
    flavor!: number;
}
