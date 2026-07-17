import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesScalarWhereInput } from './types-scalar-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateManyMutationInput } from './types-update-many-mutation.input';

@InputType()
export class TypesUpdateManyWithWhereWithoutDamageClassInput {

    @Field(() => TypesScalarWhereInput, {nullable:false})
    @Type(() => TypesScalarWhereInput)
    where!: TypesScalarWhereInput;

    @Field(() => TypesUpdateManyMutationInput, {nullable:false})
    @Type(() => TypesUpdateManyMutationInput)
    data!: TypesUpdateManyMutationInput;
}
