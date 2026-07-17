import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateManyTypeInput } from './berry-flavors-create-many-type.input';
import { Type } from 'class-transformer';

@InputType()
export class BerryFlavorsCreateManyTypeInputEnvelope {

    @Field(() => [BerryFlavorsCreateManyTypeInput], {nullable:false})
    @Type(() => BerryFlavorsCreateManyTypeInput)
    data!: Array<BerryFlavorsCreateManyTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
