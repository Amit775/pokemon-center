import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeEfficacyScalarWhereInput } from './type-efficacy-scalar-where.input';
import { Type } from 'class-transformer';
import { TypeEfficacyUpdateManyMutationInput } from './type-efficacy-update-many-mutation.input';

@InputType()
export class TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput {

    @Field(() => TypeEfficacyScalarWhereInput, {nullable:false})
    @Type(() => TypeEfficacyScalarWhereInput)
    where!: Identity<TypeEfficacyScalarWhereInput>;

    @Field(() => TypeEfficacyUpdateManyMutationInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateManyMutationInput)
    data!: Identity<TypeEfficacyUpdateManyMutationInput>;
}
