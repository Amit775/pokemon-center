import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagsCreateManyInput } from './move-flags-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMoveFlagsArgs {

    @Field(() => [MoveFlagsCreateManyInput], {nullable:false})
    @Type(() => MoveFlagsCreateManyInput)
    data!: Array<MoveFlagsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
