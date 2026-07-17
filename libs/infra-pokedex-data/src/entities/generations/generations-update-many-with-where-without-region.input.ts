import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsScalarWhereInput } from './generations-scalar-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateManyMutationInput } from './generations-update-many-mutation.input';

@InputType()
export class GenerationsUpdateManyWithWhereWithoutRegionInput {

    @Field(() => GenerationsScalarWhereInput, {nullable:false})
    @Type(() => GenerationsScalarWhereInput)
    where!: GenerationsScalarWhereInput;

    @Field(() => GenerationsUpdateManyMutationInput, {nullable:false})
    @Type(() => GenerationsUpdateManyMutationInput)
    data!: GenerationsUpdateManyMutationInput;
}
