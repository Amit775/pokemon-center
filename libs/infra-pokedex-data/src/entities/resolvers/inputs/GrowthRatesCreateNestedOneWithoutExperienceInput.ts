import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCreateOrConnectWithoutExperienceInput } from "../inputs/GrowthRatesCreateOrConnectWithoutExperienceInput";
import { GrowthRatesCreateWithoutExperienceInput } from "../inputs/GrowthRatesCreateWithoutExperienceInput";
import { GrowthRatesWhereUniqueInput } from "../inputs/GrowthRatesWhereUniqueInput";

@TypeGraphQL.InputType("GrowthRatesCreateNestedOneWithoutExperienceInput", {})
export class GrowthRatesCreateNestedOneWithoutExperienceInput {
  @TypeGraphQL.Field(_type => GrowthRatesCreateWithoutExperienceInput, {
    nullable: true
  })
  create?: GrowthRatesCreateWithoutExperienceInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesCreateOrConnectWithoutExperienceInput, {
    nullable: true
  })
  connectOrCreate?: GrowthRatesCreateOrConnectWithoutExperienceInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesWhereUniqueInput, {
    nullable: true
  })
  connect?: GrowthRatesWhereUniqueInput | undefined;
}
