import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateManyItemInput } from './berries-create-many-item.input';
import { Type } from 'class-transformer';

@InputType()
export class BerriesCreateManyItemInputEnvelope {

    @Field(() => [BerriesCreateManyItemInput], {nullable:false})
    @Type(() => BerriesCreateManyItemInput)
    data!: Array<BerriesCreateManyItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
