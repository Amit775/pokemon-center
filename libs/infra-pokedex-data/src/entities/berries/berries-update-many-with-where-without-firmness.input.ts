import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesScalarWhereInput } from './berries-scalar-where.input';
import { Type } from 'class-transformer';
import { BerriesUpdateManyMutationInput } from './berries-update-many-mutation.input';

@InputType()
export class BerriesUpdateManyWithWhereWithoutFirmnessInput {

    @Field(() => BerriesScalarWhereInput, {nullable:false})
    @Type(() => BerriesScalarWhereInput)
    where!: BerriesScalarWhereInput;

    @Field(() => BerriesUpdateManyMutationInput, {nullable:false})
    @Type(() => BerriesUpdateManyMutationInput)
    data!: BerriesUpdateManyMutationInput;
}
