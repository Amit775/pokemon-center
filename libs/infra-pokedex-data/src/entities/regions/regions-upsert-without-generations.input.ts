import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsUpdateWithoutGenerationsInput } from './regions-update-without-generations.input';
import { Type } from 'class-transformer';
import { RegionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsUpsertWithoutGenerationsInput {

    @Field(() => RegionsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutGenerationsInput)
    update!: Identity<RegionsUpdateWithoutGenerationsInput>;

    @Field(() => RegionsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => RegionsCreateWithoutGenerationsInput)
    create!: Identity<RegionsCreateWithoutGenerationsInput>;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: Identity<RegionsWhereInput>;
}
