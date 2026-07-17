import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeEfficacyUpdateManyMutationInput } from './type-efficacy-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTypeEfficacyArgs {

    @Field(() => TypeEfficacyUpdateManyMutationInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateManyMutationInput)
    data!: Identity<TypeEfficacyUpdateManyMutationInput>;

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    @Type(() => TypeEfficacyWhereInput)
    where?: Identity<TypeEfficacyWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
