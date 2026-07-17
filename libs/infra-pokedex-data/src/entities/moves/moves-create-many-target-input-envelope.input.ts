import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateManyTargetInput } from './moves-create-many-target.input';
import { Type } from 'class-transformer';

@InputType()
export class MovesCreateManyTargetInputEnvelope {

    @Field(() => [MovesCreateManyTargetInput], {nullable:false})
    @Type(() => MovesCreateManyTargetInput)
    data!: Array<MovesCreateManyTargetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
