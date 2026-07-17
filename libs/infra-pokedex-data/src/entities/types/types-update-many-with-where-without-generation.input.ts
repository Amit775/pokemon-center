import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesScalarWhereInput } from './types-scalar-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateManyMutationInput } from './types-update-many-mutation.input';

@InputType()
export class TypesUpdateManyWithWhereWithoutGenerationInput {

    @Field(() => TypesScalarWhereInput, {nullable:false})
    @Type(() => TypesScalarWhereInput)
    where!: Identity<TypesScalarWhereInput>;

    @Field(() => TypesUpdateManyMutationInput, {nullable:false})
    @Type(() => TypesUpdateManyMutationInput)
    data!: Identity<TypesUpdateManyMutationInput>;
}
