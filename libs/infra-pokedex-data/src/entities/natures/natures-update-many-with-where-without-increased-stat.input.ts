import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesScalarWhereInput } from './natures-scalar-where.input';
import { Type } from 'class-transformer';
import { NaturesUpdateManyMutationInput } from './natures-update-many-mutation.input';

@InputType()
export class NaturesUpdateManyWithWhereWithoutIncreasedStatInput {

    @Field(() => NaturesScalarWhereInput, {nullable:false})
    @Type(() => NaturesScalarWhereInput)
    where!: Identity<NaturesScalarWhereInput>;

    @Field(() => NaturesUpdateManyMutationInput, {nullable:false})
    @Type(() => NaturesUpdateManyMutationInput)
    data!: Identity<NaturesUpdateManyMutationInput>;
}
