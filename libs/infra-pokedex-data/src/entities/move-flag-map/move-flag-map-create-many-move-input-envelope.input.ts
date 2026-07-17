import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagMapCreateManyMoveInput } from './move-flag-map-create-many-move.input';
import { Type } from 'class-transformer';

@InputType()
export class MoveFlagMapCreateManyMoveInputEnvelope {

    @Field(() => [MoveFlagMapCreateManyMoveInput], {nullable:false})
    @Type(() => MoveFlagMapCreateManyMoveInput)
    data!: Array<MoveFlagMapCreateManyMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
