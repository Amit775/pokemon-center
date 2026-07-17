import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCategoriesUpdateWithoutMetaInput } from './move-meta-categories-update-without-meta.input';
import { Type } from 'class-transformer';
import { MoveMetaCategoriesCreateWithoutMetaInput } from './move-meta-categories-create-without-meta.input';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';

@InputType()
export class MoveMetaCategoriesUpsertWithoutMetaInput {

    @Field(() => MoveMetaCategoriesUpdateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaCategoriesUpdateWithoutMetaInput)
    update!: MoveMetaCategoriesUpdateWithoutMetaInput;

    @Field(() => MoveMetaCategoriesCreateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaCategoriesCreateWithoutMetaInput)
    create!: MoveMetaCategoriesCreateWithoutMetaInput;

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    @Type(() => MoveMetaCategoriesWhereInput)
    where?: MoveMetaCategoriesWhereInput;
}
