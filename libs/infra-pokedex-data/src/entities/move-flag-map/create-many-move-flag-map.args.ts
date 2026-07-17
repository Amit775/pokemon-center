import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagMapCreateManyInput } from './move-flag-map-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoveFlagMapArgs {

    @Field(() => [MoveFlagMapCreateManyInput], {nullable:false})
    @Type(() => MoveFlagMapCreateManyInput)
    data!: Array<MoveFlagMapCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
