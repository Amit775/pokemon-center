import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCreateWithoutExperienceInput } from "../inputs/GrowthRatesCreateWithoutExperienceInput";
import { GrowthRatesWhereUniqueInput } from "../inputs/GrowthRatesWhereUniqueInput";

@TypeGraphQL.InputType("GrowthRatesCreateOrConnectWithoutExperienceInput", {})
export class GrowthRatesCreateOrConnectWithoutExperienceInput {
  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: false
  })
  where!: GrowthRatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => GrowthRatesCreateWithoutExperienceInput, {
    nullable: false
  })
  create!: GrowthRatesCreateWithoutExperienceInput;
}
