import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateManyContestTypeInput } from './moves-create-many-contest-type.input';
import { Type } from 'class-transformer';

@InputType()
export class MovesCreateManyContestTypeInputEnvelope {

    @Field(() => [MovesCreateManyContestTypeInput], {nullable:false})
    @Type(() => MovesCreateManyContestTypeInput)
    data!: Array<MovesCreateManyContestTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
