import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateManyContestEffectInput } from './moves-create-many-contest-effect.input';
import { Type } from 'class-transformer';

@InputType()
export class MovesCreateManyContestEffectInputEnvelope {

    @Field(() => [MovesCreateManyContestEffectInput], {nullable:false})
    @Type(() => MovesCreateManyContestEffectInput)
    data!: Array<MovesCreateManyContestEffectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
