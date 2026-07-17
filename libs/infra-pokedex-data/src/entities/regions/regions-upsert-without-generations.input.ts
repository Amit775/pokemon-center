import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsUpdateWithoutGenerationsInput } from './regions-update-without-generations.input';
import { Type } from 'class-transformer';
import { RegionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsUpsertWithoutGenerationsInput {

    @Field(() => RegionsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutGenerationsInput)
    update!: RegionsUpdateWithoutGenerationsInput;

    @Field(() => RegionsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => RegionsCreateWithoutGenerationsInput)
    create!: RegionsCreateWithoutGenerationsInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;
}
