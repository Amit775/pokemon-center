import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeGameIndicesScalarWhereInput } from './type-game-indices-scalar-where.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesUpdateManyMutationInput } from './type-game-indices-update-many-mutation.input';

@InputType()
export class TypeGameIndicesUpdateManyWithWhereWithoutTypeInput {

    @Field(() => TypeGameIndicesScalarWhereInput, {nullable:false})
    @Type(() => TypeGameIndicesScalarWhereInput)
    where!: TypeGameIndicesScalarWhereInput;

    @Field(() => TypeGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateManyMutationInput)
    data!: TypeGameIndicesUpdateManyMutationInput;
}
