import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerriesCreateManyInput } from './berries-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBerriesArgs {

    @Field(() => [BerriesCreateManyInput], {nullable:false})
    @Type(() => BerriesCreateManyInput)
    data!: Array<BerriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
