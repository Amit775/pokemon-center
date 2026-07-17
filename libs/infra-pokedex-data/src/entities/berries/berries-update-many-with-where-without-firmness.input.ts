import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesScalarWhereInput } from './berries-scalar-where.input';
import { Type } from 'class-transformer';
import { BerriesUpdateManyMutationInput } from './berries-update-many-mutation.input';

@InputType()
export class BerriesUpdateManyWithWhereWithoutFirmnessInput {

    @Field(() => BerriesScalarWhereInput, {nullable:false})
    @Type(() => BerriesScalarWhereInput)
    where!: Identity<BerriesScalarWhereInput>;

    @Field(() => BerriesUpdateManyMutationInput, {nullable:false})
    @Type(() => BerriesUpdateManyMutationInput)
    data!: Identity<BerriesUpdateManyMutationInput>;
}
