import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsUpdateWithoutGenerationsInput } from './regions-update-without-generations.input';

@InputType()
export class RegionsUpdateToOneWithWhereWithoutGenerationsInput {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;

    @Field(() => RegionsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutGenerationsInput)
    data!: RegionsUpdateWithoutGenerationsInput;
}
