import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaCreateManyInput } from './move-meta-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoveMetaArgs {

    @Field(() => [MoveMetaCreateManyInput], {nullable:false})
    @Type(() => MoveMetaCreateManyInput)
    data!: Array<MoveMetaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
