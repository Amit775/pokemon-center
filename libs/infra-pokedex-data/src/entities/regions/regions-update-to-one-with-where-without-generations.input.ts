import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsUpdateWithoutGenerationsInput } from './regions-update-without-generations.input';

@InputType()
export class RegionsUpdateToOneWithWhereWithoutGenerationsInput {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: Identity<RegionsWhereInput>;

    @Field(() => RegionsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutGenerationsInput)
    data!: Identity<RegionsUpdateWithoutGenerationsInput>;
}
