import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TypeGameIndicesType_idGeneration_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;
}
