import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateManyMoveInput } from './move-meta-create-many-move.input';
import { Type } from 'class-transformer';

@InputType()
export class MoveMetaCreateManyMoveInputEnvelope {

    @Field(() => [MoveMetaCreateManyMoveInput], {nullable:false})
    @Type(() => MoveMetaCreateManyMoveInput)
    data!: Array<MoveMetaCreateManyMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
