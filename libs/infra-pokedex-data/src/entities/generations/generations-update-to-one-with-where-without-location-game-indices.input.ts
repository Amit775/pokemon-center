import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutLocationGameIndicesInput } from './generations-update-without-location-game-indices.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;

    @Field(() => GenerationsUpdateWithoutLocationGameIndicesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutLocationGameIndicesInput)
    data!: Identity<GenerationsUpdateWithoutLocationGameIndicesInput>;
}
