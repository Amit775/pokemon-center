import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BerryFlavorsUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    flavor?: number;
}
