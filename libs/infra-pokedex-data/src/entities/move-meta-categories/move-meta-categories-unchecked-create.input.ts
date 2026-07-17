import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveMetaUncheckedCreateNestedManyWithoutMetaCategoryInput } from '../move-meta/move-meta-unchecked-create-nested-many-without-meta-category.input';

@InputType()
export class MoveMetaCategoriesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MoveMetaUncheckedCreateNestedManyWithoutMetaCategoryInput, {nullable:true})
    meta?: MoveMetaUncheckedCreateNestedManyWithoutMetaCategoryInput;
}
