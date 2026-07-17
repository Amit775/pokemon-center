import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateManyFirmnessInput } from './berries-create-many-firmness.input';
import { Type } from 'class-transformer';

@InputType()
export class BerriesCreateManyFirmnessInputEnvelope {

    @Field(() => [BerriesCreateManyFirmnessInput], {nullable:false})
    @Type(() => BerriesCreateManyFirmnessInput)
    data!: Array<BerriesCreateManyFirmnessInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
