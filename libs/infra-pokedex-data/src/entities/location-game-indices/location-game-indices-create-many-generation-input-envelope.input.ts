import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesCreateManyGenerationInput } from './location-game-indices-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationGameIndicesCreateManyGenerationInputEnvelope {

    @Field(() => [LocationGameIndicesCreateManyGenerationInput], {nullable:false})
    @Type(() => LocationGameIndicesCreateManyGenerationInput)
    data!: Array<LocationGameIndicesCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
