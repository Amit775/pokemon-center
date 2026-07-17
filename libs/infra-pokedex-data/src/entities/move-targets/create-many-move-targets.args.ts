import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveTargetsCreateManyInput } from './move-targets-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoveTargetsArgs {

    @Field(() => [MoveTargetsCreateManyInput], {nullable:false})
    @Type(() => MoveTargetsCreateManyInput)
    data!: Array<MoveTargetsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
