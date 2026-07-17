import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateManySuperContestEffectInput } from './moves-create-many-super-contest-effect.input';
import { Type } from 'class-transformer';

@InputType()
export class MovesCreateManySuperContestEffectInputEnvelope {

    @Field(() => [MovesCreateManySuperContestEffectInput], {nullable:false})
    @Type(() => MovesCreateManySuperContestEffectInput)
    data!: Array<MovesCreateManySuperContestEffectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
