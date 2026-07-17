import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaCategoriesCreateManyInput } from './move-meta-categories-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoveMetaCategoriesArgs {

    @Field(() => [MoveMetaCategoriesCreateManyInput], {nullable:false})
    @Type(() => MoveMetaCategoriesCreateManyInput)
    data!: Array<MoveMetaCategoriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
