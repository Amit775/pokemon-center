import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagMapCreateInput } from './move-flag-map-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveFlagMapArgs {

    @Field(() => MoveFlagMapCreateInput, {nullable:false})
    @Type(() => MoveFlagMapCreateInput)
    data!: MoveFlagMapCreateInput;
}
