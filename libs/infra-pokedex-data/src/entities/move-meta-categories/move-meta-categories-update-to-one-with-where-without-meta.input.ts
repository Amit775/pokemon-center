import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';
import { Type } from 'class-transformer';
import { MoveMetaCategoriesUpdateWithoutMetaInput } from './move-meta-categories-update-without-meta.input';

@InputType()
export class MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput {

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    @Type(() => MoveMetaCategoriesWhereInput)
    where?: MoveMetaCategoriesWhereInput;

    @Field(() => MoveMetaCategoriesUpdateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaCategoriesUpdateWithoutMetaInput)
    data!: MoveMetaCategoriesUpdateWithoutMetaInput;
}
