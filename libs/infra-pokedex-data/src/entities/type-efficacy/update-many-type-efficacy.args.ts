import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeEfficacyUpdateManyMutationInput } from './type-efficacy-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTypeEfficacyArgs {

    @Field(() => TypeEfficacyUpdateManyMutationInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateManyMutationInput)
    data!: TypeEfficacyUpdateManyMutationInput;

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    @Type(() => TypeEfficacyWhereInput)
    where?: TypeEfficacyWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
