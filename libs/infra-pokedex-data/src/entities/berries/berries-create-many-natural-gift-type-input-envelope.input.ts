import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateManyNaturalGiftTypeInput } from './berries-create-many-natural-gift-type.input';
import { Type } from 'class-transformer';

@InputType()
export class BerriesCreateManyNaturalGiftTypeInputEnvelope {

    @Field(() => [BerriesCreateManyNaturalGiftTypeInput], {nullable:false})
    @Type(() => BerriesCreateManyNaturalGiftTypeInput)
    data!: Array<BerriesCreateManyNaturalGiftTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
