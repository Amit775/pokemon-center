import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateWithoutLocationGameIndicesInput } from './generations-update-without-location-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutLocationGameIndicesInput } from './generations-create-without-location-game-indices.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutLocationGameIndicesInput {

    @Field(() => GenerationsUpdateWithoutLocationGameIndicesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutLocationGameIndicesInput)
    update!: Identity<GenerationsUpdateWithoutLocationGameIndicesInput>;

    @Field(() => GenerationsCreateWithoutLocationGameIndicesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutLocationGameIndicesInput)
    create!: Identity<GenerationsCreateWithoutLocationGameIndicesInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;
}
