import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesUpdateWithoutExperienceInput } from "../inputs/GrowthRatesUpdateWithoutExperienceInput";
import { GrowthRatesWhereInput } from "../inputs/GrowthRatesWhereInput";

@TypeGraphQL.InputType("GrowthRatesUpdateToOneWithWhereWithoutExperienceInput", {})
export class GrowthRatesUpdateToOneWithWhereWithoutExperienceInput {
  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  where?: GrowthRatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesUpdateWithoutExperienceInput, {
    nullable: false
  })
  data!: GrowthRatesUpdateWithoutExperienceInput;
}
