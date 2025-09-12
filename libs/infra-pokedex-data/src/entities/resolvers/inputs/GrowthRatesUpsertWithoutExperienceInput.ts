import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCreateWithoutExperienceInput } from "../inputs/GrowthRatesCreateWithoutExperienceInput";
import { GrowthRatesUpdateWithoutExperienceInput } from "../inputs/GrowthRatesUpdateWithoutExperienceInput";
import { GrowthRatesWhereInput } from "../inputs/GrowthRatesWhereInput";

@TypeGraphQL.InputType("GrowthRatesUpsertWithoutExperienceInput", {})
export class GrowthRatesUpsertWithoutExperienceInput {
  @TypeGraphQL.Field(_type => GrowthRatesUpdateWithoutExperienceInput, {
    nullable: false
  })
  update!: GrowthRatesUpdateWithoutExperienceInput;

  @TypeGraphQL.Field(_type => GrowthRatesCreateWithoutExperienceInput, {
    nullable: false
  })
  create!: GrowthRatesCreateWithoutExperienceInput;

  @TypeGraphQL.Field(_type => GrowthRatesWhereInput, {
    nullable: true
  })
  where?: GrowthRatesWhereInput | undefined;
}
