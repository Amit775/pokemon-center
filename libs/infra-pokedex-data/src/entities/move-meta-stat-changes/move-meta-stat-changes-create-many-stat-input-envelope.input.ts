import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaStatChangesCreateManyStatInput } from './move-meta-stat-changes-create-many-stat.input';
import { Type } from 'class-transformer';

@InputType()
export class MoveMetaStatChangesCreateManyStatInputEnvelope {

    @Field(() => [MoveMetaStatChangesCreateManyStatInput], {nullable:false})
    @Type(() => MoveMetaStatChangesCreateManyStatInput)
    data!: Array<MoveMetaStatChangesCreateManyStatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
