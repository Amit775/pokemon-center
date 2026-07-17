import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaStatChangesCreateManyMetaInput } from './move-meta-stat-changes-create-many-meta.input';
import { Type } from 'class-transformer';

@InputType()
export class MoveMetaStatChangesCreateManyMetaInputEnvelope {

    @Field(() => [MoveMetaStatChangesCreateManyMetaInput], {nullable:false})
    @Type(() => MoveMetaStatChangesCreateManyMetaInput)
    data!: Array<MoveMetaStatChangesCreateManyMetaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
