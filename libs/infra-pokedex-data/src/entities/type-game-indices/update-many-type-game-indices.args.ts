import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeGameIndicesUpdateManyMutationInput } from './type-game-indices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesWhereInput } from './type-game-indices-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTypeGameIndicesArgs {

    @Field(() => TypeGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateManyMutationInput)
    data!: TypeGameIndicesUpdateManyMutationInput;

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    @Type(() => TypeGameIndicesWhereInput)
    where?: TypeGameIndicesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
