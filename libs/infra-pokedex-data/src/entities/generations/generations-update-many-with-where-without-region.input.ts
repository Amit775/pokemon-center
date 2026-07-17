import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsScalarWhereInput } from './generations-scalar-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateManyMutationInput } from './generations-update-many-mutation.input';

@InputType()
export class GenerationsUpdateManyWithWhereWithoutRegionInput {

    @Field(() => GenerationsScalarWhereInput, {nullable:false})
    @Type(() => GenerationsScalarWhereInput)
    where!: Identity<GenerationsScalarWhereInput>;

    @Field(() => GenerationsUpdateManyMutationInput, {nullable:false})
    @Type(() => GenerationsUpdateManyMutationInput)
    data!: Identity<GenerationsUpdateManyMutationInput>;
}
