import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaStatChangesCreateManyInput } from './move-meta-stat-changes-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoveMetaStatChangesArgs {

    @Field(() => [MoveMetaStatChangesCreateManyInput], {nullable:false})
    @Type(() => MoveMetaStatChangesCreateManyInput)
    data!: Array<MoveMetaStatChangesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
