import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagMapCreateManyFlagInput } from './move-flag-map-create-many-flag.input';
import { Type } from 'class-transformer';

@InputType()
export class MoveFlagMapCreateManyFlagInputEnvelope {

    @Field(() => [MoveFlagMapCreateManyFlagInput], {nullable:false})
    @Type(() => MoveFlagMapCreateManyFlagInput)
    data!: Array<MoveFlagMapCreateManyFlagInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
